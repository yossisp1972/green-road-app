# Green Road App

## Overview
This application is a simple Python Flask web app deployed on AWS EKS. It serves a static HTML quiz at the root URL. The app is containerized with Docker and deployed using GitHub Actions.

## Deployment
- Source code is built into a Docker image and pushed to Amazon ECR.
- The image is deployed to an EKS cluster using a GitHub Actions workflow.
- The workflow updates the deployment, exposes the service via a LoadBalancer, and ensures the latest image is running.

## Monitoring
- **CloudWatch Container Insights** is enabled for the EKS cluster via the workflow.
- The workflow deploys the CloudWatch agent and Fluent Bit DaemonSet for full log and metrics collection.
- Logs and metrics are available in AWS CloudWatch (see the EKS cluster's Container Insights and Log Groups).

## How to Access
- After deployment, the app is available at the LoadBalancer's external URL (printed in the workflow logs).

## How to Monitor
- Go to AWS CloudWatch > Container Insights for dashboards and metrics.
- Go to AWS CloudWatch > Logs > Log groups for application and cluster logs.

## Infrastructure
- See the green-road-infra repo for Terraform code to provision the EKS cluster and networking.

