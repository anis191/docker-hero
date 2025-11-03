import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaDocker, FaBookOpen, FaInfoCircle, FaTerminal } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { MdSchool } from 'react-icons/md';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/', icon: <HiHome className="text-cyan-500" /> },
    { name: 'Commands', path: '/commands', icon: <FaTerminal className="text-cyan-500" /> },
    { name: 'Tutorial', path: '/tutorial', icon: <MdSchool className="text-cyan-500" /> },
    { name: 'Documentation', path: '/documentation', icon: <FaBookOpen className="text-cyan-500" /> },
    { name: 'About', path: '/about', icon: <FaInfoCircle className="text-cyan-500" /> },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo with Docker React Icon */}
        <Link to="/" className="flex items-center gap-2">
          <FaDocker className="text-cyan-500 w-8 h-8" />
          <span className="text-2xl font-extrabold text-slate-900 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-sky-500">
            DockerHero
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex items-center gap-2 text-slate-800 hover:text-cyan-500 transition-colors font-medium"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-slate-800 focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-6 py-3 text-slate-800 hover:bg-cyan-100 transition-colors"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
