import React from 'react';
import { Link } from 'react-router';

export default function Footer() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Basic Commands', path: '/commands' },
    { name: 'About', path: '/about' },
    { name: 'Documentation', path: '/documentation' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-sky-400">
            DockerLearn
          </div>
          <p className="text-sm">Learn Docker with practical examples, mini projects, and hands-on labs.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-semibold">Quick Links</h3>
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="hover:text-cyan-300 transition-colors text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social / Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-semibold">Connect</h3>
          <div className="flex gap-4 mt-2">
            {/* Placeholder icons - replace with actual social icons */}
            <a href="#" className="text-slate-300 hover:text-cyan-300 transition-colors">🐦</a>
            <a href="#" className="text-slate-300 hover:text-cyan-300 transition-colors">💼</a>
            <a href="#" className="text-slate-300 hover:text-cyan-300 transition-colors">🐱</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} DockerLearn • Made with ❤️ • Tailwind CSS & React
      </div>
    </footer>
  );
}
