import React, { useState } from 'react';
import { HOW_I_BUILD_STEPS } from '../data/portfolioData';
import { Search, FileSearch, Code, Bug, RefreshCw, Send, CheckCircle2 } from 'lucide-react';

export const BuildProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Search className="w-5 h-5 text-blue-600" />;
      case 1: return <FileSearch className="w-5 h-5 text-cyan-600" />;
      case 2: return <Code className="w-5 h-5 text-indigo-600" />;
      case 3: return <Bug className="w-5 h-5 text-amber-600" />;
      case 4: return <RefreshCw className="w-5 h-5 text-purple-600" />;
      case 5: return <Send className="w-5 h-5 text-emerald-600" />;
      default: return <Search className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto pb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Execution Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How I Build
          </h2>
          <p className="mt-2 text-base text-slate-600">
            A practical, iterative engineering methodology designed to bridge fuzzy problems with production software.
          </p>
        </div>

        {/* 6 Step Interactive Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOW_I_BUILD_STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50/40 border-blue-500 shadow-sm -translate-y-1'
                    : 'bg-white border-slate-200/90 shadow-2xs hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <span className="font-mono text-sm font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      STEP {step.step}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-50">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Phase 0{idx + 1} of 06</span>
                  {isSelected && (
                    <span className="text-blue-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Active Focus</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
