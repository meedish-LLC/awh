import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Sparkles, MapPin, CheckCircle, ArrowRight, Mail } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function StudioPage({ onOpenContact }) {
  const recognitionList = [
    { year: "2024", title: "State Historic Preservation Honor Award", org: "Heritage Mills Adaptive Reuse", note: "Recognized for exemplary integration of energy retrofits within a National Register industrial landmark." },
    { year: "2024", title: "PHIUS+ Source Zero Certification", org: "Oak Ridge Civic Center", note: "One of only three cold-climate municipal civic buildings in the Midwest to achieve net-zero source energy." },
    { year: "2023", title: "AIA Regional Urban Design Citation", org: "Centro Highland Retail & Commercial", note: "Awarded for pedestrian-oriented streetfront reactivation and neighborhood revitalization." },
    { year: "2022", title: "Enterprise Green Communities Excellence", org: "Avenue Station Workforce Housing", note: "Honored for ultra-efficient acoustic envelope detailing adjacent to light rail transit." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <section className="bg-[#243642] text-white py-16 px-4 sm:px-8 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#d97706] uppercase">
            <span>Our Studio</span>
            <span>•</span>
            <span>People & Values</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
            Where Place Meets Purpose
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base max-w-3xl font-light leading-relaxed">
            Founded on the belief that enduring architecture belongs to communities, AWH combines technical science, historic craft, and participatory design to create spaces of dignity and resilience.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-20">
        {/* 1. FIRM PHILOSOPHY & STORY */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d97706] font-semibold">
              The Firm Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight leading-tight">
              Grounded in the Midwest, Practicing with Rigor
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              <p>
                From our studio in Minneapolis's historic North Loop, AWH brings together architects, urban planners, building scientists, and interior designers who share an uncompromising commitment to public good.
              </p>
              <p>
                We do not pursue architecture as a monument to ego. Instead, we measure our success by how well a building weathers cold winters, how low its operational utility bills run, how seamlessly its spaces welcome diverse neighbors, and how faithfully its historic fabric is safeguarded for future generations.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 bg-[#3a5364] hover:bg-[#2b3e4b] text-white text-xs uppercase tracking-widest font-semibold transition-colors inline-flex items-center gap-2"
              >
                <span>Connect With Our Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden border border-neutral-300 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="AWH Team collaborating in our Minneapolis architecture studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 border border-neutral-300 text-[11px] font-mono text-neutral-700">
                212 3rd Avenue North • Minneapolis Studio
              </div>
            </div>
          </div>
        </section>

        {/* 2. FIRM VALUES */}
        <section className="space-y-8 border-t border-neutral-200 pt-16">
          <div className="border-b border-neutral-200 pb-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97706] font-semibold">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 mt-1">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteData.firm.values.map((val, idx) => (
              <div
                key={idx}
                className="p-8 bg-neutral-50/70 border border-neutral-200 space-y-3 hover:border-[#3a5364] transition-colors shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#3a5364] font-bold bg-[#3a5364]/10 px-2 py-0.5">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-medium text-neutral-900">
                    {val.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. TEAM LEADERSHIP */}
        <section className="space-y-8 border-t border-neutral-200 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97706] font-semibold">
                Studio Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 mt-1">
                Principals & Team Directors
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              Experienced, Hands-On Principal Leadership
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.team.map((member, idx) => (
              <div
                key={idx}
                className="group bg-white border border-neutral-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <div className="aspect-[4/5] overflow-hidden bg-neutral-200 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-2 left-2 bg-neutral-900/80 text-white text-[10px] font-mono px-2 py-0.5 backdrop-blur-sm">
                      {member.credentials}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-medium text-neutral-900 group-hover:text-[#3a5364] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-[#d97706] uppercase tracking-wider font-semibold">
                      {member.role}
                    </p>
                    <p className="text-xs text-neutral-600 font-light leading-relaxed pt-1">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={onOpenContact}
                    className="w-full py-2 border border-neutral-200 hover:border-[#3a5364] text-[11px] font-mono uppercase tracking-wider text-neutral-700 hover:text-[#3a5364] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-3 h-3 text-[#3a5364]" />
                    <span>Contact {member.name.split(' ')[0]}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. CREDENTIALS & CERTIFICATIONS */}
        <section className="space-y-8 border-t border-neutral-200 pt-16">
          <div className="border-b border-neutral-200 pb-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97706] font-semibold">
              Industry Credentials
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 mt-1">
              Professional Licenses & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {siteData.firm.credentials.map((cred, i) => (
              <div
                key={i}
                className="p-6 bg-neutral-50 border border-neutral-200 text-center space-y-2 shadow-sm"
              >
                <div className="w-10 h-10 mx-auto bg-[#3a5364]/10 rounded-full flex items-center justify-center text-[#3a5364]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-mono text-neutral-900">
                  {cred.code}
                </h4>
                <p className="text-xs text-neutral-600 font-light">
                  {cred.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. RECOGNITION & HONORS */}
        <section className="space-y-8 border-t border-neutral-200 pt-16">
          <div className="border-b border-neutral-200 pb-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97706] font-semibold">
              Design & Preservation Honors
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 mt-1">
              Recognition & Awards
            </h2>
          </div>

          <div className="space-y-4">
            {recognitionList.map((rec, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-neutral-200 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:border-[#3a5364] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-50 text-amber-600 border border-amber-200 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-neutral-400">
                        {rec.year}
                      </span>
                      <h3 className="text-base sm:text-lg font-medium text-neutral-900">
                        {rec.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#3a5364] font-semibold block mt-0.5">
                      Project: {rec.org}
                    </span>
                    <p className="text-xs text-neutral-600 font-light mt-1">
                      {rec.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
