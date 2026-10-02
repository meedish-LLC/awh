import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Award, CheckCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer({ setCurrentPage, onOpenContact }) {
  const handleNav = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#243642] text-neutral-300 font-sans border-t border-neutral-700/50">
      {/* Top Pre-Footer Callout */}
      <div className="border-b border-neutral-700/60 py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#d97706] font-mono block mb-2">
              Let's Build Together
            </span>
            <h3 className="text-2xl sm:text-3xl text-white font-light tracking-tight">
              Ready to explore your project's potential?
            </h3>
            <p className="text-neutral-400 text-sm mt-1 max-w-xl">
              From historic tax credits and pre-development feasibility to full architectural design and Passive House modeling.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 bg-white text-neutral-900 hover:bg-neutral-100 px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-all shadow-md group shrink-0"
          >
            <span>Request a Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Col 1: Brand & Monogram */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="border-2 border-white px-2.5 py-1 font-bold tracking-[0.25em] text-xl text-white">
                AWH
              </div>
              <span className="font-light tracking-[0.25em] text-sm text-neutral-300 uppercase">
                Architects
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              {siteData.firm.tagline}. A mission-driven architectural practice dedicated to resilient communities, historic preservation, and high-performance design.
            </p>
            
            {/* Credentials Badges */}
            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                Professional Credentials
              </span>
              <div className="flex flex-wrap gap-2">
                {siteData.firm.credentials.map((cred, i) => (
                  <span
                    key={i}
                    title={cred.title}
                    className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-1 bg-white/10 text-neutral-200 border border-white/15 rounded"
                  >
                    <CheckCircle className="w-3 h-3 text-[#d97706]" />
                    {cred.code}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Markets */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4 border-b border-neutral-700/80 pb-2">
              Markets
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {siteData.markets.slice(0, 6).map((m) => (
                <li key={m.id}>
                  <button
                    onClick={() => handleNav('markets')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {m.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('markets')}
                  className="text-[#d97706] hover:text-amber-400 transition-colors font-medium flex items-center gap-1"
                >
                  View All Markets →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4 border-b border-neutral-700/80 pb-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {siteData.services.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="text-[#d97706] hover:text-amber-400 transition-colors font-medium flex items-center gap-1"
                >
                  Project Portfolio →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio & Resources */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4 border-b border-neutral-700/80 pb-2">
              Studio & Knowledge
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button onClick={() => handleNav('studio')} className="hover:text-white transition-colors">
                  Our Team & Leadership
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('studio')} className="hover:text-white transition-colors">
                  Firm Values & Mission
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('studio')} className="hover:text-white transition-colors">
                  Honors & Recognition
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('resources')} className="hover:text-white transition-colors">
                  Tax Credit & Passive House Guides
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('resources')} className="hover:text-white transition-colors">
                  Articles & Insights
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('resources')} className="hover:text-white transition-colors">
                  Client FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Office */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4 border-b border-neutral-700/80 pb-2">
              Office
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                <span>{siteData.firm.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d97706] shrink-0" />
                <a href={`tel:${siteData.firm.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">
                  {siteData.firm.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d97706] shrink-0" />
                <a href={`mailto:${siteData.firm.email}`} className="hover:text-white transition-colors">
                  {siteData.firm.email}
                </a>
              </div>
              <div className="pt-2">
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">Hours</span>
                <span className="text-neutral-300">Mon – Fri: 8:30am – 5:30pm CST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} AWH Architects LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Minneapolis • St. Paul • Regional Practice</span>
            <span className="text-neutral-700">•</span>
            <button onClick={() => handleNav('studio')} className="hover:text-neutral-300 transition-colors">
              Privacy & Legal
            </button>
            <span className="text-neutral-700">•</span>
            <button onClick={onOpenContact} className="hover:text-neutral-300 transition-colors">
              Inquire
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
