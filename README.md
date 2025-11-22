This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

# Step 1: build the lambda function using the provided Bash script, or Powershell script.

It is not exactly a build, it only creates a zip file containing the Python file. The zip file is then used in the Terraform scripts.

```bash
cd backend/lambda
./build.sh
```

# Step 2: bootstrap the infrastructure in AWS

```bash
cd backend/terraform
terraform apply
```

The scripts creates:
- IAM Policy & Role for the Lambda function
- A SQS queue to trigger the Lambda in an event-driven way
- A lambda function using the zip file created at step 1.

This is just a quick example, the state is stored locally, and there are variables.

# Step 3: Configure the application's .env file

You can simply copy the provided .env.example file and save it as .env

```bash
cp .env.example .env
```

# Step 4: Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
