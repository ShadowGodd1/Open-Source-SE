variable "aws_region" {
  description = "The AWS region to deploy to"
  type        = string
  default     = "eu-west-1"
}

variable "ami_id" {
  description = "The AMI ID to use for the EC2 instance"
  type        = string
  default     = "ami-0694d931cee176e7d" # Ubuntu 22.04 LTS in eu-west-1
}

variable "instance_type" {
  description = "The instance type to use for the EC2 instance"
  type        = string
  default     = "t3.small"
}

variable "key_name" {
  description = "The name of the key pair to use for SSH access"
  type        = string
}

variable "ssh_cidr_block" {
  description = "The CIDR block to allow SSH access from"
  type        = string
  default     = "0.0.0.0/0" # Should be restricted in production
}

variable "db_username" {
  description = "The username for the database"
  type        = string
  sensitive   = true
}

variable "db_password" {
  description = "The password for the database"
  type        = string
  sensitive   = true
}
