import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ContactModal({ isOpen, onClose, initialMarket = '' }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    market: initialMarket || 'community',
    service: 'architecture',
    location: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate receipt
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-none shadow-2xl overflow-hidden border border-neutral-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#d97706] font-semibold">
              Project Consultation
            </span>
            <h3 className="text-xl sm:text-2xl font-light text-neutral-900">
              Start a Conversation with AWH
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-light text-neutral-900">Thank you for reaching out</h4>
            <p className="text-neutral-600 text-sm max-w-md mx-auto leading-relaxed">
              Our principal team will review your project details and follow up within one business day with preliminary insights and scheduling options.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-[#3a5364] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#2b3e4b]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sidebar / Info */}
            <div className="bg-[#243642] text-neutral-300 p-6 sm:p-8 space-y-6 text-xs font-light">
              <div>
                <h4 className="text-white font-mono uppercase tracking-widest text-[11px] font-semibold mb-2">
                  Direct Inquiries
                </h4>
                <p className="text-neutral-400 leading-relaxed">
                  Whether you have an active RFP, need historic tax credit guidance, or are exploring pre-development feasibility, we welcome early-stage conversations.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                  <span>{siteData.firm.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#d97706] shrink-0" />
                  <span>{siteData.firm.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#d97706] shrink-0" />
                  <span>{siteData.firm.email}</span>
                </div>
              </div>

              <div className="border-t border-neutral-700 pt-4">
                <span className="text-[10px] uppercase font-mono text-neutral-400 block mb-1">
                  Certifications
                </span>
                <p className="text-[11px] text-neutral-400">
                  AIA • NCARB • LEED AP BD+C • Certified Passive House (CPHC®)
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="md:col-span-2 p-6 sm:p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 focus:outline-none focus:border-[#3a5364]"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 focus:outline-none focus:border-[#3a5364]"
                    placeholder="jane@organization.org"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                    Organization / Entity
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 focus:outline-none focus:border-[#3a5364]"
                    placeholder="CDC, Developer, or Owner"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 focus:outline-none focus:border-[#3a5364]"
                    placeholder="(612) 000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                    Primary Market
                  </label>
                  <select
                    value={formData.market}
                    onChange={(e) => setFormData({ ...formData, market: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 bg-white focus:outline-none focus:border-[#3a5364]"
                  >
                    {siteData.markets.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 bg-white focus:outline-none focus:border-[#3a5364]"
                  >
                    {siteData.services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                  Project Description or Questions
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-neutral-300 focus:outline-none focus:border-[#3a5364]"
                  placeholder="Tell us about the project location, approximate scale, target timeline, or challenges you're facing..."
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#3a5364] hover:bg-[#2b3e4b] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Project Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
