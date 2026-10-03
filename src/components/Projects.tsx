import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Sparkles, Terminal } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ai' | 'web' | 'agritech' | 'education' | 'property' | 'hardware'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'AI', value: 'ai' },
    { label: 'Web', value: 'web' },
    { label: 'AgriTech', value: 'agritech' },
    { label: 'Education', value: 'education' },
    { label: 'Property Tech', value: 'property' },
    { label: 'Hardware', value: 'hardware' },
  ] as const;

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.filterCategory === selectedFilter);

  return (
    <section id="projects" className="py-24 bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Projects & Engineering Prototypes
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Concrete digital applications, prototypes, and practical software platforms built to solve everyday friction.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="p-1 bg-white border border-slate-200 rounded-xl shadow-2xs flex flex-wrap gap-1 self-start md:self-end">
            {filters.map((filter) => {
              const isActive = selectedFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setSelectedFilter(filter.value)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Lab Disclaimers Banner */}
        <div className="mt-16 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-slate-800">Authentic Prototyping Standard:</span>
            <span>All projects are documented strictly as functional prototypes, concepts, or live tools.</span>
          </div>
          <span className="font-mono text-slate-400">Zero Fabricated Metrics</span>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
