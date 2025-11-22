# nextjs-lambda

Sample Next.js application configured for AWS Lambda deployment.

## Overview

This project demonstrates how to build and deploy a Next.js application to AWS Lambda. It includes:

- Server-side rendering (SSR)
- API Routes
- Standalone output mode for Lambda compatibility
- Serverless Framework configuration

## Prerequisites

- Node.js 18.x or later
- AWS account
- AWS CLI configured with credentials
- Serverless Framework (optional, for deployment)

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Build

Build the application for production:

```bash
npm run build
```

The standalone output will be generated in `.next/standalone/`.

## Project Structure

```
nextjs-lambda/
├── src/
│   └── app/
│       ├── api/
│       │   └── hello/
│       │       └── route.ts       # Example API route
│       ├── layout.tsx             # Root layout
│       └── page.tsx               # Home page
├── next.config.js                 # Next.js configuration
├── package.json
├── serverless.yml                 # Serverless Framework config
└── tsconfig.json
```

## Deployment to AWS Lambda

### Option 1: Using Serverless Framework

1. Install Serverless Framework globally:
```bash
npm install -g serverless
```

2. Deploy to AWS:
```bash
npm run build
serverless deploy
```

### Option 2: Using AWS SAM

1. Build the Next.js application:
```bash
npm run build
```

2. Package and deploy using AWS SAM CLI (template required).

### Option 3: Using OpenNext

For more advanced Lambda deployments, consider using [OpenNext](https://open-next.js.org/).

## Features

- **Standalone Output**: Configured with `output: 'standalone'` in `next.config.js` for Lambda compatibility
- **API Routes**: Example API endpoint at `/api/hello`
- **TypeScript**: Full TypeScript support
- **SSR**: Server-side rendering enabled

## Configuration

### Next.js Configuration

The `next.config.js` file is configured for Lambda deployment:

```javascript
module.exports = {
  reactStrictMode: true,
  output: 'standalone',
}
```

### Environment Variables

Create a `.env.local` file for local development:

```
NODE_ENV=development
```

## API Endpoints

- `GET /api/hello` - Returns a JSON response with a greeting message

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/)
- [Serverless Framework](https://www.serverless.com/)
- [OpenNext](https://open-next.js.org/)

## License

MIT
