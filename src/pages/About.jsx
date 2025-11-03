import React from 'react';
import { FaBullseye, FaUsers, FaTools } from 'react-icons/fa';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-900 antialiased">
      {/* <header className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">  */}
      <header className="max-w-5xl mx-auto px-6 pt-18 pb-6 md:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-sky-500">This Project</span>
        </h1>
        <p className="mt-4 text-slate-700 text-lg">
          This project is designed to help developers learn Docker step by step, with hands-on examples, mini-projects, and essential commands.
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-6 pb-20 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {/* Purpose */}
        <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-200 hover:bg-cyan-100 hover:scale-105 transition-transform shadow-md flex flex-col items-center gap-4 text-center">
          <FaBullseye className="text-cyan-500 w-10 h-10" />
          <h2 className="text-2xl font-semibold text-slate-900">Purpose</h2>
          <p className="text-slate-700">
            To simplify Docker learning for beginners and provide practical examples that can be followed quickly.
          </p>
        </div>

        {/* Target Audience */}
        <div className="p-6 rounded-2xl bg-green-50 border border-green-200 hover:bg-green-100 hover:scale-105 transition-transform shadow-md flex flex-col items-center gap-4 text-center">
          <FaUsers className="text-green-500 w-10 h-10" />
          <h2 className="text-2xl font-semibold text-slate-900">Target Audience</h2>
          <p className="text-slate-700">
            Beginners, developers, and DevOps enthusiasts who want to get started with containerization and Docker fundamentals.
          </p>
        </div>

        {/* Tools Used */}
        <div className="p-6 rounded-2xl bg-purple-50 border border-purple-200 hover:bg-purple-100 hover:scale-105 transition-transform shadow-md flex flex-col items-center gap-4 text-center">
          <FaTools className="text-purple-500 w-10 h-10" />
          <h2 className="text-2xl font-semibold text-slate-900">Tools Used</h2>
          <p className="text-slate-700">
            Tailwind CSS for styling, React for front-end, and Docker for containerization examples.
          </p>
        </div>
      </section>
    </main>
  );
}
