import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-slate-100 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left: Hero copy */}
          <div className="w-full md:flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Learning <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-sky-400">Docker</span>
            </h1>

            <p className="mt-4 text-slate-300 max-w-xl">
              Bite-sized guides, clean examples and hands-on tasks to make containers simple. Build, run, and ship faster — step by step.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#get-started"
                className="group inline-flex items-center gap-3 rounded-2xl bg-cyan-400/10 px-5 py-3 text-sm font-medium hover:bg-cyan-400/20 transform transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span className="font-semibold">Get Started</span>
                <span className="transform group-hover:translate-x-2 transition">→</span>
              </a>

              <a
                href="#examples"
                className="inline-flex items-center gap-3 rounded-2xl px-5 py-3 text-sm font-medium border border-white/10 text-slate-200 hover:bg-white/3 transition"
              >
                See Examples
              </a>
            </div>

            <ul className="mt-6 flex gap-6 text-sm text-slate-300">
              <li className="flex flex-col">
                <span className="font-semibold text-slate-100">Hands-on</span>
                <span className="text-xs">Labs & mini projects</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-slate-100">Beginner</span>
                <span className="text-xs">No prior experience needed</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-slate-100">Practical</span>
                <span className="text-xs">Images, volumes, networking</span>
              </li>
            </ul>
          </div>

          {/* Right: Card/terminal */}
          <aside className="w-full md:w-96 bg-gradient-to-b from-white/3 to-white/2 border border-white/6 rounded-2xl p-5 shadow-lg transform transition hover:-translate-y-3">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 bg-red-400 rounded-full" />
              <span className="w-3 h-3 bg-amber-400 rounded-full" />
              <span className="w-3 h-3 bg-emerald-400 rounded-full" />
            </div>

            <div className="font-mono text-sm space-y-2">
              <div>
                <span className="text-cyan-300">$</span> docker --version
              </div>
              <div>
                <span className="text-cyan-300">$</span> docker run hello-world
              </div>
              <div className="text-slate-400 text-xs mt-2">Running <span className="font-semibold">hello-world</span> prints a message from inside the container — that means it worked!</div>
            </div>

            <div className="mt-4 flex gap-2">
              <span className="px-2 py-1 rounded-md bg-white/6 text-xs font-semibold">Image</span>
              <span className="px-2 py-1 rounded-md bg-white/6 text-xs font-semibold">Container</span>
              <span className="px-2 py-1 rounded-md bg-white/6 text-xs font-semibold">Volume</span>
            </div>
          </aside>
        </div>
      </header>

      <section id="get-started" className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center">Get started in 3 steps</h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="p-6 rounded-xl bg-white/3 border border-white/6 hover:shadow-xl transform hover:-translate-y-2 transition">
              <div className="text-lg font-bold">1 — Install Docker</div>
              <p className="mt-2 text-sm text-slate-300">Download Docker Desktop for Windows/Mac or install the engine on Linux. Follow the official install guide for your OS.</p>
            </article>

            <article className="p-6 rounded-xl bg-white/3 border border-white/6 hover:shadow-xl transform hover:-translate-y-2 transition">
              <div className="text-lg font-bold">2 — Run a container</div>
              <p className="mt-2 text-sm text-slate-300"><code className="bg-white/5 rounded px-1 py-0.5">docker run hello-world</code> verifies installation and shows how containers run isolated processes.</p>
            </article>

            <article className="p-6 rounded-xl bg-white/3 border border-white/6 hover:shadow-xl transform hover:-translate-y-2 transition">
              <div className="text-lg font-bold">3 — Build an image</div>
              <p className="mt-2 text-sm text-slate-300">Create a <code className="bg-white/5 rounded px-1 py-0.5">Dockerfile</code>, build with <code className="bg-white/5 rounded px-1 py-0.5">docker build</code>, and run locally.</p>
            </article>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/6 pt-6 pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-slate-400">Made with ❤️ • Tailwind CSS • No external JS libraries</div>
      </footer>
    </main>
  );
}
