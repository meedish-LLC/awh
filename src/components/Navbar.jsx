import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'markets', label: 'Markets' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'resources', label: 'Resources' },
    { id: 'studio', label: 'Studio' },
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-all">
      {/* Top micro-bar for quick contact */}
      <div className="bg-[#243642] text-neutral-300 text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wide">
          <span className="hidden sm:inline font-mono uppercase tracking-widest text-[11px] text-neutral-400">
            AWH Architects — Minneapolis, MN
          </span>
          <div className="flex items-center gap-5 ml-auto text-[11px] font-sans">
            <a href="tel:6125585383" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-[#d97706]" />
              <span>(612) 558-5383</span>
            </a>
            <span className="text-neutral-500">|</span>
            <a href="mailto:info@awharchitects.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3 text-[#d97706]" />
              <span>info@awharchitects.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="group flex flex-col text-left focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <div className="border border-neutral-900 px-2 py-0.5 font-bold tracking-[0.25em] text-lg sm:text-xl text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
              AWH
            </div>
            <span className="font-light tracking-[0.25em] text-xs sm:text-sm text-neutral-600 uppercase group-hover:text-neutral-900 transition-colors">
              Architects
            </span>
          </div>
          <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-mono mt-0.5">
            Architecture • Planning • Preservation
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm tracking-widest uppercase transition-all relative py-1 focus:outline-none ${
                currentPage === item.id
                  ? 'text-neutral-900 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#3a5364]'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 bg-[#3a5364] hover:bg-[#2b3e4b] text-white text-xs uppercase tracking-widest px-5 py-2.5 font-medium transition-all shadow-sm hover:shadow"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-800 hover:text-neutral-900 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base tracking-wider uppercase py-2 border-b border-neutral-100 flex justify-between items-center ${
                  currentPage === item.id ? 'text-[#3a5364] font-semibold' : 'text-neutral-700'
                }`}
              >
                <span>{item.label}</span>
                {currentPage === item.id && <span className="w-2 h-2 rounded-full bg-[#3a5364]" />}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-[#3a5364] text-white text-xs uppercase tracking-widest py-3 font-medium"
            >
              <span>Start a Project Discussion</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
