import { useState } from 'react';

export default function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <main className="page">
      <div className="hero">
        <span className="pill">React + Vite</span>
        <h1>My First Static Website</h1>
        <p>Built with React. Ready to deploy using AWS Amplify Hosting.</p>
        <button onClick={() => setClicks(value => value + 1)}>
          Clicked {clicks} {clicks === 1 ? 'time' : 'times'}
        </button>
      </div>
      <section className="features">
        <article><h2>⚡ Fast</h2><p>Built with Vite for a lightweight frontend.</p></article>
        <article><h2>☁️ AWS Ready</h2><p>Publish the static build through Amplify Hosting.</p></article>
        <article><h2>🔒 No Backend</h2><p>No database, APIs or AWS credentials required.</p></article>
      </section>
      <footer>Static React Demo · No backend required</footer>
    </main>
  );
}
