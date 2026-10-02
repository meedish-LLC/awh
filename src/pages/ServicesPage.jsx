import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Compass, Layers, Trees, ShieldAlert, Sparkles, FileText, HelpCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ServicesPage({ selectedServiceId, setSelectedServiceId, onSelectProject, onOpenContact }) {
  const [activeServiceId, setActiveServiceId] = useState(selectedServiceId || 'architecture');

  const activeService = siteData.services.find((s) => s.id === activeServiceId) || siteData.services[0];

  // Find projects that utilize this service
  const serviceProjects = siteData.projects.filter((p) =>
    p.services.some((s) => s.toLowerCase().includes(activeService.title.toLowerCase()) || activeService.title.toLowerCase().includes(s.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <section className="bg-[#3a5364] text-white py-16 px-4 sm:px-8 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-neutral-300 uppercase">
            <span>Disciplinary Practice</span>
            <span>•</span>
            <span>Technical Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
            Architecture & Consulting Services
          </h1>
          <p className="text-neutral-200 text-sm sm:text-base max-w-3xl font-light leading-relaxed">
            From forensic historic investigations and certified Passive House envelope design to complex municipal entitlements and full architectural documentation, our integrated services transform complex physical challenges into enduring community assets.
          </p>
        </div>
      </section>

      {/* Services Navigation Bar */}
      <section className="sticky top-20 z-30 bg-neutral-100 border-b border-neutral-300 py-3 px-4 sm:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
          {siteData.services.map((svc) => (
            <button
              key={svc.id}
              onClick={() => setActiveServiceId(svc.id)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all ${
                activeServiceId === svc.id
                  ? 'bg-[#243642] text-white font-semibold shadow-sm'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
              }`}
            >
              {svc.title}
            </button>
          ))}
        </div>
      </section>

      {/* Main Service Detail Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        {/* Top Service Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-neutral-50 border border-neutral-200 p-6 sm:p-10 shadow-sm">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d97706] font-semibold">
              Practice Discipline
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight">
              {activeService.title}
            </h2>
            <p className="text-base sm:text-lg font-light text-neutral-700 leading-relaxed">
              {activeService.tagline}
            </p>
            <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed border-t border-neutral-200 pt-4">
              {activeService.description}
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 bg-[#3a5364] hover:bg-[#2b3e4b] text-white text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
              >
                <span>Engage AWH for {activeService.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden border border-neutral-300 shadow-md">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Methodology & Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Methodology */}
          <div className="p-8 bg-white border border-neutral-200 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-neutral-900 font-mono text-xs uppercase tracking-widest font-semibold border-b border-neutral-200 pb-3">
              <Compass className="w-4 h-4 text-[#3a5364]" />
              <span>Design & Delivery Methodology</span>
            </div>
            <p className="text-sm font-light text-neutral-700 leading-relaxed">
              {activeService.methodology}
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-1">
                Quality Assurance:
              </span>
              <p className="text-xs text-neutral-600 font-light">
                Every phase is reviewed directly by our founding and associate principals to maintain fidelity to schedule, budget constraints, and sustainability standards.
              </p>
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="p-8 bg-neutral-50/70 border border-neutral-200 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-neutral-900 font-mono text-xs uppercase tracking-widest font-semibold border-b border-neutral-200 pb-3">
              <FileText className="w-4 h-4 text-[#3a5364]" />
              <span>Standard Deliverables & Documentation</span>
            </div>
            <ul className="space-y-3">
              {activeService.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 font-light">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Case Studies */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97706] font-semibold">
                Demonstrated Proof
              </span>
              <h3 className="text-2xl font-light text-neutral-900 mt-1">
                Selected Work Featuring {activeService.title}
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              {serviceProjects.length} Case Studies Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="group cursor-pointer bg-white border border-neutral-200 hover:border-[#3a5364] transition-all shadow-sm hover:shadow"
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#d97706]">
                    <span>{proj.market}</span>
                    <span>{proj.year}</span>
                  </div>
                  <h4 className="text-base font-medium text-neutral-900 group-hover:text-[#3a5364] transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-neutral-500 font-light line-clamp-2">
                    {proj.summary}
                  </p>
                  <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-[#3a5364] font-mono">
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
