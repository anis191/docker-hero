import React from 'react';
import { Link } from 'react-router';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Basic Commands', path: '/commands' },
    { name: 'About', path: '/about' },
    { name: 'Documentation', path: '/documentation' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-extrabold text-slate-900 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-sky-500">
            DockerHero
          </div>
          <p className="text-sm">
            Learn Docker with practical examples, mini projects, and hands-on labs.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-slate-900 font-semibold">Quick Links</h3>
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="hover:text-cyan-500 transition-colors text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social / Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="text-slate-900 font-semibold">Connect</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-500 transition-colors text-xl">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-500 transition-colors text-xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-500 transition-colors text-xl">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 mt-8 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} DockerHero • Made with Tailwind CSS & React
      </div>
    </footer>
  );
}
