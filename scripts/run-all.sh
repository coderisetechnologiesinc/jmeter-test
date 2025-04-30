#!/bin/bash

set -e

# Check and install JMeter only if not already installed
echo "Checking JMeter installation on slaves"
NEED_INSTALL=false

for HOST in $(awk '/^[0-9]/{print $1}' ../ansible/inventory.ini); do
    echo "Checking JMeter on $HOST"
    if ! ssh -o StrictHostKeyChecking=no -i ../ansible/jmeter-lt-test-key.pem ubuntu@$HOST 'test -x /home/ubuntu/jmeter/bin/jmeter'; then
        echo "JMeter not found on $HOST. Marking for install."
        NEED_INSTALL=true
        break
    else
        echo "JMeter already installed on $HOST"
    fi
done

if [ "$NEED_INSTALL" = true ]; then
    echo "Installing Java and JMeter only where not present..."
    ansible-playbook -i ../ansible/inventory.ini ../ansible/playbooks/install_java_jmeter.yml

    # Remove old jmeter binary (may be broken or cause memory issues)
    echo "Removing old jmeter binary to avoid memory conflicts"
    ansible -i ../ansible/inventory.ini all -m file \
        -a "path=/home/ubuntu/jmeter/bin/jmeter state=absent" \
        --user ubuntu --private-key ../ansible/jmeter-lt-test-key.pem

    # Copy known working binary from local machine
    echo "Copying fresh jmeter binary from local machine to all slaves"
    ansible -i ../ansible/inventory.ini all -m copy \
        -a "src=../scripts/jmeter dest=/home/ubuntu/jmeter/bin/jmeter mode=0755" \
        --user ubuntu --private-key ../ansible/jmeter-lt-test-key.pem

    # Always copy the plugin JAR to all slaves
    echo "Copying HLS Plugin JAR to all slaves"
    ansible -i ../ansible/inventory.ini all -m copy \
        -a "src=../scripts/jmeter-bzm-hls-3.1.jar dest=/home/ubuntu/jmeter/lib/ext/jmeter-bzm-hls-3.1.jar mode=0644" \
        --user ubuntu --private-key ../ansible/jmeter-lt-test-key.pem    
fi


rm -rf ../results/*
rm -rf ../html-report/*

echo "Deleting Previous files from Slave"
ansible-playbook -i ../ansible/inventory.ini ../ansible/playbooks/cleanup_slave.yml

echo "Copying Test Plan"
ansible-playbook -i ../ansible/inventory.ini ../ansible/playbooks/copy_test_file.yml

echo "Running Test on all slaves"
ansible-playbook -i ../ansible/inventory.ini ../ansible/playbooks/run_test.yml

echo "Waiting for Test to finish"
sleep 300  # adjust according to test duration

echo "Fetching Results"
ansible-playbook -i ../ansible/inventory.ini ../ansible/playbooks/fetch_results.yml

echo "Merging all slave results into one file..."
awk 'NR == 1 || $0 !~ /^timeStamp,elapsed,label,responseCode/' ../results/result-*.jtl > ../results/merged-result.jtl

echo "Verifying merged file..."
head -n 10 ../results/merged-result.jtl

echo "Generating HTML report"
jmeter -g ../results/merged-result.jtl -o ../html-report/

echo "All done"