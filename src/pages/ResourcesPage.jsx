import React, { useState } from 'react';
import { BookOpen, FileText, HelpCircle, Download, ArrowRight, ChevronDown, ChevronUp, CheckCircle, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ResourcesPage({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [selectedGuide, setSelectedGuide] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <section className="bg-[#243642] text-white py-16 px-4 sm:px-8 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#d97706] uppercase">
            <span>Knowledge Hub</span>
            <span>•</span>
            <span>Client Resources</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
            Guides, Insights & FAQs
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base max-w-3xl font-light leading-relaxed">
            Practical knowledge for owners, developers, and civic leaders. Access our comprehensive regulatory guides, building science articles, and clear answers to frequent project questions.
          </p>
        </div>
      </section>

      {/* Tabs Filter Bar */}
      <section className="sticky top-20 z-30 bg-neutral-100 border-b border-neutral-300 py-3 px-4 sm:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'all'
                ? 'bg-[#3a5364] text-white font-semibold shadow-sm'
                : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
            }`}
          >
            All Resources
          </button>
          <button
            onClick={() => setActiveTab('guides')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'guides'
                ? 'bg-[#3a5364] text-white font-semibold shadow-sm'
                : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Guides ({siteData.resources.guides.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('articles')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'articles'
                ? 'bg-[#3a5364] text-white font-semibold shadow-sm'
                : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Articles ({siteData.resources.articles.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('faqs')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'faqs'
                ? 'bg-[#3a5364] text-white font-semibold shadow-sm'
                : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Client FAQs ({siteData.resources.faqs.length})</span>
          </button>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-20">
        {/* SECTION 1: GUIDES */}
        {(activeTab === 'all' || activeTab === 'guides') && (
          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97706] font-semibold">
                  Field Handbooks
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 mt-1">
                  Comprehensive Development Guides
                </h2>
              </div>
              <span className="text-xs font-mono text-neutral-400">
                Actionable Frameworks for Clients
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteData.resources.guides.map((guide) => (
                <div
                  key={guide.id}
                  className="bg-neutral-50 border border-neutral-200 p-6 flex flex-col justify-between space-y-6 hover:border-[#3a5364] transition-all shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase text-neutral-500">
                      <span className="px-2 py-0.5 bg-neutral-200 text-neutral-800">{guide.category}</span>
                      <span>{guide.readTime}</span>
                    </div>

                    <h3 className="text-lg font-medium text-neutral-900 leading-snug">
                      {guide.title}
                    </h3>

                    <p className="text-xs text-neutral-600 font-light leading-relaxed">
                      {guide.summary}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-neutral-200/80">
                      <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                        Included Topics:
                      </span>
                      <ul className="space-y-1.5">
                        {guide.topics.map((t, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 text-xs text-neutral-700 font-light">
                            <span className="w-1.5 h-1.5 bg-[#3a5364] rounded-full" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedGuide(guide)}
                      className="text-xs font-mono uppercase tracking-wider text-[#3a5364] font-semibold hover:text-[#243642] flex items-center gap-1"
                    >
                      <span>Read Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={onOpenContact}
                      title="Request complete guide package"
                      className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 rounded"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: ARTICLES & INSIGHTS */}
        {(activeTab === 'all' || activeTab === 'articles') && (
          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97706] font-semibold">
                  Thought Leadership
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 mt-1">
                  Articles & Technical Perspectives
                </h2>
              </div>
              <span className="text-xs font-mono text-neutral-400">
                Published by AWH Principals
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteData.resources.articles.map((article) => (
                <div
                  key={article.id}
                  className="group bg-white border border-neutral-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
                        <span className="uppercase text-[#d97706]">{article.category}</span>
                        <span>{article.date}</span>
                      </div>
                      <h3 className="text-base font-medium text-neutral-900 group-hover:text-[#3a5364] transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-xs text-neutral-600 font-light line-clamp-3 leading-relaxed">
                        {article.snippet}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 text-xs font-mono text-neutral-400 border-t border-neutral-100 flex items-center justify-between">
                    <span>By {article.author}</span>
                    <span className="text-[#3a5364] group-hover:underline">Read Article →</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 3: FAQS */}
        {(activeTab === 'all' || activeTab === 'faqs') && (
          <section className="space-y-8">
            <div className="border-b border-neutral-200 pb-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97706] font-semibold">
                Client Questions Answered
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 mt-1">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 font-light mt-1">
                Common inquiries regarding fees, historic preservation credits, Passive House budgets, and municipal approvals.
              </p>
            </div>

            <div className="space-y-4 max-w-4xl">
              {siteData.resources.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-200 bg-neutral-50/50 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-neutral-100/70 transition-colors focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-medium text-neutral-900">
                      {faq.question}
                    </span>
                    {openFaqIndex === idx ? (
                      <ChevronUp className="w-5 h-5 text-[#3a5364] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />
                    )}
                  </button>

                  {openFaqIndex === idx && (
                    <div className="p-5 pt-0 text-xs sm:text-sm font-light text-neutral-700 leading-relaxed border-t border-neutral-200/50 bg-white animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Guide Detail Modal if open */}
      {selectedGuide && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full p-6 sm:p-8 space-y-6 border border-neutral-300 shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <span className="text-[11px] font-mono uppercase text-[#d97706] tracking-wider font-semibold">
                Resource Handbook
              </span>
              <button
                onClick={() => setSelectedGuide(null)}
                className="text-neutral-400 hover:text-neutral-800 text-xs font-mono uppercase"
              >
                Close ✕
              </button>
            </div>

            <h3 className="text-xl sm:text-2xl font-light text-neutral-900">
              {selectedGuide.title}
            </h3>

            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              {selectedGuide.summary}
            </p>

            <div className="space-y-3 bg-neutral-50 p-4 border border-neutral-200">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-800 font-semibold">
                Key Topics Covered:
              </h4>
              <ul className="space-y-2">
                {selectedGuide.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-neutral-700 font-light">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-neutral-200">
              <span className="text-xs text-neutral-500 font-mono">
                Complimentary publication from AWH Architects
              </span>
              <button
                onClick={() => {
                  setSelectedGuide(null);
                  onOpenContact();
                }}
                className="px-5 py-2.5 bg-[#3a5364] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#2b3e4b]"
              >
                Request Full PDF Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
