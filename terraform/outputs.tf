output "web_public_ip" {
  description = "The public IP address of the web server"
  value       = aws_eip.web.public_ip
}

output "web_public_dns" {
  description = "The public DNS name of the web server"
  value       = aws_instance.web.public_dns
}

output "db_endpoint" {
  description = "The endpoint of the database"
  value       = aws_db_instance.main.endpoint
}

output "db_name" {
  description = "The name of the database"
  value       = aws_db_instance.main.db_name
}

output "db_username" {
  description = "The username for the database"
  value       = aws_db_instance.main.username
  sensitive   = true
}
