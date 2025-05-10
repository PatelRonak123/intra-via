

  <h1>🎥 IntraVia</h1>
  <p><strong>IntraVia</strong> is a modern and minimal video interview and meeting platform built with performance and simplicity in mind. It leverages cutting-edge technologies like <strong>Next.js 14</strong>, <strong>Stream Video SDK</strong>, <strong>Convex</strong>, and <strong>Clerk</strong> to deliver a smooth, secure, and scalable virtual meeting experience.</p>

  <hr>

  <h2>🧩 Features</h2>
  <ul>
    <li>✅ Authentication & user management via Clerk</li>
    <li>📹 High-quality video calling with Stream SDK</li>
    <li>🧠 Persistent data using Convex</li>
    <li>⚡ Instant loading and routing with Next.js App Router</li>
    <li>💡 Clean UI with Tailwind CSS and ShadCN components</li>
    <li>📱 Mobile-first and responsive design</li>
    <li>🧾 Notes, meeting history, and context tracking (optional modules)</li>
  </ul>

  <hr>

  <h2>🛠️ Tech Stack</h2>
  <table>
    <thead>
      <tr><th>Category</th><th>Tech Used</th></tr>
    </thead>
    <tbody>
      <tr><td>Frontend</td><td>Next.js 14, React, TypeScript</td></tr>
      <tr><td>Backend/DB</td><td>Convex</td></tr>
      <tr><td>Video SDK</td><td>Stream Video SDK</td></tr>
      <tr><td>Authentication</td><td>Clerk</td></tr>
      <tr><td>Styling</td><td>Tailwind CSS, ShadCN UI</td></tr>
    </tbody>
  </table>

  <hr>

  <h2>🚀 Getting Started</h2>

  <h3>1. Clone the Repository</h3>
  <pre><code>git clone https://github.com/PatelRonak123/intra-via.git
cd intra-via</code></pre>

  <h3>2. Install Dependencies</h3>
  <pre><code>npm install
# or
yarn install</code></pre>

  <h3>3. Configure Environment Variables</h3>
  <p>Create a <code>.env.local</code> file and add:</p>
  <pre><code>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret

NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET=your_stream_secret

CONVEX_DEPLOYMENT=your_convex_url</code></pre>

  <h3>4. Start Convex Locally</h3>
  <pre><code>npx convex dev</code></pre>

  <h3>5. Run the App</h3>
  <pre><code>npm run dev
# or
yarn dev</code></pre>

  <hr>

  <h2>📁 Folder Structure</h2>
  <pre><code>intra-via/
│
├── app/              # Next.js App Router pages and routes
├── components/       # Reusable UI components
├── convex/           # Convex functions and data logic
├── lib/              # Utility and config helpers
├── public/           # Static files and assets
├── styles/           # Tailwind and global CSS
└── .env.local        # Environment configuration</code></pre>

  <hr>

  <h2>🧪 Deployment</h2>
  <p>This project is ready to deploy on:</p>
  <ul>
    <li><strong>Vercel</strong> – Frontend hosting</li>
    <li><strong>Convex Cloud</strong> – Backend hosting</li>
    <li><strong>Clerk Dashboard</strong> – Authentication provider</li>
    <li><strong>Stream Dashboard</strong> – Video infrastructure</li>
  </ul>

  <hr>

  <h2>📃 License</h2>
  <p>This project is licensed under the <a href="./LICENSE">MIT License</a>.</p>

  <hr>

  <h2>🙌 Contributions</h2>
  <p>Pull requests and suggestions are welcome. Fork the repo and submit a PR!</p>

</body>
</html>
