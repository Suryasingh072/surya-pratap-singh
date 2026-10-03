import React from 'react';
import { TIMELINE, PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Calendar, Milestone, Building2, MapPin } from 'lucide-react';

export const JourneyEducation: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Journey & Milestones */}
          <div className="lg:col-span-7">
            <div className="pb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                Timeline & Milestones
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Journey & Experience
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Key initiatives, project deployments, and community engagements documented factually.
              </p>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-10">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline point */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-blue-600 group-hover:scale-125 transition-transform shadow-xs" />
                  
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                      {item.year}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {item.organization}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Education Card */}
          <div className="lg:col-span-5">
            <div className="pb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                Academic Foundation
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Education
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Rigorous computer science foundations at BBDNIIT.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Active Enrollment
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Degree
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {PERSONAL_INFO.degree}
                  </h3>
                </div>

                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-800">
                        Babu Banarasi Das Northern India Institute of Technology (BBDNIIT)
                      </span>
                      <div className="text-xs text-slate-500">Lucknow, Uttar Pradesh</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Current Status: <strong className="text-slate-800 font-semibold">{PERSONAL_INFO.semester}</strong></span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Academic Focus
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {['Data Structures & Algorithms', 'Operating Systems', 'Database Systems', 'AI & Machine Learning', 'Computer Networks'].map((topic, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
