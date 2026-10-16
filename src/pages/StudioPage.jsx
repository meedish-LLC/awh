import { Award, ShieldCheck, HeartHandshake, Sparkles, MapPin, CheckCircle, ArrowRight, Mail, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';


export default function StudioPage({ onOpenContact }) {
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
            Founded in 2011 on the principles of reuse and grown into a practice of intentions, AWH combines technical building science, historic craft, and participatory design to create spaces of dignity and resilience.
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
              A Practice of Intentions in South Minneapolis
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              <p>
                Since 2011, AWH Architects has taken on a wide range of architectural projects from our office in South Minneapolis. The unifying threads between each are client-specific solutions and our uncompromising focus on 5 core values: <strong>Pragmatism, Energy, Social Equity, Water, and Reuse</strong>.
              </p>
              <p>
                We strive to design equitable and accessible spaces by integrating multiple narratives. We advocate for a concerted effort to bring diverse voices and skill sets to the table, allowing us as designers to navigate clients through entitlements to achieve goals that support social, environmental, and economic justice.
              </p>
              <p className="text-xs sm:text-sm text-neutral-500 italic">
                “At AWH, we believe that the design of our physical spaces affects the way we interact with one another as humans. Design can shift our mindset and create spaces of safety, comfort, and joy.”
              </p>
            </div>
            <div className="pt-2 flex items-center gap-4">
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
                src="https://static.wixstatic.com/media/14cfd9_41884aab8f964db09b7381541af5d3c7~mv2.jpg"
                alt="AWH Architects Team and Studio Work"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3.5 py-2 border border-neutral-300 text-[11px] font-mono text-neutral-800 shadow">
                {siteData.firm.address} • Minneapolis, MN
              </div>
            </div>
          </div>
        </section>

        {/* 2. THE 5 CORE VALUES */}
        <section className="space-y-8 border-t border-neutral-200 pt-16">
          <div className="border-b border-neutral-200 pb-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97706] font-semibold">
              Foundational Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 mt-1">
              Our 5 Core Values
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-light mt-1">
              Every project we take on is guided by these five commitments to our clients, our communities, and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteData.firm.values.map((val) => (
              <div
                key={val.number}
                className="p-7 bg-neutral-50/70 border border-neutral-200 space-y-3 hover:border-[#3a5364] transition-all shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#3a5364] font-bold bg-[#3a5364]/10 px-2 py-0.5">
                      {val.number}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      Core Value
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900">
                    {val.title}
                  </h3>
                  <h4 className="text-xs font-mono text-[#d97706] font-semibold">
                    {val.subtitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed pt-1">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. TEAM DIRECTORY */}
        <section className="space-y-8 border-t border-neutral-200 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97706] font-semibold">
                The Collective
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 mt-1">
                Meet the AWH Team ({siteData.team.length})
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              Multidisciplinary Architects, Planners & Specialists
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.team.map((member, idx) => (
              <div
                key={idx}
                className="group bg-white border border-neutral-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#3a5364] transition-all"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-100 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {member.credentials && (
                      <div className="absolute bottom-2 left-2 bg-neutral-900/85 text-white text-[10px] font-mono px-2 py-0.5 backdrop-blur-sm">
                        {member.credentials}
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-medium text-neutral-900 group-hover:text-[#3a5364] transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-xs font-mono text-[#d97706] font-semibold mt-0.5">
                          {member.role}
                        </p>
                      </div>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-[#0077b5] transition-colors p-1"
                          title="LinkedIn Profile"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                          </svg>
                        </a>
                      )}
                    </div>

                    <p className="text-xs text-neutral-600 font-light leading-relaxed pt-2 line-clamp-4 group-hover:line-clamp-none transition-all">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-100 mt-2">
                  {member.email ? (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-full py-2 border border-neutral-200 hover:border-[#3a5364] text-[11px] font-mono uppercase tracking-wider text-neutral-700 hover:text-[#3a5364] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Mail className="w-3 h-3 text-[#3a5364]" />
                      <span>{member.email}</span>
                    </a>
                  ) : (
                    <button
                      onClick={onOpenContact}
                      className="w-full py-2 border border-neutral-200 hover:border-[#3a5364] text-[11px] font-mono uppercase tracking-wider text-neutral-700 hover:text-[#3a5364] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Mail className="w-3 h-3 text-[#3a5364]" />
                      <span>Inquire with {member.name.split(' ')[0]}</span>
                    </button>
                  )}
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {siteData.firm.credentials.map((cred, i) => (
              <div
                key={i}
                className="p-5 bg-neutral-50 border border-neutral-200 text-center space-y-1 shadow-sm"
              >
                <div className="w-8 h-8 mx-auto bg-[#3a5364]/10 rounded-full flex items-center justify-center text-[#3a5364] mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold font-mono text-neutral-900">
                  {cred.code}
                </h4>
                <p className="text-[11px] text-neutral-600 font-light leading-snug">
                  {cred.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. RECOGNITION & AWARDS */}
        <section className="space-y-8 border-t border-neutral-200 pt-16">
          <div className="border-b border-neutral-200 pb-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97706] font-semibold">
              Industry Honors
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 mt-1">
              Press, Recognition & Awards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteData.recognition.map((rec, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-neutral-200 space-y-3 shadow-sm hover:border-[#3a5364] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-50 text-amber-600 border border-amber-200 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-neutral-400">
                        {rec.year}
                      </span>
                      <span className="text-neutral-300">•</span>
                      <span className="text-xs font-mono text-[#d97706] font-semibold">
                        {rec.org}
                      </span>
                    </div>
                    <h3 className="text-base font-medium text-neutral-900">
                      {rec.title}
                    </h3>
                    <p className="text-xs text-neutral-600 font-light leading-relaxed pt-1">
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
