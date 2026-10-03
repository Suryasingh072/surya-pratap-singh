import React, { useState } from 'react';
import { PERSONAL_INFO, QUICK_INFO_CHIPS } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  Cpu, 
  Terminal, 
  Layers, 
  Network
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] pt-24 pb-16 flex flex-col justify-center overflow-hidden bg-white bg-grid-pattern"
    >
      {/* Subtle light blue radial glow backdrops */}
      <div 
        className="pointer-events-none absolute top-12 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-3xl -z-10"
        style={{
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`
        }}
      />
      <div 
        className="pointer-events-none absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-cyan-100/35 blur-3xl -z-10"
        style={{
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100/90 border border-slate-200/80 rounded-md text-xs font-medium text-slate-700 mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Computer Science & Engineering · Builder · Innovator</span>
            </div>

            {/* Main Greeting Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-slate-900 leading-[1.08] tracking-tight">
              Hi, I'm <span className="text-slate-900">Surya Pratap Singh</span>.
            </h1>

            {/* Large Highlighted Line */}
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 leading-snug tracking-tight">
              I build ideas into{' '}
              <span className="text-blue-600 underline decoration-blue-200 decoration-wavy underline-offset-6">
                real-world digital products
              </span>
              .
            </h2>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              I'm a B.Tech Computer Science & Engineering student focused on AI, full-stack development, product building and solving practical problems through technology.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 rounded-lg shadow-sm transition-all group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 active:scale-98 rounded-lg shadow-2xs transition-all"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="mt-8 flex items-center gap-4 text-slate-500 text-sm">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Connect</span>
              <div className="h-3 w-px bg-slate-200" />
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub: @Suryasingh072"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: Surya Pratap Singh"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  aria-label="Send Email"
                  title={`Email: ${PERSONAL_INFO.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors text-xs font-bold"
                  aria-label="X Twitter Profile"
                  title="X: @suryasingh2567"
                >
                  𝕏
                </a>
              </div>
            </div>

            {/* Hero Quick Info Chips */}
            <div className="mt-8 pt-6 border-t border-slate-100 w-full">
              <div className="flex flex-wrap items-center gap-2">
                {QUICK_INFO_CHIPS.map((chip, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-md"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Premium 3D-Style Developer Visual (Pure Light & Clean) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div 
              className="relative w-full max-w-[440px] aspect-square rounded-2xl bg-gradient-to-b from-white to-slate-50/80 border border-slate-200/90 shadow-xl p-5 flex flex-col justify-between overflow-hidden"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${mousePos.y * -6}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
            >
              {/* Subtle top ambient indicator */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                  <Terminal className="w-3 h-3 text-blue-600" />
                  <span>surya@dev-builder</span>
                </div>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
              </div>

              {/* Floating Code Snippet Card */}
              <div className="my-auto py-2">
                <div className="p-3.5 bg-slate-900 rounded-lg text-slate-200 font-mono text-xs shadow-md border border-slate-800">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800">
                    <span className="text-cyan-400 font-semibold">agriPredict.engine.ts</span>
                    <span>AI Mandi Logic</span>
                  </div>
                  <pre className="mt-2 text-[11px] leading-relaxed overflow-x-auto text-slate-300">
                    <code>
                      <span className="text-purple-400">const</span> profit = <span className="text-blue-400">evaluateMandi</span>({`{\n`}
                      {'  '}mandi: <span className="text-emerald-300">"Barabanki"</span>,{'\n'}
                      {'  '}cropPrice: <span className="text-amber-300">27</span>, <span className="text-slate-500">// ₹/kg</span>{'\n'}
                      {'  '}benchmarkPrice: <span className="text-amber-300">25</span>,{'\n'}
                      {'  '}haulageExpense: <span className="text-cyan-300">calculateFreight</span>(km){'\n'}
                      {`}`});{'\n'}
                      <span className="text-purple-400">return</span> profit.netMargin &gt; <span className="text-amber-300">0</span>;
                    </code>
                  </pre>
                </div>
              </div>

              {/* Connected Abstract Technology Nodes & Glassmorphic Chips */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <div className="p-2.5 bg-white/90 backdrop-blur-xs rounded-lg border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-blue-50 text-blue-600">
                    <Network className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-semibold text-slate-800">AI Intelligence</div>
                    <div className="text-[10px] text-slate-500">ML & Gemini Flow</div>
                  </div>
                </div>

                <div className="p-2.5 bg-white/90 backdrop-blur-xs rounded-lg border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-cyan-50 text-cyan-600">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-semibold text-slate-800">IoT Telemetry</div>
                    <div className="text-[10px] text-slate-500">ESP32 & NodeMCU</div>
                  </div>
                </div>
              </div>

              {/* Floating mini badge top right */}
              <div className="absolute -top-1 -right-1 bg-white text-slate-800 text-[10px] font-semibold px-2.5 py-1 rounded-bl-lg border-b border-l border-slate-200 shadow-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-blue-600" />
                <span>BBDNIIT · Lucknow</span>
              </div>
            </div>
          </div>

        </div>

        {/* Section Tagline Banner near the end of hero */}
        <div className="mt-16 pt-8 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Builder Philosophy</span>
          </div>
          <div className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
            "{PERSONAL_INFO.brandTagline}"
          </div>
          <div className="text-xs text-slate-500 font-mono">
            Lucknow, IN · 2026
          </div>
        </div>

      </div>
    </section>
  );
};
