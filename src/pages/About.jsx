import React from 'react';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-slate-100 antialiased">
      <header className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-sky-400">This Project</span>
        </h1>
        <p className="mt-4 text-slate-300 text-lg">
          This project is designed to help developers learn Docker step by step, with hands-on examples, mini-projects, and essential commands.
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-6 pb-20 space-y-8">
        <div className="p-6 rounded-xl bg-white/3 border border-white/6 hover:shadow-xl transform hover:-translate-y-2 transition">
          <h2 className="text-2xl font-semibold mb-2">Purpose</h2>
          <p className="text-slate-300">To simplify Docker learning for beginners and provide practical examples that can be followed quickly.</p>
        </div>

        <div className="p-6 rounded-xl bg-white/3 border border-white/6 hover:shadow-xl transform hover:-translate-y-2 transition">
          <h2 className="text-2xl font-semibold mb-2">Target Audience</h2>
          <p className="text-slate-300">Beginners, developers, and DevOps enthusiasts who want to get started with containerization and Docker fundamentals.</p>
        </div>

        <div className="p-6 rounded-xl bg-white/3 border border-white/6 hover:shadow-xl transform hover:-translate-y-2 transition">
          <h2 className="text-2xl font-semibold mb-2">Tools Used</h2>
          <p className="text-slate-300">Tailwind CSS for styling, React for front-end, and Docker for containerization examples.</p>
        </div>
      </section>

      <footer className="border-t border-white/6 pt-6 pb-12 text-center text-sm text-slate-400">
        Made with ❤️ • Tailwind CSS • React
      </footer>
    </main>
  );
}
