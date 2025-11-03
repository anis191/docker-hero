import React from 'react';

export default function BasicDockerCommands() {
  const commands = [
    { cmd: 'docker --version', desc: 'Check Docker version installed' },
    { cmd: 'docker run hello-world', desc: 'Run a test container' },
    { cmd: 'docker ps', desc: 'List running containers' },
    { cmd: 'docker ps -a', desc: 'List all containers' },
    { cmd: 'docker images', desc: 'List downloaded images' },
    { cmd: 'docker stop <container>', desc: 'Stop a running container' },
    { cmd: 'docker rm <container>', desc: 'Remove a container' },
    { cmd: 'docker rmi <image>', desc: 'Remove an image' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-slate-100 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">
          Basic <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-sky-400">Docker Commands</span>
        </h1>
        <p className="mt-4 text-slate-300 text-center max-w-2xl mx-auto">
          A quick reference for essential Docker commands to manage images, containers, and volumes.
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {commands.map((c, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-white/3 border border-white/6 hover:shadow-xl transform hover:-translate-y-2 transition">
            <code className="text-cyan-300 font-mono">{c.cmd}</code>
            <p className="mt-2 text-sm text-slate-300">{c.desc}</p>
          </div>
        ))}
      </section>

      <footer className="border-t border-white/6 pt-6 pb-12 text-center text-sm text-slate-400">
        Made with ❤️ • Tailwind CSS
      </footer>
    </main>
  );
}
