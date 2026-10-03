import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  MessageSquareCode, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  ArrowUpRight, 
  Mail, 
  Check, 
  CornerDownLeft
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
  actions?: { label: string; actionType: 'email' | 'navigate'; target: string }[];
}

interface ChatDeskProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const ChatDesk: React.FC<ChatDeskProps> = ({ isOpen, onClose, onOpen }) => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'assistant',
      text: "Hi! I am Surya's interactive direct desk. You can ask about his projects (PrintDrop, AgriPredict, RegistrySathi, PYQWaleBhaiya), his MakeX internship at ERA Foundation / AKTU, tech stack, or send a direct professional inquiry.",
      timestamp: 'Just now'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "Tell me about PrintDrop",
    "Tell me about AgriPredict",
    "MakeX Internship at ERA / AKTU",
    "What is RegistrySathi?",
    "What is your tech stack & education?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateAnswer = (query: string): { text: string; actions?: Message['actions'] } => {
    const q = query.toLowerCase();

    if (q.includes('printdrop') || q.includes('print') || q.includes('stationary') || q.includes('document')) {
      return {
        text: "PrintDrop is Surya's campus utility platform engineered to eliminate morning stationary shop lines. College students can upload PDFs/notes, select print configurations (B&W/color, duplex, binding), and collect orders seamlessly at designated campus counters.",
        actions: [{ label: 'View PrintDrop in Projects', actionType: 'navigate', target: '#projects' }]
      };
    }

    if (q.includes('intern') || q.includes('makex') || q.includes('kalam') || q.includes('era') || q.includes('aktu') || q.includes('robotics')) {
      return {
        text: "Surya completed the Kalam Pragati MakeX Internship organized by ERA Foundation in collaboration with the Central Training & Placement Cell, AKTU (Aug 2025 – Sep 2025). It provided intensive hands-on training in robotics, rapid prototyping, Arduino, Raspberry Pi, Python, sensors, computer vision, and design thinking.",
        actions: [{ label: 'View Internship Details', actionType: 'navigate', target: '#experience' }]
      };
    }

    if (q.includes('agri') || q.includes('mandi') || q.includes('crop') || q.includes('potato')) {
      return {
        text: "AgriPredict is Surya's AI-powered agriculture platform prototype. It solves a crucial dilemma for farmers: comparing crop prices across mandis (e.g. Lucknow at ₹25/kg vs Barabanki at ₹27/kg) while factoring in haulage and distance so farmers know their real net profitability. It's built with React, Vite, Recharts, and AI market research.",
        actions: [{ label: 'View AgriPredict in Showcase', actionType: 'navigate', target: '#projects' }]
      };
    }

    if (q.includes('registry') || q.includes('property') || q.includes('bihar') || q.includes('sathi')) {
      return {
        text: "RegistrySathi is a private digital customer-handling platform concept designed to simplify property and registry-related documentation in Bihar (like बैनामा, वसीयतनामा, दाखिल-खारिज assistance). It provides service checklists, fee guidance (e.g. ₹2,000 for form filling), and connects users with deed writers.",
        actions: [{ label: 'View RegistrySathi details', actionType: 'navigate', target: '#projects' }]
      };
    }

    if (q.includes('pyq') || q.includes('education') || q.includes('exam') || q.includes('paper')) {
      return {
        text: "PYQWaleBhaiya (pyqwalebhaiya.in) is Surya's live lightweight educational platform helping engineering students download previous-year question papers and syllabus guides without distracting ad clutter.",
        actions: [{ label: 'Visit pyqwalebhaiya.in', actionType: 'navigate', target: 'https://pyqwalebhaiya.in' }]
      };
    }

    if (q.includes('tech') || q.includes('stack') || q.includes('college') || q.includes('semester') || q.includes('education')) {
      return {
        text: "Surya is in the 5th Semester of B.Tech in Computer Science & Engineering at BBDNIIT Lucknow. His tech stack includes React, Vite, JavaScript, Python, Tailwind CSS, Supabase, ESP32 / NodeMCU hardware, and AI/Gemini tools.",
        actions: [{ label: 'Inspect Skills Section', actionType: 'navigate', target: '#skills' }]
      };
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('intern') || q.includes('collaborat')) {
      return {
        text: `You can reach Surya directly via email at ${PERSONAL_INFO.email} or by phone at ${PERSONAL_INFO.phone}. He is enthusiastic about full-stack, AI, and product engineering opportunities.`,
        actions: [{ label: 'Draft Direct Email', actionType: 'email', target: `mailto:${PERSONAL_INFO.email}?subject=Collaboration%20Inquiry` }]
      };
    }

    // Default polite and factual response
    return {
      text: `Thanks for the message! Surya is a B.Tech CSE student and builder based in Lucknow. He specializes in turning real-world problems into products using AI, React, Python, and IoT. Would you like to connect directly with him via email?`,
      actions: [{ label: 'Send Direct Message to Surya', actionType: 'email', target: `mailto:${PERSONAL_INFO.email}?subject=Portfolio%20Inquiry&body=${encodeURIComponent(query)}` }]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: 'Now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');

    // Simulate swift settling response
    setTimeout(() => {
      const response = generateAnswer(query);
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: response.text,
        timestamp: 'Now',
        actions: response.actions
      };
      setMessages((prev) => [...prev, assistantMsg]);
    }, 350);
  };

  return (
    <>
      {/* Floating launcher trigger button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={onOpen}
            className="group relative flex items-center gap-2.5 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200"
            aria-label="Open Direct Communication Desk"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <MessageSquareCode className="w-4 h-4" />
            <span className="text-xs font-bold tracking-wide">Direct Chat Desk</span>
          </button>
        </div>
      )}

      {/* Slide-in floating communication card */}
      {isOpen && (
        <div 
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-fadeIn"
          role="region"
          aria-label="Professional Direct Chat Desk"
        >
          {/* Header */}
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                SP
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">
                  Surya Pratap Singh
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Direct Communication Desk</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-md transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Prompts Selector */}
          <div className="px-3 py-2 bg-slate-50/60 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="whitespace-nowrap px-2.5 py-1 bg-white hover:bg-blue-50 hover:text-blue-600 border border-slate-200 rounded-md text-slate-600 font-medium transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Message Thread */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 text-[10px] font-bold">
                    SP
                  </div>
                )}
                <div className={`max-w-[80%] rounded-xl p-3 ${
                  msg.sender === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-100 text-slate-800'
                }`}>
                  <p className="leading-relaxed">{msg.text}</p>
                  
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-slate-200/80 flex flex-col gap-1.5">
                      {msg.actions.map((act, i) => (
                        <a
                          key={i}
                          href={act.target}
                          target={act.target.startsWith('http') ? '_blank' : undefined}
                          rel={act.target.startsWith('http') ? 'noopener noreferrer' : undefined}
                          onClick={() => {
                            if (act.target.startsWith('#')) onClose();
                          }}
                          className="inline-flex items-center justify-between px-2.5 py-1.5 bg-white text-blue-600 font-semibold rounded text-[11px] hover:bg-blue-50 transition-colors shadow-2xs border border-slate-200/60"
                        >
                          <span>{act.label}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  )}

                  <span className={`text-[9px] block mt-1 ${msg.sender === 'user' ? 'text-blue-200 text-right' : 'text-slate-400'}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about projects, skills, or collaboration..."
                className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                aria-label="Send Message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
