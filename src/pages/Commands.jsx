import React, { useState } from 'react';

export default function BasicDockerCommands() {
  const commandCategories = [
    {
      category: 'Docker Installation / Setup',
      commands: [
        { cmd: 'docker --version', desc: 'Check Docker version installed' },
        { cmd: 'docker info', desc: 'Display system-wide information' },
        { cmd: 'docker desktop', desc: 'Open Docker Desktop GUI' },
      ],
    },
    {
      category: 'Containers',
      commands: [
        { cmd: 'docker run <image>', desc: 'Run a container from an image' },
        { cmd: 'docker ps', desc: 'List running containers' },
        { cmd: 'docker ps -a', desc: 'List all containers' },
        { cmd: 'docker stop <container>', desc: 'Stop a running container' },
        { cmd: 'docker restart <container>', desc: 'Restart a container' },
        { cmd: 'docker rm <container>', desc: 'Remove a container' },
        { cmd: 'docker logs <container>', desc: 'View container logs' },
      ],
    },
    {
      category: 'Images',
      commands: [
        { cmd: 'docker images', desc: 'List downloaded images' },
        { cmd: 'docker pull <image>', desc: 'Pull image from registry' },
        { cmd: 'docker build -t <name> .', desc: 'Build image from Dockerfile' },
        { cmd: 'docker push <image>', desc: 'Push image to registry' },
        { cmd: 'docker rmi <image>', desc: 'Remove an image' },
      ],
    },
    {
      category: 'Volumes',
      commands: [
        { cmd: 'docker volume create <name>', desc: 'Create a volume' },
        { cmd: 'docker volume ls', desc: 'List all volumes' },
        { cmd: 'docker volume inspect <volume>', desc: 'Inspect a volume' },
        { cmd: 'docker volume rm <volume>', desc: 'Remove a volume' },
      ],
    },
    {
      category: 'Networks',
      commands: [
        { cmd: 'docker network create <name>', desc: 'Create a network' },
        { cmd: 'docker network ls', desc: 'List all networks' },
        { cmd: 'docker network inspect <name>', desc: 'Inspect network details' },
        { cmd: 'docker network rm <name>', desc: 'Remove a network' },
      ],
    },
    {
      category: 'System / Docker Desktop',
      commands: [
        { cmd: 'docker system prune', desc: 'Clean unused containers, images, networks' },
        { cmd: 'docker stats', desc: 'View live container metrics' },
        { cmd: 'docker-compose up', desc: 'Run multi-container apps' },
        { cmd: 'docker-compose down', desc: 'Stop multi-container apps' },
      ],
    },
  ];

  const [filter, setFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCategories = commandCategories
    .filter(cat => selectedCategory === 'All' || cat.category === selectedCategory)
    .map(cat => ({
      ...cat,
      commands: cat.commands.filter(
        c =>
          c.cmd.toLowerCase().includes(filter.toLowerCase()) ||
          c.desc.toLowerCase().includes(filter.toLowerCase())
      ),
    }))
    .filter(cat => cat.commands.length > 0);

  const categoryOptions = ['All', ...commandCategories.map(cat => cat.category)];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-slate-200 text-slate-900 antialiased">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 pt-18 pb-6 md:pt-24 md:pb-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">
          Docker <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-sky-500">Commands</span>
        </h1>
        {/* <p className="mt-4 text-slate-700 text-center max-w-2xl mx-auto"> */}
          {/* Professional Docker command reference with search and category filter. */}
        {/* </p> */}

        {/* Search + Category Filter */}
        {/* <div className="mt-6 flex justify-center items-center gap-4 flex-wrap"> */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Search commands..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
            // className="w-48 sm:w-64 px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm text-sm"
            className="input input-bordered w-36 xs:w-40 sm:w-48 md:w-64 text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
          />
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            // className="w-48 sm:w-64 px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm text-sm"
            className="select select-bordered w-36 xs:w-40 sm:w-48 md:w-64 text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
          >
            {categoryOptions.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </header>

      {/* Command Tables */}
      <section className="max-w-6xl mx-auto px-6 pb-20 space-y-12 text-xs md:text-sm">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4 border-b border-cyan-300 pb-2">
                {category.category}
              </h2>
              <div className="overflow-x-auto rounded-lg shadow-sm">
                <table className="min-w-full bg-white border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-800 border-b border-slate-200">Command</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-800 border-b border-slate-200">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.commands.map((c, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition">
                        {/* <td className="px-6 py-3 font-mono text-cyan-500 border-b border-slate-200">{c.cmd}</td> */}
                        <td className="px-6 py-3 font-mono text-cyan-800 border-b border-slate-300 font-semibold">{c.cmd}</td>
                        <td className="px-6 py-3 text-slate-700 border-b border-slate-200">{c.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-slate-500">No commands match your search.</p>
        )}
      </section>
    </main>
  );
}
