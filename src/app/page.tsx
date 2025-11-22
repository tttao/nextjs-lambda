export default function Home() {
  return (
    <main style={{ 
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1>Next.js Lambda Application</h1>
      <p>
        This is a sample Next.js application configured to run on AWS Lambda.
      </p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Features</h2>
        <ul>
          <li>Server-side rendering (SSR)</li>
          <li>API Routes</li>
          <li>Optimized for Lambda deployment</li>
          <li>Standalone output mode</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>API Example</h2>
        <p>
          Try the API route: <a href="/api/hello" style={{ color: '#0070f3' }}>/api/hello</a>
        </p>
      </section>
    </main>
  )
}
