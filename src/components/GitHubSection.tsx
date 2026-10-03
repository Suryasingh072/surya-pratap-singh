import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, GITHUB_REPOS_STATIC } from '../data/portfolioData';
import { Github, ExternalLink, Code2, GitFork, BookOpen, ArrowUpRight } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count?: number;
}

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Suryasingh072/repos?sort=updated&per_page=6');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data);
            setIsLoading(false);
            return;
          }
        }
      } catch (err) {
        // Fallback gracefully to static verified repos
      }
      
      // Static fallback without fabricated metrics
      const fallbackList: GitHubRepo[] = GITHUB_REPOS_STATIC.map((r, i) => ({
        id: i,
        name: r.name,
        description: r.description,
        html_url: r.url,
        language: r.language
      }));
      setRepos(fallbackList);
      setIsLoading(false);
    };

    fetchRepos();
  }, []);

  return (
    <section className="py-24 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Code & Open Source
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Open Source & Experiments
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Public code repositories, experiments, and open study platform source codes.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-2xs transition-all hover:border-slate-400 self-start md:self-end"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub →</span>
          </a>
        </div>

        {/* GitHub Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:border-blue-500 hover:shadow-sm hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span className="font-mono text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {repo.description || 'Public development repository and codebase.'}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>{repo.language || 'Code'}</span>
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  Suryasingh072
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Note on data integrity */}
        <div className="mt-8 text-center text-xs text-slate-400 font-mono">
          Authentic GitHub Repositories · Verified Profile github.com/Suryasingh072
        </div>

      </div>
    </section>
  );
};
