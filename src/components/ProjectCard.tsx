import React from 'react';
import { Project } from '../data/portfolioData';
import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group cursor-pointer rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-600 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Project Visual Image with subtle hover zoom */}
        <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          
          {/* Subtle status tag badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-white/95 text-slate-800 shadow-xs border border-slate-200/80 backdrop-blur-xs">
              {project.statusLabel}
            </span>
          </div>

          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="p-1.5 rounded-full bg-blue-600 text-white shadow-sm inline-flex">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {/* Clean metadata without pill boxes */}
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mb-2">
            <span>{project.category}</span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
            {project.name}
          </h3>

          <p className="mt-2 text-xs font-semibold text-slate-500 leading-snug line-clamp-1">
            {project.title}
          </p>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Quick Highlight for AgriPredict or RegistrySathi */}
          {project.mandiComparisonExample && (
            <div className="mt-4 p-2.5 bg-blue-50/70 border border-blue-100 rounded-lg text-xs text-blue-900">
              <span className="font-semibold">Mandi Comparison:</span> {project.mandiComparisonExample.mandiA.name} ({project.mandiComparisonExample.mandiA.price}) vs {project.mandiComparisonExample.mandiB.name} ({project.mandiComparisonExample.mandiB.price})
            </div>
          )}

          {project.pricingModel && (
            <div className="mt-4 p-2.5 bg-slate-50 border border-slate-200/80 rounded-lg text-xs text-slate-700 flex justify-between items-center">
              <span>Bihar Documentation Model:</span>
              <span className="font-mono font-bold text-slate-900">From ₹2,000</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Section with Tech Tags & Interactive Button */}
      <div className="px-6 pb-6 pt-2">
        <div className="flex flex-wrap gap-1.5 pb-4 border-b border-slate-100">
          {project.techTags.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60"
            >
              {tech}
            </span>
          ))}
          {project.techTags.length > 4 && (
            <span className="text-[11px] text-slate-400 self-center">
              +{project.techTags.length - 4}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-700 group-hover:underline underline-offset-4"
          >
            <span>Explore Architecture & Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                title="Open Website"
                aria-label="Open Website"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
                title="View GitHub Repository"
                aria-label="View GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
