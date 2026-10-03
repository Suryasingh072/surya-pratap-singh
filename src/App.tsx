import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatIBuild } from './components/WhatIBuild';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { InternshipExperience } from './components/InternshipExperience';
import { JourneyEducation } from './components/JourneyEducation';
import { BuildProcess } from './components/BuildProcess';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatDesk } from './components/ChatDesk';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 flex flex-col font-sans">
      {/* Sticky Top Navbar */}
      <Navbar onOpenChat={() => setIsChatOpen(true)} />

      {/* Main Content Regions */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <WhatIBuild />
        <Projects />
        <TechStack />
        <InternshipExperience />
        <JourneyEducation />
        <BuildProcess />
        <GitHubSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Integrated Professional Chat Desk */}
      <ChatDesk 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        onOpen={() => setIsChatOpen(true)} 
      />

      {/* Resume Viewer / Download Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}
