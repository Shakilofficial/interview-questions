# 📘 AWS Interview Questions

---

## 📚 Table of Contents

1. [What is AWS and its main services?](#1-what-is-aws-and-its-main-services)
2. [What are the different AWS deployment models?](#2-what-are-the-different-aws-deployment-models)
3. [What is AWS EC2 and what are its benefits?](#3-what-is-aws-ec2-and-what-are-its-benefits)
4. [What is AWS RDS and when do you use it?](#4-what-is-aws-rds-and-when-do-you-use-it)
5. [What is AWS S3 and what are its use cases?](#5-what-is-aws-s3-and-what-are-its-use-cases)
6. [What is AWS Lambda and how is it different from EC2?](#6-what-is-aws-lambda-and-how-is-it-different-from-ec2)
7. [What are AWS security groups and network ACLs?](#7-what-are-aws-security-groups-and-network-acls)
8. [What is VPC in AWS?](#8-what-is-vpc-in-aws)
9. [What is AWS IAM and why is it important?](#9-what-is-aws-iam-and-why-is-it-important)
10. [What is AWS CloudFront?](#10-what-is-aws-cloudfront)
11. [What is AWS Elastic Load Balancing?](#11-what-is-aws-elastic-load-balancing)
12. [What is AWS Auto Scaling?](#12-what-is-aws-auto-scaling)
13. [What is AWS CloudWatch?](#13-what-is-aws-cloudwatch)
14. [What is AWS SNS and SQS?](#14-what-is-aws-sns-and-sqs)
15. [What is AWS DynamoDB?](#15-what-is-aws-dynamodb)
16. [What is AWS ElastiCache?](#16-what-is-aws-elasticache)
17. [What is AWS CodeDeploy?](#17-what-is-aws-codedeploy)
18. [How do you optimize AWS costs?](#18-how-do-you-optimize-aws-costs)
19. [What is AWS backup and disaster recovery?](#19-what-is-aws-backup-and-disaster-recovery)
20. [What are AWS best practices for security?](#20-what-are-aws-best-practices-for-security)

---

### 1. What is AWS and its main services?

**AWS (Amazon Web Services)** is a cloud computing platform offering 200+ services. Main services:

- **Compute**: EC2, Lambda, ECS.
- **Storage**: S3, EBS, EFS.
- **Database**: RDS, DynamoDB, ElastiCache.
- **Networking**: VPC, CloudFront, Route 53.
- **Analytics**: Redshift, Kinesis, Athena.
- **Messaging**: SNS, SQS, Kinesis.
- **Security**: IAM, KMS, Secrets Manager.
- **DevOps**: CodePipeline, CodeDeploy, CloudFormation.

---

### 2. What are the different AWS deployment models?

**Public Cloud**: Applications hosted on AWS infrastructure, accessible over the internet.

**Private Cloud**: AWS Outposts brings AWS services to on-premises infrastructure.

**Hybrid Cloud**: Combination of public and private, with AWS and on-premises systems.

Choose based on:

- Compliance requirements
- Data sensitivity
- Control needs
- Cost considerations

---

### 3. What is AWS EC2 and what are its benefits?

**EC2 (Elastic Compute Cloud)** provides resizable virtual machines (instances) in the cloud. Benefits:

- **Flexibility**: Choose OS, instance type (CPU, memory).
- **Scalability**: Scale up/down based on demand.
- **Cost-effective**: Pay-as-you-go model.
- **Security**: Integrate with VPC, security groups.
- **Global**: Available in multiple regions.

Instance types (by use case):

- **t**: General purpose, burstable.
- **m**: General purpose, balanced.
- **c**: Compute optimized.
- **r**: Memory optimized.
- **i**: Storage optimized.
- **p**: GPU instances for ML.

---

### 4. What is AWS RDS and when do you use it?

**RDS (Relational Database Service)** is a managed relational database service supporting multiple engines:

- PostgreSQL
- MySQL
- MariaDB
- Oracle
- SQL Server

When to use:

- Need relational database with SQL.
- Automated backups and patches.
- High availability with Multi-AZ.
- Read replicas for scaling.

---

### 5. What is AWS S3 and what are its use cases?

**S3 (Simple Storage Service)** is object storage for files of any type. Use cases:

- **Static websites**: Host HTML, CSS, JS.
- **Backups**: Backup important data.
- **Media storage**: Store images, videos, documents.
- **Data lakes**: Store big data for analytics.
- **Log storage**: Application and server logs.

Features:

- Highly available and durable (99.999999999% durability).
- Scalable to any size.
- Versioning support.
- Access control (public/private).

---

### 6. What is AWS Lambda and how is it different from EC2?

**Lambda** is a serverless compute service that runs code without managing servers. Differences:

| Lambda                       | EC2              |
| ---------------------------- | ---------------- |
| **Serverless**               | Manage instances |
| **Auto-scaling**             | Manual scaling   |
| **Pay per invocation**       | Pay per hour     |
| **Short-lived (15 min max)** | Long-running     |
| **Event-driven**             | Always running   |
| **Easier**                   | More control     |

Use Lambda for:

- Event handlers (S3 upload, API calls)
- Scheduled tasks (cron jobs)
- Microservices
- Data processing

---

### 7. What are AWS security groups and network ACLs?

**Security Groups**: Act as virtual firewalls for EC2 instances. Stateful (return traffic allowed automatically).

```
Inbound: Allow SSH (port 22) from 0.0.0.0/0
Outbound: Allow all traffic
```

**Network ACLs**: Subnet-level firewalls. Stateless (must explicitly allow return traffic).

```
Inbound: Allow HTTP (port 80) from 0.0.0.0/0
Outbound: Allow all traffic
```

Security Groups are more commonly used.

---

### 8. What is VPC in AWS?

**VPC (Virtual Private Cloud)** is a logically isolated network in AWS. Components:

- **Subnets**: Sub-networks within VPC (public/private).
- **Route Tables**: Control traffic routing.
- **Internet Gateway**: Enable internet access.
- **NAT Gateway**: Allow private instances to access internet.
- **Security Groups**: Firewalls for instances.
- **Network ACLs**: Subnet-level firewalls.

---

### 9. What is AWS IAM and why is it important?

**IAM (Identity and Access Management)** manages user access to AWS resources. Why it's important:

- **Security**: Control who accesses what resources.
- **Fine-grained Control**: Permissions down to individual API calls.
- **Principle of Least Privilege**: Users get minimum necessary permissions.
- **Audit**: Track who made what changes.

Components:

- **Users**: Individual people.
- **Groups**: Collections of users.
- **Roles**: Assume roles for temporary access.
- **Policies**: Define permissions.

---

### 10. What is AWS CloudFront?

**CloudFront** is a CDN (Content Delivery Network) that caches content at edge locations globally. Benefits:

- **Performance**: Content delivered from nearest edge location.
- **Reduced latency**: Faster response times.
- **Reduced load**: Origin server handles less traffic.
- **DDoS protection**: AWS Shield is built-in.
- **HTTPS support**: Secure content delivery.

Use cases:

- Serve static content (images, videos)
- Accelerate dynamic content
- Live streaming

---

### 11. What is AWS Elastic Load Balancing?

**ELB** distributes incoming traffic across multiple targets (EC2, Lambda, IP addresses). Types:

**Application Load Balancer (ALB)**:

- Layer 7 (Application) routing
- Path-based routing
- Hostname-based routing
- Best for web applications

**Network Load Balancer (NLB)**:

- Layer 4 (Transport) routing
- Ultra-high performance
- For extreme throughput and low latency

**Classic Load Balancer (CLB)**:

- Legacy, not recommended
- Layer 4 and 7 (limited)

---

### 12. What is AWS Auto Scaling?

**Auto Scaling** automatically adjusts capacity based on demand. Components:

- **Launch Templates**: Define instance configuration.
- **Auto Scaling Groups**: Group of instances with scaling policies.
- **Scaling Policies**: Rules to scale up/down.

Example:

```
Scale Up: If CPU > 70% for 5 minutes, add 2 instances
Scale Down: If CPU < 20% for 10 minutes, remove 1 instance
Min Instances: 2
Max Instances: 10
```

---

### 13. What is AWS CloudWatch?

**CloudWatch** is a monitoring and observability service. Features:

- **Metrics**: Track EC2, RDS, Lambda, custom metrics.
- **Logs**: Centralize application and system logs.
- **Alarms**: Alert when metrics exceed thresholds.
- **Dashboards**: Visualize metrics.
- **Insights**: Query and analyze logs.

Example alarm:

```
If EC2 CPU > 80% for 5 minutes, send SNS notification
```

---

### 14. What is AWS SNS and SQS?

**SNS (Simple Notification Service)**: Publish-subscribe messaging.

- Publish messages to topics
- Multiple subscribers receive messages
- Supports email, SMS, HTTP, Lambda

**SQS (Simple Queue Service)**: Message queue service.

- Queue messages for processing
- One consumer at a time
- Built-in retries and DLQ

Use SNS for broadcasting, SQS for decoupling producer-consumer.

---

### 15. What is AWS DynamoDB?

**DynamoDB** is a managed NoSQL database. Features:

- **Key-value store**: Fast lookups by key.
- **Fully managed**: No server maintenance.
- **Scalable**: Automatic scaling.
- **Fast**: Single-digit millisecond latency.
- **Consistent**: Strong consistency option.

Use cases:

- Session storage
- User profiles
- Real-time analytics

---

### 16. What is AWS ElastiCache?

**ElastiCache** is a managed in-memory cache service (Redis, Memcached). Benefits:

- **Performance**: Sub-millisecond latency.
- **Reduced database load**: Cache frequently accessed data.
- **Automatic failover**: High availability.
- **Easier deployment**: No infrastructure management.

Use cases:

- Session storage
- Real-time leaderboards
- Caching database queries

---

### 17. What is AWS CodeDeploy?

**CodeDeploy** automates application deployments to EC2, on-premises, Lambda. Features:

- **Automated deployments**: Deploy to multiple instances.
- **Rollback**: Automatic rollback on failure.
- **Traffic shifting**: Gradually shift traffic (canary deployments).
- **Lifecycle hooks**: Run scripts before/after deployment.

---

### 18. How do you optimize AWS costs?

- **Use spot instances**: Up to 90% discount for variable workloads.
- **Reserved instances**: Pre-pay for sustained usage.
- **Rightsizing**: Choose appropriate instance sizes.
- **Auto Scaling**: Scale down during low traffic.
- **Stop unused instances**: Only pay for what you use.
- **Use CloudFront**: Reduce data transfer costs.
- **Monitor with Cost Explorer**: Track and optimize spending.
- **Storage life cycle**: Move old data to cheaper storage.

---

### 19. What is AWS backup and disaster recovery?

**Backup Strategies**:

- **S3 backups**: Copy data to S3.
- **RDS backups**: Automated snapshots, backups.
- **AMI snapshots**: EBS volume snapshots.
- **Cross-region backups**: For disaster recovery.

**Disaster Recovery**:

- **RPO (Recovery Point Objective)**: How much data loss is acceptable.
- **RTO (Recovery Time Objective)**: How quickly must system be restored.
- **Backup and restore**: Low cost, high RTO.
- **Pilot light**: Hot standby with minimal resources.
- **Warm standby**: Scaled-down production copy.
- **Active/active**: Full redundancy, low RTO.

---

### 20. What are AWS best practices for security?

- **IAM**: Use roles, not access keys for EC2.
- **Security Groups**: Restrict to necessary ports.
- **Encryption**: Enable at-rest and in-transit encryption.
- **Secrets Manager**: Store secrets, not in code.
- **VPC**: Use private subnets for databases.
- **MFA**: Multi-factor authentication for critical accounts.
- **Logging**: Enable CloudTrail for audit logs.
- **Patching**: Keep instances updated.
- **Application Security**: Validate inputs, prevent injection.
- **Data Privacy**: Classify data, apply appropriate controls.

---
