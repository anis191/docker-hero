import React from 'react';

export default function DocumentationLinks() {
  const links = [
    { name: 'Docker Official Docs', url: 'https://docs.docker.com/' },
    { name: 'Docker CLI Reference', url: 'https://docs.docker.com/engine/reference/commandline/cli/' },
    { name: 'Docker Hub', url: 'https://hub.docker.com/' },
    { name: 'Play with Docker', url: 'https://labs.play-with-docker.com/' },
    { name: 'Docker Compose', url: 'https://docs.docker.com/compose/' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-slate-100 antialiased">
      <header className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          Useful <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-sky-400">Documentation</span>
        </h1>
        <p className="mt-4 text-slate-300 text-lg">Quick links to Docker official resources and tools to continue your learning journey.</p>
      </header>

      <section className="max-w-4xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl bg-white/3 border border-white/6 hover:shadow-xl transform hover:-translate-y-2 transition text-slate-100 text-center"
          >
            {link.name}
          </a>
        ))}
      </section>

      <footer className="border-t border-white/6 pt-6 pb-12 text-center text-sm text-slate-400">
        Made with ❤️ • Tailwind CSS • React
      </footer>
    </main>
  );
}
