# Load Testing Setup Guide

This guide will walk you through setting up and running distributed load tests using Apache JMeter and Ansible.

## Steps to Get Started

1. **Clone this Repository**
   ```bash
   git clone <your-repo-url>
   cd jmeter-test
   ```

2. **Install Ansible on Your Local Machine**
   ```bash
   brew install ansible   # For macOS users
   sudo apt install ansible  # For Ubuntu/Debian users
   ```

3. **Update Inventory File**
   Modify the `jmeter-test/ansible/inventory.ini` file to match your EC2 IPs and paths:
   ```
   [slaves]
   <your-ec2-public-ip>
   ```

4. **Add Your JMeter Test Plan**
   Replace the default test plan with your own:
   - Dont Rename only replace your `.jmx` file code in:
     ```
     practice-test.jmx
     ```

5. **Adjust Sleep Time for Your Test**
   Edit the following:
   - `sleep` time in `run-all.sh` (line 57) to match your expected test duration.
   - Also edit the `async` timeout and `retries` in `ansible/playbooks/run_test.yml` accordingly.

6. **Run the Test**
   Open a terminal, navigate to the scripts directory, and execute:
   ```bash
   cd scripts
   ./run-all.sh
   ```


## Notes

- Ensure you have SSH access to all EC2 instances listed in your inventory.
- The JMeter plugin JARs (e.g., for HLS) should be copied into `jmeter/lib/ext/` on all remote nodes before running tests for HLS testing
