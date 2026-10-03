import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { 
  X, 
  ExternalLink, 
  Github, 
  Calculator, 
  MapPin, 
  AlertCircle, 
  Compass, 
  CheckCircle2, 
  Layers
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Interactive simulator states for AgriPredict
  const [batchWeightKg, setBatchWeightKg] = useState(1000);
  const [distanceKm, setDistanceKm] = useState(35);
  
  // Interactive simulator states for Nazari Naksha
  const [plotWidth, setPlotWidth] = useState(30);
  const [plotDepth, setPlotDepth] = useState(50);
  const [roadSide, setRoadSide] = useState<'South' | 'North' | 'East' | 'West'>('South');

  if (!project) return null;

  // AgriPredict interactive simulation calculation
  const lucknowRate = 25;
  const barabankiRate = 27;
  const haulageRatePerKm = 30; // base transport freight
  const baseFreight = 300;
  const transportCost = Math.round(baseFreight + (distanceKm * haulageRatePerKm));
  const lucknowGross = batchWeightKg * lucknowRate;
  const barabankiGross = batchWeightKg * barabankiRate;
  const barabankiNet = barabankiGross - transportCost;
  const profitDifference = barabankiNet - lucknowGross;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
              {project.statusLabel}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Main Title & Image */}
          <div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {project.name}: {project.title}
            </h2>
            {project.tagline && (
              <p className="mt-2 text-base text-blue-700 font-semibold">
                "{project.tagline}"
              </p>
            )}
            
            <div className="mt-6 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-64 sm:h-80 object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Project Architecture & Overview
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              {project.description}
            </p>
          </div>

          {/* AgriPredict Interactive Mandi Profit Comparison Engine */}
          {project.id === 'agripredict' && (
            <div className="p-5 bg-blue-50/50 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between pb-3 border-b border-blue-200">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  <h4 className="text-base font-bold text-slate-900">
                    Live Simulator: Mandi Transport & Profit Engine
                  </h4>
                </div>
                <span className="text-xs font-mono text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                  Interactive Prototype Demo
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>Harvest Weight: {batchWeightKg.toLocaleString()} kg (Potato)</span>
                    </div>
                    <input
                      type="range"
                      min={200}
                      max={5000}
                      step={100}
                      value={batchWeightKg}
                      onChange={(e) => setBatchWeightKg(Number(e.target.value))}
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>Distance to Barabanki Mandi: {distanceKm} km</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={120}
                      step={5}
                      value={distanceKm}
                      onChange={(e) => setDistanceKm(Number(e.target.value))}
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Local Lucknow Mandi price: <span className="font-semibold text-slate-900">₹{lucknowRate}/kg</span>. 
                    Barabanki Mandi price: <span className="font-semibold text-slate-900">₹{barabankiRate}/kg</span>.
                    Vehicle freight is computed dynamically per distance.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-2xs space-y-2 text-xs">
                  <div className="flex justify-between pb-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Lucknow Sale (Local):</span>
                    <span className="font-mono font-bold text-slate-900">₹{lucknowGross.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Barabanki Sale (Gross):</span>
                    <span className="font-mono font-bold text-slate-900">₹{barabankiGross.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Estimated Transport Cost:</span>
                    <span className="font-mono font-semibold text-rose-600">- ₹{transportCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-slate-100">
                    <span className="text-slate-700 font-semibold">Barabanki Net Realization:</span>
                    <span className="font-mono font-bold text-slate-900">₹{barabankiNet.toLocaleString()}</span>
                  </div>
                  <div className={`flex justify-between pt-1 font-bold text-sm ${profitDifference >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                    <span>Net Margin Advantage:</span>
                    <span>{profitDifference >= 0 ? `+ ₹${profitDifference.toLocaleString()} Profit` : `- ₹${Math.abs(profitDifference).toLocaleString()} Loss`}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 italic pt-1">
                    {profitDifference > 0 
                      ? "Recommendation: Traveling to Barabanki yields positive net returns after freight." 
                      : "Recommendation: Local Lucknow sale recommended; transport costs exceed mandi price premium."}
                  </div>
                </div>
              </div>

              {/* Research Factors */}
              {project.keyFeatureHighlight?.details && (
                <div className="mt-5 pt-4 border-t border-blue-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-2">
                    Research Factors Considered:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {project.keyFeatureHighlight.details.map((item, idx) => (
                      <div key={idx} className="p-2 bg-white rounded border border-blue-100 text-xs">
                        <div className="text-[10px] text-slate-500">{item.label}</div>
                        <div className="font-semibold text-slate-800">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* RegistrySathi Services Breakdown */}
          {project.servicesList && (
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                  Assisted Deeds & Documentation Services
                </h4>
                <span className="text-xs text-slate-500 font-medium">Bihar Regional Scope</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {project.servicesList.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded border border-slate-200/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="text-slate-800 font-medium">{service}</span>
                  </div>
                ))}
              </div>
              {project.pricingModel && (
                <div className="mt-3 p-3 bg-white rounded-lg border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="text-slate-500">Service Fee Model: </span>
                    <span className="font-semibold text-slate-800">{project.pricingModel.formFilling}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Optional Desk Support: </span>
                    <span className="font-semibold text-slate-800">{project.pricingModel.optionalAssistant}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Nazari Naksha Interactive Visualizer */}
          {project.id === 'nazari-naksha' && (
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-blue-600" />
                  <h4 className="text-base font-bold text-slate-900">
                    Interactive Nazari Naksha Blueprint Visualizer
                  </h4>
                </div>
                <span className="text-xs text-slate-500 font-mono">Synchronized Road & Plots</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5 space-y-3 text-xs">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      Plot Width: {plotWidth} ft
                    </label>
                    <input
                      type="range"
                      min={15}
                      max={60}
                      value={plotWidth}
                      onChange={(e) => setPlotWidth(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      Plot Depth: {plotDepth} ft
                    </label>
                    <input
                      type="range"
                      min={25}
                      max={90}
                      value={plotDepth}
                      onChange={(e) => setPlotDepth(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      Road Orientation Access:
                    </label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {(['South', 'North', 'East', 'West'] as const).map((side) => (
                        <button
                          key={side}
                          onClick={() => setRoadSide(side)}
                          className={`py-1 rounded text-[11px] font-semibold transition-colors ${
                            roadSide === side 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {side}
                        </button>
                      ))}
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 leading-normal">
                    Road placement and cardinal directions stay visually synchronized with the boundary layout.
                  </p>
                </div>

                {/* SVG Blueprint Canvas */}
                <div className="md:col-span-7 bg-white p-4 rounded-xl border border-slate-300 flex flex-col items-center justify-center min-h-[220px]">
                  <div className="relative w-full max-w-[280px] h-[190px] border border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-slate-50/50">
                    
                    {/* Compass Rose Top-Right */}
                    <div className="absolute top-2 right-2 text-[10px] font-mono text-slate-500 flex flex-col items-center">
                      <span className="font-bold text-blue-600">N ↑</span>
                      <span>W ← → E</span>
                      <span>S ↓</span>
                    </div>

                    {/* Road representation bar */}
                    {roadSide === 'South' && (
                      <div className="absolute bottom-1 left-2 right-2 h-4 bg-slate-300/80 border-t border-b border-slate-400 rounded-xs flex items-center justify-center text-[9px] font-mono text-slate-700">
                        === Main Access Road (दक्षिण) ===
                      </div>
                    )}
                    {roadSide === 'North' && (
                      <div className="absolute top-1 left-2 right-2 h-4 bg-slate-300/80 border-t border-b border-slate-400 rounded-xs flex items-center justify-center text-[9px] font-mono text-slate-700">
                        === Main Access Road (उत्तर) ===
                      </div>
                    )}
                    {roadSide === 'East' && (
                      <div className="absolute top-2 bottom-2 right-1 w-4 bg-slate-300/80 border-l border-r border-slate-400 rounded-xs flex items-center justify-center text-[8px] font-mono text-slate-700 [writing-mode:vertical-lr]">
                        Access Road (पूर्व)
                      </div>
                    )}
                    {roadSide === 'West' && (
                      <div className="absolute top-2 bottom-2 left-1 w-4 bg-slate-300/80 border-l border-r border-slate-400 rounded-xs flex items-center justify-center text-[8px] font-mono text-slate-700 [writing-mode:vertical-lr]">
                        Access Road (पश्चिम)
                      </div>
                    )}

                    {/* Plot Box */}
                    <div 
                      className="bg-blue-50 border-2 border-blue-600 rounded flex flex-col items-center justify-center shadow-xs transition-all duration-300"
                      style={{
                        width: `${Math.min(180, Math.max(80, plotWidth * 3))}px`,
                        height: `${Math.min(120, Math.max(60, plotDepth * 1.5))}px`
                      }}
                    >
                      <span className="text-[11px] font-bold text-blue-900">Plot #204</span>
                      <span className="text-[9px] text-blue-700 font-mono">
                        {plotWidth}' × {plotDepth}' ({plotWidth * plotDepth} sq.ft)
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techTags.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Authenticity Disclaimer Note */}
          {project.disclaimer && (
            <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-lg flex items-start gap-2.5 text-xs text-amber-900">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>{project.disclaimer}</span>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <span>Visit Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Close Details
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
