import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Download, Printer, ExternalLink, GraduationCap, Briefcase, Code, Sparkles } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
              Curriculum Vitae
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Surya Pratap Singh
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Surya-Pratap-Singh-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-md transition-colors"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable/Clean View Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-800 text-xs sm:text-sm">
          {/* Header Block */}
          <div className="border-b border-slate-200 pb-6">
            <h2 id="resume-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Surya Pratap Singh
            </h2>
            <div className="mt-1 text-sm font-semibold text-blue-600">
              B.Tech Computer Science & Engineering Student · Technology Builder · Innovator
            </div>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
              <span>Lucknow, Uttar Pradesh, India</span>
              <span>·</span>
              <span>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-700 underline">{PERSONAL_INFO.email}</a></span>
              <span>·</span>
              <span>Phone: <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-700">{PERSONAL_INFO.phone}</a></span>
              <span>·</span>
              <span>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-blue-600">Suryasingh072</a></span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Education</span>
            </h3>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900 text-sm">
                <span>Babu Banarasi Das Northern India Institute of Technology (BBDNIIT)</span>
                <span className="text-xs font-mono text-slate-500">Lucknow, UP</span>
              </div>
              <div className="text-xs font-medium text-slate-600 mt-0.5">
                Bachelor of Technology in Computer Science and Engineering (Current: 5th Semester)
              </div>
            </div>
          </div>

          {/* Internship Experience */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span>Practical Internship Experience</span>
            </h3>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900 text-sm">
                <span>MakeX Intern — Kalam Pragati (ERA Foundation)</span>
                <span className="text-xs font-mono text-blue-600">AUG 2025 — SEP 2025</span>
              </div>
              <div className="text-xs font-semibold text-slate-600 mt-0.5">
                In collaboration with Central Training & Placement Cell, AKTU · Lucknow, India
              </div>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                Hands-on exposure to robotics prototyping, innovation, design thinking, Arduino, Raspberry Pi, Python, sensors, computer vision, and IoT-based problem solving.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Code className="w-4 h-4 text-blue-600" />
              <span>Featured Technical Projects</span>
            </h3>
            <div className="space-y-3">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>PrintDrop — Campus Document Printing & Queue Automation</span>
                  <span className="text-xs font-mono text-slate-500">Campus Platform</span>
                </div>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Digital printing workflow platform for universities enabling students to upload documents, customize print parameters (color, duplex, binding), and skip stationary shop morning queues.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>AgriPredict — AI-Powered Mandi Intelligence Platform</span>
                  <span className="text-xs font-mono text-slate-500">Prototype</span>
                </div>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Evaluates crop price differences across mandis (e.g. Lucknow vs Barabanki) factoring haulage distance and transportation overheads to predict real net farmer margin. Built with React, Vite, Recharts, and AI heuristics.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>RegistrySathi — Bihar Property Documentation Assistance</span>
                  <span className="text-xs font-mono text-slate-500">Platform Concept</span>
                </div>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Digital service platform assisting citizens with deed preparation (बैनामा, वसीयतनामा, दाखिल-खारिज), registration fee calculation, and deed-writer assistance.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>PYQWaleBhaiya — Educational Resource Platform</span>
                  <span className="text-xs font-mono text-slate-500">Live Web App</span>
                </div>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Lightweight web platform serving college students with clean, fast access to previous-year question papers and subject notes. (pyqwalebhaiya.in)
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Technical Skill Summary
            </h3>
            <div className="text-xs text-slate-600 space-y-1">
              <div><strong>Languages:</strong> Python, JavaScript, HTML, CSS</div>
              <div><strong>Web Technologies:</strong> React, Vite, Tailwind CSS, Bootstrap, Supabase, REST APIs</div>
              <div><strong>Hardware & IoT:</strong> ESP32, NodeMCU, GSM Modules, Sensor Interfacing</div>
              <div><strong>Tools:</strong> Git, GitHub, VS Code, Google Workspace workflows</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            PDF File Target: {PERSONAL_INFO.resumePath}
          </span>
          <a
            href={PERSONAL_INFO.resumePath}
            download="Surya-Pratap-Singh-Resume.pdf"
            className="font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
          >
            <span>Download Resume File</span>
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
