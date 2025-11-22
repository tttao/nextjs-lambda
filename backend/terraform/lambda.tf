# SQS Queue
resource "aws_sqs_queue" "example_lambda_queue" {
  name = "example_lambda_queue"
  visibility_timeout_seconds = 300
}

# Lambda function
resource "aws_lambda_function" "example_lambda" {
  function_name = "example_lambda"
  role          = aws_iam_role.lambda_exec.arn
  handler       = "main.lambda_handler"
  runtime       = "python3.11"
  filename      = "${path.module}/../lambda/example-lambda.zip"
  source_code_hash = filebase64sha256("../lambda/example-lambda.zip")

  timeout       = 300
  memory_size   = 128
}

# Connect SQS to Lambda
resource "aws_lambda_event_source_mapping" "example_lambda_queue_trigger" {
  event_source_arn = aws_sqs_queue.example_lambda_queue.arn
  function_name    = aws_lambda_function.example_lambda.arn
  enabled          = true
}
