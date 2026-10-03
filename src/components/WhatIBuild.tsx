import React from 'react';
import { WHAT_I_BUILD } from '../data/portfolioData';
import { Bot, Globe, Layers, Cpu, ArrowUpRight } from 'lucide-react';

export const WhatIBuild: React.FC = () => {
  const getIcon = (num: string) => {
    switch (num) {
      case '01': return <Bot className="w-6 h-6 text-blue-600" />;
      case '02': return <Globe className="w-6 h-6 text-cyan-600" />;
      case '03': return <Layers className="w-6 h-6 text-indigo-600" />;
      case '04': return <Cpu className="w-6 h-6 text-amber-600" />;
      default: return <Bot className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="what-i-build" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-slate-100">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Capabilities & Focus
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What I Build
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-500 max-w-md">
            Turning tangible real-world problems into production prototypes and practical digital experiences.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_I_BUILD.map((item) => (
            <div
              key={item.num}
              className="group p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-500 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6">
                  <span className="font-mono text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                    {item.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-50 group-hover:bg-blue-50/60 transition-colors">
                    {getIcon(item.num)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-500">
                  {item.tags.map((tag, idx) => (
                    <span key={idx}>
                      {tag}
                      {idx < item.tags.length - 1 && <span className="ml-1.5 text-slate-300">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
