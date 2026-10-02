import React from 'react';
import { ArrowRight, ArrowUpRight, Award, Compass, Sparkles, Building2, Trees, Layers } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function HomePage({ setCurrentPage, onSelectProject, onSelectMarket, onSelectService, onOpenContact }) {
  // Select top projects to show
  const featuredProjects = siteData.projects.slice(0, 6);

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION (matches the Miro mockup) */}
      <section className="relative w-full overflow-hidden bg-neutral-900 border-b border-neutral-200">
        <div className="relative h-[65vh] sm:h-[75vh] w-full">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=85"
            alt="AWH Architects historic masonry and urban revitalization project"
            className="w-full h-full object-cover opacity-90 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
          
          {/* Top subtle overlay text */}
          <div className="absolute top-6 right-6 hidden sm:block text-right">
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80 bg-black/40 px-3 py-1 backdrop-blur-sm border border-white/20">
              Heritage Mills Adaptive Reuse — Minneapolis
            </span>
          </div>

          {/* Bottom Hero Overlay */}
          <div className="absolute bottom-8 left-4 sm:left-12 right-4 sm:right-12 max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6 text-white">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#d97706] font-semibold">
                Architecture • Planning • Historic Preservation
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight">
                Where place meets purpose.
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentPage('projects')}
                className="px-6 py-3 bg-white text-neutral-900 text-xs font-semibold uppercase tracking-widest hover:bg-neutral-100 transition-colors shadow-lg flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenContact}
                className="px-6 py-3 bg-transparent border border-white text-white text-xs font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HEADLINE & MANIFESTO SECTION (matches mockup layout) */}
      <section className="py-20 px-4 sm:px-8 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <h2 className="text-4xl sm:text-5xl font-light text-neutral-900 tracking-tight leading-tight">
              Where place<br />meets purpose
            </h2>
            <div className="w-16 h-1 bg-[#3a5364] mt-6" />
          </div>

          <div className="md:col-span-7 space-y-4 text-neutral-600 text-base sm:text-lg leading-relaxed font-light">
            <p>
              AWH is a mission-driven architectural design and planning firm dedicated to creating resilient, community-centered environments. We combine technical rigor, passive house sustainability, and historic preservation to design spaces that empower neighborhoods and endure for generations.
            </p>
            <p className="text-sm sm:text-base text-neutral-500">
              Our multidisciplinary studio bridges the gap between ambitious civic vision and pragmatic constructability—securing vital historic tax credits, modeling ultra-low energy performance, and honoring local identity in every detail.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => setCurrentPage('studio')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#3a5364] hover:text-[#243642] font-semibold border-b border-[#3a5364] pb-0.5"
              >
                <span>Read our firm philosophy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE SECTION (Slate blue band from Miro mockup) */}
      <section className="bg-[#3a5364] text-white py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/20 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-300">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mt-1">
                Expertise
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('services')}
              className="text-xs uppercase font-mono tracking-widest text-neutral-200 hover:text-white flex items-center gap-1.5 transition-colors self-start sm:self-auto"
            >
              <span>View all 5 practice areas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3 Cards from Mockup: Architecture, Historic Consulting, Planning & Pre Development */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Architecture */}
            <div 
              onClick={() => {
                onSelectService('architecture');
                setCurrentPage('services');
              }}
              className="group cursor-pointer space-y-4"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-800 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                  alt="Architecture practice with timber pergola and community courtyard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-light text-white group-hover:text-amber-300 transition-colors">
                  Architecture
                </h3>
                <div className="w-12 h-0.5 bg-white/40 group-hover:w-20 group-hover:bg-amber-400 transition-all duration-300" />
                <p className="text-xs text-neutral-300 font-light pt-2 line-clamp-2">
                  Full-scope architectural design integrating sustainability, functional beauty, and community focus.
                </p>
              </div>
            </div>

            {/* Card 2: Historic Consulting */}
            <div 
              onClick={() => {
                onSelectService('historic-consulting');
                setCurrentPage('services');
              }}
              className="group cursor-pointer space-y-4"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-800 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=800&q=80"
                  alt="Historic Consulting classical revival restoration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-light text-white group-hover:text-amber-300 transition-colors">
                  Historic Consulting
                </h3>
                <div className="w-12 h-0.5 bg-white/40 group-hover:w-20 group-hover:bg-amber-400 transition-all duration-300" />
                <p className="text-xs text-neutral-300 font-light pt-2 line-clamp-2">
                  National Register nominations, SHPO liaison, and unlocking millions in state & federal Historic Tax Credits.
                </p>
              </div>
            </div>

            {/* Card 3: Planning & Pre Development */}
            <div 
              onClick={() => {
                onSelectService('planning');
                setCurrentPage('services');
              }}
              className="group cursor-pointer space-y-4"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-800 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Planning & Pre Development aerial site master planning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-light text-white group-hover:text-amber-300 transition-colors">
                  Planning & Pre Development
                </h3>
                <div className="w-12 h-0.5 bg-white/40 group-hover:w-20 group-hover:bg-amber-400 transition-all duration-300" />
                <p className="text-xs text-neutral-300 font-light pt-2 line-clamp-2">
                  Zoning analyses, yield studies, massing models, and pro forma feasibility to de-risk development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AWH TEAM / STUDIO PREVIEW (matches mockup layout) */}
      <section className="py-20 px-4 sm:px-8 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="md:col-span-4 space-y-5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d97706] font-semibold">
              The Collective
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight">
              AWH Team
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed">
              A multidisciplinary collective of architects, certified passive house consultants, historic preservation specialists, and interior designers dedicated to design excellence and enduring community value.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setCurrentPage('studio')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#3a5364] font-semibold border-b border-[#3a5364] pb-1 hover:text-[#243642] transition-colors"
              >
                <span>Meet the full team →</span>
              </button>
            </div>
          </div>

          {/* Right Image (Group photo styling as in mockup) */}
          <div className="md:col-span-8">
            <div className="relative aspect-[16/9] overflow-hidden bg-neutral-200 border border-neutral-300 shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="AWH Architects Team standing together on a balcony"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 border border-neutral-300 text-[11px] font-mono text-neutral-700">
                Minneapolis Studio • 12 Multidisciplinary Architects & Planners
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MARKETS SECTION (matches mockup layout with underlines) */}
      <section className="py-20 px-4 sm:px-8 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d97706] font-semibold">
                Sectors We Serve
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-neutral-900 mt-1">
                Markets
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('markets')}
              className="text-xs uppercase font-mono tracking-widest text-[#3a5364] hover:text-[#243642] flex items-center gap-1.5 transition-colors self-start sm:self-auto font-medium"
            >
              <span>Explore all 8 market sectors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 6 Grid items from the Miro Mockup:
              1. Community & Non-Profit
              2. Multi-Family Housing
              3. Adaptive Reuse - Historic Preservation
              4. Commercial
              5. Residential
              6. Interiors
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.markets.slice(0, 6).map((market) => (
              <div
                key={market.id}
                onClick={() => {
                  onSelectMarket(market.id);
                  setCurrentPage('markets');
                }}
                className="group cursor-pointer space-y-3"
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100 border border-neutral-200">
                  <img
                    src={market.image}
                    alt={market.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-light text-neutral-900 group-hover:text-[#3a5364] transition-colors">
                    {market.title}
                  </h3>
                  {/* Underline bar matching design image */}
                  <div className="w-12 h-0.5 bg-neutral-400 group-hover:w-20 group-hover:bg-[#3a5364] transition-all duration-300" />
                  <p className="text-xs text-neutral-500 font-light line-clamp-2 pt-1">
                    {market.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIAL BANNER (Panoramic pavilion in prairie landscape from Miro mockup) */}
      <section className="relative w-full h-[55vh] sm:h-[65vh] overflow-hidden bg-neutral-900">
        <img
          src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1920&q=85"
          alt="Architectural shelter pavilion in prairie grassland"
          className="w-full h-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />

        {/* Top-Right Overlaid Quote (as shown in mockup) */}
        <div className="absolute top-10 sm:top-16 right-4 sm:right-16 max-w-lg text-right text-white space-y-3 p-4">
          <p className="text-lg sm:text-2xl font-light italic leading-relaxed text-white drop-shadow-md">
            “{siteData.testimonials[0].quote}”
          </p>
          <div className="pt-2">
            <span className="block text-sm font-semibold tracking-wide text-amber-300">
              {siteData.testimonials[0].author}
            </span>
            <span className="block text-xs font-mono text-neutral-300">
              {siteData.testimonials[0].role}
            </span>
          </div>
        </div>
      </section>

      {/* 7. NEWS + INSIGHTS SECTION (Matches mockup layout) */}
      <section className="py-20 px-4 sm:px-8 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d97706] font-semibold">
                Resources Hub
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-neutral-900 mt-1">
                News + Insights
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('resources')}
              className="text-xs uppercase font-mono tracking-widest text-[#3a5364] hover:text-[#243642] flex items-center gap-1.5 transition-colors self-start sm:self-auto font-medium"
            >
              <span>Explore all articles & guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3 Articles Grid matching mockup */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteData.resources.articles.map((article) => (
              <div
                key={article.id}
                onClick={() => setCurrentPage('resources')}
                className="group cursor-pointer space-y-3"
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100 border border-neutral-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-neutral-500">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-base font-medium text-neutral-900 group-hover:text-[#3a5364] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  {/* Underline bar */}
                  <div className="w-12 h-0.5 bg-neutral-300 group-hover:w-20 group-hover:bg-[#3a5364] transition-all duration-300" />
                  <p className="text-xs text-neutral-500 font-light line-clamp-2 pt-1">
                    {article.snippet}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FEATURED WORK PREVIEW STRIP */}
      <section className="py-16 px-4 sm:px-8 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#3a5364] font-semibold">
              Filterable Project Index
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-neutral-900 mt-1">
              Explore Our Built Work & Case Studies
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Filter through 8+ detailed case studies by market sector, service discipline, and scale.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('projects')}
            className="flex items-center gap-2 px-6 py-3 bg-[#3a5364] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#2b3e4b] transition-colors"
          >
            <span>Open Project Index</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
