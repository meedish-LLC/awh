import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Quote, Building, Users, Home, Layers, Sparkles, Landmark, Briefcase, Eye } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function MarketsPage({ selectedMarketId, setSelectedMarketId, onSelectProject, onOpenContact }) {
  const [activeMarketId, setActiveMarketId] = useState(selectedMarketId || 'all');

  const activeMarket = siteData.markets.find((m) => m.id === activeMarketId);

  // Projects relevant to current market
  const marketProjects = activeMarket
    ? siteData.projects.filter(
        (p) =>
          p.category.toLowerCase() === activeMarket.id.toLowerCase() ||
          p.market.toLowerCase().includes(activeMarket.shortTitle.toLowerCase())
      )
    : siteData.projects;

  const marketIcons = {
    community: Users,
    nonprofits: Briefcase,
    multifamily: Building,
    commercial: Sparkles,
    interiors: Eye,
    residential: Home,
    'adaptive-reuse': Layers,
    historic: Landmark,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <section className="bg-[#243642] text-white py-16 px-4 sm:px-8 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#d97706] uppercase">
            <span>Client Sectors</span>
            <span>•</span>
            <span>Audience Focus</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
            Markets We Serve
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base max-w-3xl font-light leading-relaxed">
            Tailored architectural leadership for community stakeholders, mission-driven nonprofits, multifamily developers, and commercial pioneers. Every sector brings distinct regulatory frameworks, funding streams, and social purposes.
          </p>
        </div>
      </section>

      {/* Market Selector Pill Bar */}
      <section className="sticky top-20 z-30 bg-neutral-100 border-b border-neutral-300 py-3 px-4 sm:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
          <button
            onClick={() => setActiveMarketId('all')}
            className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all ${
              activeMarketId === 'all'
                ? 'bg-[#3a5364] text-white font-semibold shadow-sm'
                : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
            }`}
          >
            All 8 Markets
          </button>
          {siteData.markets.map((m) => {
            const Icon = marketIcons[m.id] || Building;
            return (
              <button
                key={m.id}
                onClick={() => setActiveMarketId(m.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeMarketId === m.id
                    ? 'bg-[#3a5364] text-white font-semibold shadow-sm'
                    : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{m.shortTitle}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        {/* If 'all' is selected: Show Overview Grid */}
        {activeMarketId === 'all' ? (
          <div className="space-y-12">
            <div className="border-b border-neutral-200 pb-4">
              <h2 className="text-2xl sm:text-3xl font-light text-neutral-900">
                Explore Specialized Sector Capabilities
              </h2>
              <p className="text-sm text-neutral-500 font-light mt-1">
                Select any market below to view specific audiences, core deliverables, and project case studies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteData.markets.map((m) => {
                const Icon = marketIcons[m.id] || Building;
                return (
                  <div
                    key={m.id}
                    onClick={() => setActiveMarketId(m.id)}
                    className="group cursor-pointer bg-neutral-50 border border-neutral-200 hover:border-[#3a5364] transition-all flex flex-col justify-between overflow-hidden shadow-sm hover:shadow"
                  >
                    <div>
                      <div className="aspect-[16/10] overflow-hidden bg-neutral-200 relative">
                        <img
                          src={m.image}
                          alt={m.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white p-1.5 rounded">
                          <Icon className="w-4 h-4 text-amber-400" />
                        </div>
                      </div>
                      <div className="p-5 space-y-2">
                        <h3 className="text-lg font-medium text-neutral-900 group-hover:text-[#3a5364] transition-colors">
                          {m.title}
                        </h3>
                        <p className="text-xs text-neutral-600 font-light line-clamp-3 leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-2 border-t border-neutral-200/60 mt-auto flex items-center justify-between text-xs text-[#3a5364] font-mono font-medium">
                      <span>View Sector Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Detailed Single Market View */
          activeMarket && (
            <div className="space-y-12 animate-in fade-in duration-300">
              {/* Market Hero Banner */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-50 border border-neutral-200 p-6 sm:p-10">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#d97706] tracking-widest font-semibold">
                    <span>Market Profile</span>
                    <span>•</span>
                    <span>{activeMarket.shortTitle}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight">
                    {activeMarket.title}
                  </h2>
                  <p className="text-neutral-700 text-base font-light leading-relaxed">
                    {activeMarket.description}
                  </p>

                  <div className="pt-2 border-t border-neutral-200 space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
                      Primary Client Audience:
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-800 font-medium">
                      {activeMarket.audience}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={onOpenContact}
                      className="px-5 py-2.5 bg-[#3a5364] hover:bg-[#2b3e4b] text-white text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
                    >
                      <span>Consult on a {activeMarket.shortTitle} Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setActiveMarketId('all')}
                      className="text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-neutral-800"
                    >
                      ← Back to all markets
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] overflow-hidden border border-neutral-300 shadow-md">
                    <img
                      src={activeMarket.image}
                      alt={activeMarket.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Deliverables & Quote Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Deliverables */}
                <div className="p-6 bg-white border border-neutral-200 space-y-4 shadow-sm">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-900 font-semibold border-b border-neutral-200 pb-2">
                    Key Deliverables in {activeMarket.shortTitle}
                  </h4>
                  <ul className="space-y-3">
                    {activeMarket.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 font-light">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Client Quote */}
                <div className="p-6 bg-[#3a5364]/5 border border-[#3a5364]/20 flex flex-col justify-between space-y-4 shadow-sm">
                  <div className="space-y-3">
                    <Quote className="w-8 h-8 text-[#3a5364]/40" />
                    <p className="text-sm sm:text-base font-light italic text-neutral-800 leading-relaxed">
                      “{activeMarket.featuredQuote}”
                    </p>
                  </div>
                  <div className="border-t border-[#3a5364]/15 pt-3">
                    <span className="text-xs font-mono text-[#3a5364] uppercase tracking-wider block">
                      Verified Client Partner Feedback
                    </span>
                  </div>
                </div>
              </div>

              {/* Related Projects in this Market */}
              <div className="space-y-6 pt-4">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                  <h3 className="text-xl font-light text-neutral-900">
                    Featured Projects in {activeMarket.title}
                  </h3>
                  <span className="text-xs font-mono text-neutral-400">
                    {marketProjects.length} Case {marketProjects.length === 1 ? 'Study' : 'Studies'}
                  </span>
                </div>

                {marketProjects.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {marketProjects.map((proj) => (
                      <div
                        key={proj.id}
                        onClick={() => onSelectProject(proj)}
                        className="group cursor-pointer bg-white border border-neutral-200 hover:border-[#3a5364] transition-all shadow-sm hover:shadow-md"
                      >
                        <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                          <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4 space-y-2">
                          <span className="text-[10px] font-mono uppercase text-[#d97706] tracking-wider block">
                            {proj.location} • {proj.year}
                          </span>
                          <h4 className="text-base font-medium text-neutral-900 group-hover:text-[#3a5364] transition-colors">
                            {proj.title}
                          </h4>
                          <p className="text-xs text-neutral-500 font-light line-clamp-2">
                            {proj.summary}
                          </p>
                          <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-[#3a5364] font-mono">
                            <span>Read Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center bg-neutral-50 border border-neutral-200 space-y-2">
                    <p className="text-sm text-neutral-600">
                      Additional case studies for this market sector are currently being cataloged.
                    </p>
                    <button
                      onClick={onOpenContact}
                      className="text-xs font-mono uppercase tracking-wider text-[#3a5364] underline"
                    >
                      Inquire about our private portfolio in {activeMarket.shortTitle}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
