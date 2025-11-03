import React from 'react';
import { FaDocker, FaLinux, FaTerminal, FaGitAlt, FaGithub } from 'react-icons/fa';

export default function DocumentationLinks() {
  const links = [
    { name: 'Windows CMD', url: 'https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cmd', icon: <FaTerminal className="text-slate-700 w-6 h-6" /> },
    { name: 'Ubuntu Linux', url: 'https://ubuntu.com/tutorials', icon: <FaLinux className="text-orange-500 w-6 h-6" /> },
    { name: 'Git Bash', url: 'https://gitforwindows.org/', icon: <FaGitAlt className="text-red-500 w-6 h-6" /> },
    { name: 'Docker Official Docs', url: 'https://docs.docker.com/', icon: <FaDocker className="text-cyan-500 w-6 h-6" /> },
    { name: 'Docker CLI Reference', url: 'https://docs.docker.com/engine/reference/commandline/cli/', icon: <FaDocker className="text-cyan-500 w-6 h-6" /> },
    { name: 'Docker Hub', url: 'https://hub.docker.com/', icon: <FaDocker className="text-cyan-500 w-6 h-6" /> },
    { name: 'Play with Docker', url: 'https://labs.play-with-docker.com/', icon: <FaDocker className="text-cyan-500 w-6 h-6" /> },
    { name: 'Docker Compose', url: 'https://docs.docker.com/compose/', icon: <FaDocker className="text-cyan-500 w-6 h-6" /> },
    { name: 'GitHub', url: 'https://github.com/', icon: <FaGithub className="text-slate-900 w-6 h-6" /> },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-slate-200 text-slate-900 antialiased">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 pt-18 pb-6 md:pt-24 md:pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          Useful <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-sky-500">Documentation</span>
        </h1>
        <p className="mt-4 text-slate-700 text-lg">
          Quick links to Docker, Linux, Git, and terminal resources to enhance your learning journey.
        </p>
      </header>

      {/* Documentation Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white border border-slate-300 hover:shadow-xl transform hover:-translate-y-2 transition text-slate-900 text-center flex flex-col justify-center items-center gap-3"
          >
            {link.icon}
            <span className="text-lg font-semibold">{link.name}</span>
            <span className="text-sm text-cyan-500 font-bold">Visit →</span>
          </a>
        ))}
      </section>
    </main>
  );
}
