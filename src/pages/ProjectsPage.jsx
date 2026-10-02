import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowRight, MapPin, Calendar, Maximize2, Tag, X } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ProjectsPage({ onSelectProject, onOpenContact }) {
  const [selectedMarket, setSelectedMarket] = useState('All');
  const [selectedService, setSelectedService] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const marketOptions = ['All', 'Community & Civic', 'Nonprofits & Mission-Driven', 'Multi-Family Housing', 'Commercial', 'Custom Residential', 'Adaptive Reuse', 'Historic Preservation'];
  const serviceOptions = ['All', 'Architecture', 'Historic Consulting', 'Planning & Pre-Development', 'Passive House Consulting', 'Cannabis Facility Design'];

  const filteredProjects = useMemo(() => {
    return siteData.projects.filter((project) => {
      // Market filter
      const matchesMarket =
        selectedMarket === 'All' ||
        project.market.toLowerCase().includes(selectedMarket.toLowerCase()) ||
        project.category.toLowerCase().includes(selectedMarket.toLowerCase());

      // Service filter
      const matchesService =
        selectedService === 'All' ||
        project.services.some((s) => s.toLowerCase().includes(selectedService.toLowerCase()) || selectedService.toLowerCase().includes(s.toLowerCase()));

      // Search query
      const matchesSearch =
        !searchQuery ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.challenge.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesMarket && matchesService && matchesSearch;
    });
  }, [selectedMarket, selectedService, searchQuery]);

  const clearFilters = () => {
    setSelectedMarket('All');
    setSelectedService('All');
    setSearchQuery('');
  };

  const hasActiveFilters = selectedMarket !== 'All' || selectedService !== 'All' || searchQuery !== '';

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <section className="bg-[#243642] text-white py-16 px-4 sm:px-8 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#d97706] uppercase">
            <span>Portfolio</span>
            <span>•</span>
            <span>Case Studies</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
            Projects & Built Work
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base max-w-3xl font-light leading-relaxed">
            Every project represents our core methodology: articulating each client's specific challenge, deploying AWH's multidisciplinary design and regulatory role, and delivering measurable community and environmental outcomes.
          </p>
        </div>
      </section>

      {/* Filterable Index Control Bar */}
      <section className="sticky top-20 z-30 bg-neutral-50 border-b border-neutral-300 py-4 px-4 sm:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by name, city, or keyword..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-neutral-300 focus:outline-none focus:border-[#3a5364]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Dropdowns / Controls */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Market Filter */}
              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className="text-neutral-500 uppercase">Market:</span>
                <select
                  value={selectedMarket}
                  onChange={(e) => setSelectedMarket(e.target.value)}
                  className="px-2.5 py-1.5 bg-white border border-neutral-300 text-neutral-800 text-xs focus:outline-none focus:border-[#3a5364]"
                >
                  {marketOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Filter */}
              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className="text-neutral-500 uppercase">Service:</span>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="px-2.5 py-1.5 bg-white border border-neutral-300 text-neutral-800 text-xs focus:outline-none focus:border-[#3a5364]"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset Button */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs font-mono text-[#d97706] hover:underline flex items-center gap-1 ml-auto lg:ml-0"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Result Count Strip */}
          <div className="flex items-center justify-between text-xs text-neutral-500 font-mono pt-1">
            <span>
              Showing {filteredProjects.length} of {siteData.projects.length} Case Studies
            </span>
            <span className="hidden sm:inline">
              Click any project to view Challenge, AWH's Role & Outcome
            </span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer bg-white border border-neutral-200 hover:border-[#3a5364] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Image with Tag Overlay */}
                  <div className="aspect-[16/10] overflow-hidden bg-neutral-100 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#243642]/90 backdrop-blur-sm text-white px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider">
                      {project.market}
                    </div>
                    {project.highlight && (
                      <div className="absolute bottom-3 right-3 bg-amber-500 text-neutral-950 px-2.5 py-0.5 text-[10px] font-mono font-semibold tracking-wider shadow">
                        {project.highlight}
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#3a5364]" />
                        {project.location}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl font-medium text-neutral-900 group-hover:text-[#3a5364] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-neutral-600 font-light line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Services Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.services.map((svc, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 bg-neutral-100 text-neutral-600 border border-neutral-200"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Strip */}
                <div className="px-6 py-3.5 bg-neutral-50/80 border-t border-neutral-100 flex items-center justify-between text-xs text-[#3a5364] font-mono font-medium group-hover:bg-[#3a5364]/5 transition-colors">
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-16 text-center bg-neutral-50 border border-neutral-200 max-w-lg mx-auto space-y-4">
            <Filter className="w-10 h-10 text-neutral-400 mx-auto" />
            <h3 className="text-lg font-medium text-neutral-800">No matching projects found</h3>
            <p className="text-xs text-neutral-500">
              Try adjusting your search criteria or clear your current filters to view all projects.
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-[#3a5364] text-white text-xs font-mono uppercase tracking-wider"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Inquire Bottom Strip */}
      <section className="bg-neutral-100 border-t border-neutral-300 py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-light text-neutral-900">
              Have a site or building ready for development?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              We provide initial site capacity assessments and historic tax credit feasibility reviews.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3 bg-[#3a5364] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#2b3e4b] transition-colors shrink-0"
          >
            Start Project Feasibility
          </button>
        </div>
      </section>
    </div>
  );
}
