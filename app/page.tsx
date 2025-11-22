"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {

  const [input, setInput] = useState("");

  interface ApiResponse {
    statusCode: number;
    body: {
      original: string;
      reversed: string;
      uppercase: string;
      lowercase: string;
      length: number;
      vowels: number;
      consonants: number;
      initials: string;
      is_palindrome: boolean;
      greeting: string;
    };
  }

  const [result, setResult] = useState<ApiResponse | null>(null);

  const handleOnClick = async () => {
    const response = await fetch('/api/example', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: input }),
    });
    setResult(await response.json());
  }
  // {process.env.LAMBDA_FUNCTION_NAME}
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            AWS Lambda Demo with Next.js</h1>
            <p>Enter some text in the input below, then click <b>Submit</b> </p>

            <div className="w-full text-left space-y-2">
              <p className="font-medium">What happens under the hood:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }} className="space-y-2">
                <li style={{ display: 'list-item' }}>The Next.js API route <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">/api/example</code> receives the input.</li>
                <li style={{ display: 'list-item' }}>It invokes an AWS Lambda function using the AWS SDK.</li>
                <li style={{ display: 'list-item' }}>The Lambda function processes the input (reverses it, counts vowels, etc.) and returns the result.</li>
                <li style={{ display: 'list-item' }}>The API route sends the Lambda response back to the frontend, which displays it below.</li>
              </ul>
            </div>

            <div className="flex flex-row gap-2">
            <Input onChange={(e) => setInput(e.target.value)} value={input} placeholder="Enter your name" />
            <Button className="ml-2" onClick={handleOnClick}>Submit</Button>
            </div>

                {result && result.statusCode === 200 && (
                <div className="mt-4">
                  <p>Original: {result.body.original}</p>
                  <p>Reversed: {result.body.reversed}</p>
                  <p>Uppercase: {result.body.uppercase}</p>
                  <p>Lowercase: {result.body.lowercase}</p>
                  <p>Length: {result.body.length}</p>
                  <p>Vowels: {result.body.vowels}</p>
                  <p>Consonants: {result.body.consonants}</p>
                  <p>Initials: {result.body.initials}</p>
                  <p>Is Palindrome: {result.body.is_palindrome ? 'Yes' : 'No'}</p>
                  <p>{result.body.greeting}</p>
                </div>
                )}
        </div>
      </main>
    </div>
  );
}
