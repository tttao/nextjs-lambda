output "sqs_queue_url" {
    value = aws_sqs_queue.example_lambda_queue.url
}

output "sqs_queue_arn" {
    value = aws_sqs_queue.example_lambda_queue.arn
}

output "sqs_queue_name" {
    value = aws_sqs_queue.example_lambda_queue.name
}

output "lambda_function_name" {
    value = aws_lambda_function.example_lambda.function_name
}

output "lambda_function_arn" {
    value = aws_lambda_function.example_lambda.arn
}

output "lambda_function_qualified_arn" {
    value = aws_lambda_function.example_lambda.qualified_arn
}

output "aws_region" {
    value = aws_lambda_function.example_lambda.region
}