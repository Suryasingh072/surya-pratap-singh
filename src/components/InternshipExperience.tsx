import React, { useState } from 'react';
import { INTERNSHIP_DATA } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Cpu, 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Building2, 
  Layers, 
  Info,
  X
} from 'lucide-react';

export const InternshipExperience: React.FC = () => {
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <section id="experience" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl pb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Industry & Research Engagement
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Internship & Practical Experience
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Intensive hands-on technical programs, robotics prototyping, and technology innovation engagements.
          </p>
        </div>

        {/* Prominent White Experience Card */}
        <div className="rounded-2xl bg-white border-2 border-slate-200/90 shadow-sm p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle decorative background accent */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-blue-50/50 rounded-bl-full -z-0 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                  {INTERNSHIP_DATA.type}
                </span>
                {INTERNSHIP_DATA.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {INTERNSHIP_DATA.title}
                </h3>
                <div className="mt-2 text-sm sm:text-base font-semibold text-blue-700">
                  {INTERNSHIP_DATA.program}
                </div>
              </div>

              {/* Metadata Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 pt-1">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Organization: <strong className="text-slate-900">{INTERNSHIP_DATA.organization}</strong></span>
                </div>

                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Partner: <strong className="text-slate-900">{INTERNSHIP_DATA.partner}</strong></span>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Timeline: <strong className="font-mono text-slate-900">{INTERNSHIP_DATA.timeline}</strong></span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Location: <strong className="text-slate-900">{INTERNSHIP_DATA.location}</strong></span>
                </div>
              </div>

              {/* Description Paragraph */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
                {INTERNSHIP_DATA.description}
              </p>

              {/* Technology & Domain Pills */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                  Core Technologies & Focus Areas
                </span>
                <div className="flex flex-wrap gap-2">
                  {INTERNSHIP_DATA.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:text-blue-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setCertModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 hover:border-slate-400 transition-all"
                >
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>View Certificate →</span>
                </button>
              </div>

            </div>

            {/* Right Card / Credential Box */}
            <div className="lg:col-span-4 bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col justify-between space-y-4">
              <div className="pb-3 border-b border-slate-200">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                  PROGRAM CREDENTIAL
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  Kalam Pragati MakeX
                </div>
                <div className="text-xs text-slate-500">
                  ERA Foundation × AKTU
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-500">Role:</span>
                  <span className="font-semibold text-slate-900">MakeX Intern</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Venue:</span>
                  <span className="font-semibold text-slate-900">AKTU Campus</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Duration:</span>
                  <span className="font-mono font-semibold text-slate-900">Aug 2025 – Sep 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Status:</span>
                  <span className="font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Completed</span>
                  </span>
                </div>
              </div>

              {/* Context Guard Note */}
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-[11px] text-slate-500 leading-normal">
                <div className="flex items-center gap-1.5 font-semibold text-slate-700 mb-0.5">
                  <Info className="w-3.5 h-3.5 text-blue-600" />
                  <span>Official Scope</span>
                </div>
                {INTERNSHIP_DATA.note}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Certificate Status Modal */}
      {certModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                <h4 className="text-base font-bold text-slate-900">
                  Internship Certificate
                </h4>
              </div>
              <button
                onClick={() => setCertModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl">
                <div className="font-bold text-blue-900 text-sm mb-1">
                  Kalam Pragati MakeX Internship Certificate
                </div>
                <div className="text-blue-800">
                  Awarded by <strong>ERA Foundation</strong> in collaboration with <strong>Central Training & Placement Cell, AKTU</strong>.
                </div>
                <div className="mt-2 font-mono text-[11px] text-blue-700">
                  Period: August 2025 — September 2025
                </div>
              </div>

              <p>
                The physical / verified completion certificate for the Kalam Pragati MakeX Internship at AKTU Campus Lucknow is authenticated and available upon recruiter or institution request.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setCertModalOpen(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
