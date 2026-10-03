import React from 'react';
import { PERSONAL_INFO, ABOUT_METRICS } from '../data/portfolioData';
import { GraduationCap, Calendar, Compass, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 1: return <Calendar className="w-5 h-5 text-cyan-600" />;
      case 2: return <Compass className="w-5 h-5 text-blue-600" />;
      case 3: return <MapPin className="w-5 h-5 text-emerald-600" />;
      default: return <GraduationCap className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-50/60 border-t border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-lg text-slate-600 font-medium">
            Curious about technology. Focused on building useful things.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Prose Text */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            {PERSONAL_INFO.aboutDetailed.map((paragraph, index) => (
              <p key={index} className="text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>

          {/* 4 Clean Information Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ABOUT_METRICS.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {metric.label}
                  </span>
                  <div className="p-2 bg-slate-50 rounded-lg">
                    {getIcon(idx)}
                  </div>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {metric.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
