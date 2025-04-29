#!/bin/bash

set -e

#echo "Installing Java and JMeter"
#ansible-playbook -i ../ansible/inventory.ini ../ansible/playbooks/install_java_jmeter.yml

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

echo "Merging all slave results into one file..."    ----------------------> For later use when have multiple Slaves
awk 'NR == 1 || $0 !~ /^timeStamp,elapsed,label,responseCode/' ../results/result-*.jtl > ../results/merged-result.jtl

echo "Verifying merged file..."
head -n 10 ../results/merged-result.jtl

echo "Generating HTML report"
jmeter -g ../results/merged-result.jtl -o ../html-report/

echo "All done"