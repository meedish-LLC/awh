import React, { useState } from 'react';
import { X, MapPin, Calendar, Maximize2, Tag, CheckCircle2, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onSelectMarket, onOpenContact }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-5xl rounded-none shadow-2xl overflow-hidden border border-neutral-300 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/80">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 bg-neutral-200/70 px-2 py-0.5">
              Case Study
            </span>
            <span className="text-sm font-medium text-neutral-700">
              {project.market}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 rounded transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Title & Metadata Strip */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-light text-neutral-900 tracking-tight mb-3">
              {project.title}
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg font-light leading-relaxed max-w-3xl">
              {project.summary}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 py-4 px-5 bg-neutral-50 border border-neutral-200/80 text-xs">
              <div>
                <span className="text-neutral-400 block uppercase tracking-wider font-mono text-[10px]">Location</span>
                <span className="font-medium text-neutral-800 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#3a5364]" />
                  {project.location}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block uppercase tracking-wider font-mono text-[10px]">Completed</span>
                <span className="font-medium text-neutral-800 flex items-center gap-1 mt-0.5">
                  <Calendar className="w-3 h-3 text-[#3a5364]" />
                  {project.year}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block uppercase tracking-wider font-mono text-[10px]">Scale</span>
                <span className="font-medium text-neutral-800 flex items-center gap-1 mt-0.5">
                  <Maximize2 className="w-3 h-3 text-[#3a5364]" />
                  {project.size}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block uppercase tracking-wider font-mono text-[10px]">Highlight</span>
                <span className="font-semibold text-[#d97706] mt-0.5 truncate block">
                  {project.highlight || 'Featured Project'}
                </span>
              </div>
            </div>
          </div>

          {/* Photo Gallery Carousel */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden border border-neutral-200">
              <img
                src={images[activeImageIndex]}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white hover:bg-black/75 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white hover:bg-black/75 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 h-14 overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx ? 'border-[#3a5364] opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Three-Pillar Case Study Structure: Challenge, AWH's Role, Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* The Challenge */}
            <div className="p-5 bg-neutral-50/70 border border-neutral-200 space-y-2">
              <div className="flex items-center gap-2 text-neutral-900 font-mono text-xs uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 bg-[#d97706] rounded-full" />
                <span>The Challenge</span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed font-light">
                {project.challenge}
              </p>
            </div>

            {/* AWH's Role */}
            <div className="p-5 bg-[#3a5364]/5 border border-[#3a5364]/20 space-y-2">
              <div className="flex items-center gap-2 text-[#243642] font-mono text-xs uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 bg-[#3a5364] rounded-full" />
                <span>AWH's Role</span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed font-light">
                {project.role}
              </p>
            </div>

            {/* The Outcome */}
            <div className="p-5 bg-emerald-50/60 border border-emerald-200/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-mono text-xs uppercase tracking-wider font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>The Outcome</span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed font-light">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Services Applied & Market Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-neutral-200 text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono uppercase text-neutral-400 text-[10px]">Services Applied:</span>
              {project.services.map((svc, i) => (
                <span key={i} className="px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-700">
                  {svc}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#3a5364] text-white hover:bg-[#2b3e4b] transition-colors uppercase font-medium text-xs tracking-wider"
              >
                <span>Discuss Similar Project</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
