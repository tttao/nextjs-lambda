import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js Lambda App',
  description: 'Sample Next.js application deployed on AWS Lambda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
