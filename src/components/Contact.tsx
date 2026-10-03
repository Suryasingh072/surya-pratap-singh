import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  ExternalLink,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject';
    if (!formData.message.trim()) newErrors.message = 'Please write a brief message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Trigger local submission state & prepare mailto link
    setFormStatus('submitted');
  };

  const openMailDraft = () => {
    const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || 'Project Inquiry / Collaboration'
    )}&body=${encodeURIComponent(
      `Hi Surya,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl pb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Have an idea? Let's build it.
          </h2>
          <p className="mt-2 text-base text-slate-600">
            I'm always interested in interesting technology ideas, collaborations, projects and opportunities to build something useful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with 1-click copy */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-bold text-slate-900 block hover:text-blue-600 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-500 hover:text-blue-600 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-all text-xs flex items-center gap-1"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-[11px] text-emerald-600 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm sm:text-base font-bold text-slate-900 block hover:text-emerald-600 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Call
              </a>
            </div>

            {/* Social Grid: LinkedIn, GitHub, X, Instagram */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-xs transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-slate-800">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-800 hover:shadow-xs transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-800" />
                  <span className="text-xs font-bold text-slate-800">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-800 transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-900 hover:shadow-xs transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-extrabold text-slate-900">𝕏</span>
                  <span className="text-xs font-bold text-slate-800">Twitter / X</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-xl border border-slate-200 hover:border-pink-500 hover:shadow-xs transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-gradient-to-tr from-amber-500 to-pink-500 inline-block" />
                  <span className="text-xs font-bold text-slate-800">Instagram</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-pink-600 transition-colors" />
              </a>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-xs text-center transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me Directly</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl text-center transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>Let's Connect</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            {formStatus === 'submitted' ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Ready to Dispatch!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your message has been validated. Click below to launch your default mail app pre-filled with this draft, or send directly to <span className="font-semibold text-slate-900">{PERSONAL_INFO.email}</span>.
                </p>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={openMailDraft}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors inline-flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Launch Pre-Filled Email Draft</span>
                  </button>
                  <button
                    onClick={() => {
                      setFormStatus('idle');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors"
                  >
                    Edit Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.name ? 'border-rose-400' : 'border-slate-200'
                      }`}
                    />
                    {errors.name && <span className="text-[11px] text-rose-600 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.email ? 'border-rose-400' : 'border-slate-200'
                      }`}
                    />
                    {errors.email && <span className="text-[11px] text-rose-600 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Project Collaboration / Internship Opportunity"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-all ${
                      errors.subject ? 'border-rose-400' : 'border-slate-200'
                    }`}
                  />
                  {errors.subject && <span className="text-[11px] text-rose-600 mt-1 block">{errors.subject}</span>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-all ${
                      errors.message ? 'border-rose-400' : 'border-slate-200'
                    }`}
                  />
                  {errors.message && <span className="text-[11px] text-rose-600 mt-1 block">{errors.message}</span>}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 rounded-lg shadow-xs transition-all"
                  >
                    <span>Send Message →</span>
                  </button>
                  <span className="text-[11px] text-slate-400">
                    Direct dispatch to surya286351@gmail.com
                  </span>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
