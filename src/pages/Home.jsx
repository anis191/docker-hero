import React from 'react';
import { Link } from 'react-router';
import BlogSection from '../components/Home/BlogSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-slate-200 text-slate-900 antialiased">
      
      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Left: Hero Copy */}
          <div className="w-full md:flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Learning{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-sky-500">
                Docker
              </span>
            </h1>

            <p className="mt-4 text-slate-700 max-w-xl">
              Bite-sized guides, clean examples, and hands-on tasks to make containers simple. Build, run, and ship faster — step by step.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="tutorial"
                className="group inline-flex items-center gap-3 rounded-2xl bg-cyan-500/10 px-5 py-3 text-sm font-medium hover:bg-cyan-500/20 transform transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <span className="font-semibold">Get Started</span>
                <span className="transform group-hover:translate-x-2 transition">→</span>
              </Link>

              <Link
                to="commands"
                className="inline-flex items-center gap-3 rounded-2xl px-5 py-3 text-sm font-medium border border-slate-300 text-slate-800 hover:bg-slate-100 transition"
              >
                See Examples
              </Link>
            </div>

            <ul className="mt-6 flex gap-6 text-sm text-slate-700">
              <li className="flex flex-col">
                <span className="font-semibold text-slate-900">Hands-on</span>
                <span className="text-xs">Labs & mini projects</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-slate-900">Beginner</span>
                <span className="text-xs">No prior experience needed</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-slate-900">Practical</span>
                <span className="text-xs">Images, volumes, networking</span>
              </li>
            </ul>
          </div>

          {/* Right: Card / Terminal */}
          <aside className="w-full md:w-96 bg-white border border-slate-300 rounded-2xl p-5 shadow-lg transform transition hover:-translate-y-3 mt-4 md:mt-0">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-amber-400 rounded-full" />
              <span className="w-3 h-3 bg-emerald-500 rounded-full" />
            </div>

            <div className="font-mono text-sm space-y-2">
              <div>
                <span className="text-cyan-500">$</span> docker --version
              </div>
              <div>
                <span className="text-cyan-500">$</span> docker run hello-world
              </div>
              <div className="text-slate-500 text-xs mt-2">
                Running <span className="font-semibold">hello-world</span> prints a message from inside the container — that means it worked!
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <span className="px-2 py-1 rounded-md bg-slate-100 text-xs font-semibold">Image</span>
              <span className="px-2 py-1 rounded-md bg-slate-100 text-xs font-semibold">Container</span>
              <span className="px-2 py-1 rounded-md bg-slate-100 text-xs font-semibold">Volume</span>
            </div>
          </aside>
        </div>
      </header>

      {/* Get Started Section */}
      <section id="get-started" className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-slate-900">Get started in 3 steps</h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="p-6 rounded-xl bg-white border border-slate-300 hover:shadow-xl transform hover:-translate-y-2 transition">
              <div className="text-lg font-bold text-slate-900">1 — Install Docker</div>
              <p className="mt-2 text-sm text-slate-700">
                Download Docker Desktop for Windows/Mac or install the engine on Linux. Follow the official install guide for your OS.
              </p>
            </article>

            <article className="p-6 rounded-xl bg-white border border-slate-300 hover:shadow-xl transform hover:-translate-y-2 transition">
              <div className="text-lg font-bold text-slate-900">2 — Run a container</div>
              <p className="mt-2 text-sm text-slate-700">
                <code className="bg-slate-100 rounded px-1 py-0.5">docker run hello-world</code> verifies installation and shows how containers run isolated processes.
              </p>
            </article>

            <article className="p-6 rounded-xl bg-white border border-slate-300 hover:shadow-xl transform hover:-translate-y-2 transition">
              <div className="text-lg font-bold text-slate-900">3 — Build an image</div>
              <p className="mt-2 text-sm text-slate-700">
                Create a <code className="bg-slate-100 rounded px-1 py-0.5">Dockerfile</code>, build with <code className="bg-slate-100 rounded px-1 py-0.5">docker build</code>, and run locally.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Docker Blog Section */}
      <BlogSection />
    </main>
  );
}
