# Placeholder Terraform file to illustrate structure
terraform {
  required_version = ">= 1.0"
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "artifacts" {
  bucket = "learnquest-artifacts-${random_id.rand.hex}"
  acl    = "private"
}

resource "random_id" "rand" {
  byte_length = 4
}