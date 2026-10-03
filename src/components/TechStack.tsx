import React from 'react';
import { TECH_STACK, EXPLORING_TOPICS } from '../data/portfolioData';
import { 
  Code2, 
  Terminal, 
  Bot, 
  Database, 
  BarChart3, 
  Cpu, 
  Wrench,
  Sparkles,
  Compass
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return <Code2 className="w-4 h-4 text-blue-600" />;
      case 'Programming': return <Terminal className="w-4 h-4 text-emerald-600" />;
      case 'AI': return <Bot className="w-4 h-4 text-indigo-600" />;
      case 'Backend / Data': return <Database className="w-4 h-4 text-cyan-600" />;
      case 'Visualization': return <BarChart3 className="w-4 h-4 text-amber-600" />;
      case 'Hardware': return <Cpu className="w-4 h-4 text-rose-600" />;
      case 'Tools': return <Wrench className="w-4 h-4 text-slate-600" />;
      default: return <Code2 className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl pb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Toolbox & Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technology Stack
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Disciplined tools, frameworks, and programming environments applied across software engineering and hardware prototypes.
          </p>
        </div>

        {/* Tech Stack Categorized Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((group) => (
            <div
              key={group.category}
              className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
                  <div className="p-2 bg-slate-50 rounded-lg">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {group.category}
                  </h3>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 rounded-md border border-slate-200/80 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-mono">
                {group.skills.length} core competencies
              </div>
            </div>
          ))}
        </div>

        {/* What I'm Exploring Sub-section */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            <Compass className="w-4 h-4" />
            <span>Forward Trajectory</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What I'm Exploring
          </h3>
          <p className="mt-2 text-sm text-slate-600 max-w-xl">
            Emerging frontiers, architectures, and market domains currently under study, experimentation, and research.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {EXPLORING_TOPICS.map((topic, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:border-blue-500 hover:-translate-y-0.5 transition-all flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800 leading-snug">
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
