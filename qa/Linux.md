# 📘 Linux Interview Questions

---

## 📚 Table of Contents

1. [What is Linux and what are its advantages?](#1-what-is-linux-and-what-are-its-advantages)
2. [What are the main Linux distributions?](#2-what-are-the-main-linux-distributions)
3. [What is the Linux file system structure?](#3-what-is-the-linux-file-system-structure)
4. [What are absolute and relative paths?](#4-what-are-absolute-and-relative-paths)
5. [How do you navigate directories in Linux?](#5-how-do-you-navigate-directories-in-linux)
6. [What are file permissions and how do you change them?](#6-what-are-file-permissions-and-how-do-you-change-them)
7. [What is sudo and how does it work?](#7-what-is-sudo-and-how-does-it-work)
8. [What are users and groups in Linux?](#8-what-are-users-and-groups-in-linux)
9. [How do you manage processes in Linux?](#9-how-do-you-manage-processes-in-linux)
10. [What is the difference between foreground and background processes?](#10-what-is-the-difference-between-foreground-and-background-processes)
11. [How do you manage packages in Linux?](#11-how-do-you-manage-packages-in-linux)
12. [What are environment variables and how do you set them?](#12-what-are-environment-variables-and-how-do-you-set-them)
13. [What is shell scripting and why is it important?](#13-what-is-shell-scripting-and-why-is-it-important)
14. [How do you search for files and text in Linux?](#14-how-do-you-search-for-files-and-text-in-linux)
15. [What are pipes and redirection in Linux?](#15-what-are-pipes-and-redirection-in-linux)
16. [How do you work with disk management in Linux?](#16-how-do-you-work-with-disk-management-in-linux)
17. [What is the cron scheduler and how do you use it?](#17-what-is-the-cron-scheduler-and-how-do-you-use-it)
18. [How do you manage network settings in Linux?](#18-how-do-you-manage-network-settings-in-linux)
19. [How do you manage services and daemons?](#19-how-do-you-manage-services-and-daemons)
20. [What are Linux best practices for server management?](#20-what-are-linux-best-practices-for-server-management)

---

### 1. What is Linux and what are its advantages?

**Linux** is a free, open-source operating system kernel developed by Linus Torvalds. Advantages:

- **Open Source**: Source code is available for modification.
- **Free**: No licensing costs.
- **Stable**: Extremely reliable and robust.
- **Portable**: Runs on various hardware from servers to embedded devices.
- **Secure**: Strong security features and community support.
- **Multitasking**: Run multiple processes simultaneously.
- **Multi-user**: Multiple users work simultaneously.

---

### 2. What are the main Linux distributions?

Popular Linux distributions:

- **Ubuntu**: Beginner-friendly, widely used.
- **Debian**: Stable, foundation for Ubuntu.
- **CentOS/RHEL**: Enterprise-focused.
- **Fedora**: Cutting-edge features.
- **Alpine**: Lightweight, minimal.
- **Arch Linux**: Minimalist, rolling release.
- **Kali Linux**: Security/penetration testing.

---

### 3. What is the Linux file system structure?

Main directories:

- `/`: Root directory
- `/bin`: Essential command binaries
- `/sbin`: System binaries
- `/etc`: Configuration files
- `/home`: User home directories
- `/root`: Root user home
- `/var`: Variable data (logs, caches)
- `/tmp`: Temporary files
- `/usr`: User programs and libraries
- `/lib`: Libraries
- `/opt`: Optional packages
- `/dev`: Device files
- `/proc`: Process information
- `/sys`: System information

---

### 4. What are absolute and relative paths?

**Absolute Path**: Full path from root (`/`).

```bash
/home/user/documents/file.txt
/etc/nginx/nginx.conf
```

**Relative Path**: Path from current directory.

```bash
documents/file.txt    # From home directory
../parent/file.txt    # Go up one directory
./current.txt         # Current directory
```

---

### 5. How do you navigate directories in Linux?

```bash
pwd                   # Print working directory
ls                    # List files
ls -la                # Long format with hidden files
cd /home              # Change directory
cd ~                  # Go to home directory
cd ..                 # Go to parent directory
cd -                  # Go to previous directory
tree                  # Show directory tree
find . -name "*.txt"  # Find files by pattern
```

---

### 6. What are file permissions and how do you change them?

File permissions: **Owner | Group | Others**

```
rwx rwx rwx
r (read)     = 4
w (write)    = 2
x (execute)  = 1
```

Example: `rwx-r-x-r-- = 755`

Change permissions:

```bash
chmod 755 file.txt          # rwxr-xr-x
chmod u+x file.txt          # Add execute for user
chmod 644 file.txt          # rw-r--r--
chmod -R 755 directory      # Recursive change
```

Change ownership:

```bash
chown user:group file.txt
chown -R user:group directory
```

---

### 7. What is sudo and how does it work?

**sudo (superuser do)** executes commands with elevated privileges (as root).

```bash
sudo apt update              # Run as superuser
sudo su                      # Switch to root shell
sudo -l                      # List your sudo privileges
sudo -i                      # Login as root
```

Configure sudo access in `/etc/sudoers`:

```bash
sudo visudo                  # Edit sudoers file safely
user ALL=(ALL) ALL          # User can run all commands
user ALL=(ALL) NOPASSWD: /usr/bin/restart-service  # No password for specific command
```

---

### 8. What are users and groups in Linux?

**Users**: Individual accounts with unique UID (user ID).

```bash
useradd username            # Create user
passwd username             # Set password
userdel username            # Delete user
usermod -aG group username  # Add user to group
```

**Groups**: Collections of users with unique GID (group ID).

```bash
groupadd groupname          # Create group
groupdel groupname          # Delete group
groups username             # List user's groups
members groupname           # List group members
```

View users and groups:

```bash
cat /etc/passwd             # User info
cat /etc/group              # Group info
cat /etc/shadow             # User passwords (root only)
```

---

### 9. How do you manage processes in Linux?

```bash
ps                          # List current process
ps aux                      # List all processes
ps aux | grep node          # Find specific process
top                         # Real-time process monitor
htop                        # Interactive process monitor
kill PID                    # Terminate process by PID
kill -9 PID                 # Force kill
killall process_name        # Kill by process name
pgrep process_name          # Get PID of process
```

---

### 10. What is the difference between foreground and background processes?

**Foreground Process**: Runs in terminal, blocks user input.

```bash
npm start                   # Runs in foreground
```

**Background Process**: Runs without blocking terminal.

```bash
npm start &                 # Run in background
nohup npm start &           # Run even if terminal closes
jobs                        # List background jobs
fg %1                       # Bring job 1 to foreground
bg %2                       # Continue stopped job in background
```

---

### 11. How do you manage packages in Linux?

**Ubuntu/Debian (apt)**:

```bash
apt update                  # Update package index
apt install package_name    # Install package
apt upgrade                 # Upgrade packages
apt remove package_name     # Remove package
apt search keyword          # Search packages
```

**CentOS/RHEL (yum/dnf)**:

```bash
yum install package_name
yum update
yum remove package_name
yum search keyword
```

---

### 12. What are environment variables and how do you set them?

View environment variables:

```bash
env                         # List all variables
echo $HOME                  # Print HOME variable
echo $PATH                  # Print PATH
```

Set variables:

```bash
export MY_VAR="value"      # Set for current session
MY_VAR="value"             # Set for current shell only
```

Persist in `.bashrc` or `.bash_profile`:

```bash
echo 'export MY_VAR="value"' >> ~/.bashrc
source ~/.bashrc            # Reload
```

---

### 13. What is shell scripting and why is it important?

**Shell scripting** automates tasks using shell commands in a script file.

```bash
#!/bin/bash                 # Shebang line

# Variables
name="John"
age=30

# Conditionals
if [ $age -gt 18 ]; then
    echo "$name is an adult"
fi

# Loops
for i in 1 2 3; do
    echo "Number: $i"
done

# Functions
greet() {
    echo "Hello, $1!"
}
greet "World"
```

Why important:

- Automate repetitive tasks
- System administration
- Deployment scripts
- Backup and maintenance

---

### 14. How do you search for files and text in Linux?

Find files:

```bash
find . -name "*.txt"        # Find by name
find . -type f -size +1M    # Find files larger than 1MB
find . -mtime -7            # Modified in last 7 days
locate filename             # Fast search using index
which command               # Find command path
```

Search text in files:

```bash
grep "pattern" file.txt     # Search in file
grep -r "pattern" .         # Recursive search
grep -i "pattern" file.txt  # Case-insensitive
grep -n "pattern" file.txt  # Show line numbers
grep -c "pattern" file.txt  # Count matches
```

---

### 15. What are pipes and redirection in Linux?

**Redirection**:

```bash
command > output.txt        # Redirect output to file (overwrite)
command >> output.txt       # Append output to file
command < input.txt         # Redirect input from file
command 2> error.txt        # Redirect error output
command 2>&1 output.txt     # Redirect both output and error
```

**Pipes**:

```bash
command1 | command2         # Pass output of command1 to command2
ps aux | grep node          # Find node process
cat file.txt | grep "word"  # Search in file content
ls -la | sort               # Sort directory listing
```

---

### 16. How do you work with disk management in Linux?

View disk usage:

```bash
df -h                       # Disk space by partition
du -h directory             # Disk usage of directory
du -sh directory            # Total size of directory
lsblk                       # Block devices (partitions)
fdisk -l                    # Partition table (requires sudo)
```

Mount/unmount:

```bash
mount /dev/sda1 /mnt        # Mount device to directory
umount /mnt                 # Unmount
mkdir -p /mnt/backup        # Create mount point
```

---

### 17. What is the cron scheduler and how do you use it?

**cron** schedules tasks to run at specific times. Edit cron jobs:

```bash
crontab -e                  # Edit cron jobs
crontab -l                  # List cron jobs
crontab -r                  # Remove all cron jobs
```

Cron syntax:

```
Minute Hour Day Month DayOfWeek Command
 0     2    *   *     *         /backup.sh
 */5   *    *   *     *         /script.sh     # Every 5 minutes
 0     2    1   *     *         /backup.sh     # Monthly at 2 AM
 0     0    *   *     1         /clean.sh      # Weekly on Monday
```

---

### 18. How do you manage network settings in Linux?

View network info:

```bash
ifconfig                    # Network interfaces (deprecated)
ip addr show                # IP addresses
ip route                    # Routing table
ss -tuln                    # Open ports
netstat -tlnp               # Listening ports
ping google.com             # Test connectivity
nslookup 8.8.8.8            # DNS lookup
```

Configure network:

```bash
nmtui                       # Network manager TUI
nano /etc/netplan/01-netcfg.yaml     # Ubuntu config
systemctl restart networking         # Restart networking
```

---

### 19. How do you manage services and daemons?

Using systemd:

```bash
systemctl status nginx      # Check service status
systemctl start nginx       # Start service
systemctl stop nginx        # Stop service
systemctl restart nginx     # Restart service
systemctl enable nginx      # Enable at boot
systemctl disable nginx     # Disable at boot
systemctl list-units --type=service  # List all services
journalctl -u nginx         # View service logs
```

---

### 20. What are Linux best practices for server management?

- **Regular Updates**: Keep system and packages updated.
- **Firewall**: Use iptables or firewalld to restrict access.
- **SSH Security**: Disable password authentication, use key-based auth.
- **Monitoring**: Use tools like Prometheus, Grafana for monitoring.
- **Backups**: Regular backups of critical data.
- **Least Privilege**: Run services with minimum required permissions.
- **Logging**: Enable audit logging, centralize logs.
- **Security Patches**: Apply security updates promptly.
- **Documentation**: Document system configuration and changes.
- **Resource Limits**: Set ulimits for processes.

---
