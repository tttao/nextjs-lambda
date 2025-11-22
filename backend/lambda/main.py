import csv
import io
import json
import re

def lambda_handler(event, context):
    # Handle SQS event or direct invocation
    record = event["Records"][0]
    body = json.loads(record["body"])
    input_name = body["input_name"]

    return {
        'statusCode': 200,
        'body': {
            'original': input_name,
            'reversed': input_name[::-1],
            'uppercase': input_name.upper(),
            'lowercase': input_name.lower(),
            'length': len(input_name),
            'vowels': sum(1 for c in input_name.lower() if c in 'aeiou'),
            'consonants': sum(1 for c in input_name.lower() if c.isalpha() and c not in 'aeiou'),
            'initials': ''.join(word[0].upper() for word in input_name.split() if word),
            'is_palindrome': input_name.lower() == input_name.lower()[::-1],
            'greeting': f'Hello, {input_name}! '
        }
    }