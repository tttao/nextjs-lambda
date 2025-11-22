import { NextRequest, NextResponse } from 'next/server';
import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda';

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json();

    if (!name || typeof name !== 'string') {
      return NextResponse.json(
        { error: 'Name is required and must be a string' },
        { status: 400 }
      );
    }
    // Call Lambda using AWS SDK

    const lambdaClient = new LambdaClient({ region: process.env.AWS_REGION || 'us-east-1' });

    const lambdaPayload = {
      Records: [
          {
          body: JSON.stringify({ input_name: name })
          }
        ]
    };

    const command = new InvokeCommand({
      FunctionName: process.env.LAMBDA_FUNCTION_NAME || 'your-lambda-function-name',
      Payload: JSON.stringify(lambdaPayload),
    });

    const lambdaResponse = await lambdaClient.send(command);
    const lambdaResult = JSON.parse(new TextDecoder().decode(lambdaResponse.Payload));

    console.log('Lambda result:', lambdaResult);
    return NextResponse.json(lambdaResult);
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
