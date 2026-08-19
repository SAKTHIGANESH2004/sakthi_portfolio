import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Github, Linkedin, MessageSquare, Sparkles, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendContactMessage } from '../utils/api';

export default function ContactSection() {
  const TARGET_EMAIL = "sakthiganeshk27@gmail.com";
  const LINKEDIN_URL = "https://www.linkedin.com/in/sakthiganesh-k-60ba8b292";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'Data Analyst Opportunity',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const getDirectMailtoUrl = () => {
    const encodedSubject = encodeURIComponent(formData.subject || 'Data Analyst Inquiry');
    const bodyContent = `Hi Sakthiganesh,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\nCompany: ${formData.company || 'N/A'}\n\nMessage:\n${formData.message || ''}`;
    const encodedBody = encodeURIComponent(bodyContent);
    return `mailto:${TARGET_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const getDirectGmailWebUrl = () => {
    const encodedSubject = encodeURIComponent(formData.subject || 'Data Analyst Inquiry');
    const bodyContent = `Hi Sakthiganesh,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\nCompany: ${formData.company || 'N/A'}\n\nMessage:\n${formData.message || ''}`;
    const encodedBody = encodeURIComponent(bodyContent);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${TARGET_EMAIL}&su=${encodedSubject}&body=${encodedBody}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      await sendContactMessage(formData);
      setSubmitted(true);
      setLoading(false);
      
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {}

    } catch (err) {
      setLoading(false);
      setErrorMsg(err.message || 'Failed to dispatch message.');
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-2 shadow-inner">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>LET'S CONNECT & COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Get In Touch
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            All messages are directly routed to <strong className="text-cyan-400 font-mono">{TARGET_EMAIL}</strong>. Reach out regarding Data Analyst opportunities, analytics consulting, or dataset collaborations!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Quick Links */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800 hover:border-cyan-500/50 transition-all shadow-lg group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Direct Recipient Email</div>
                    <div className="text-sm font-bold text-white font-mono">{TARGET_EMAIL}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(TARGET_EMAIL, 'email')}
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy Email Address"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Direct Gmail Web Opener Link */}
              <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Prefer sending from Gmail?</span>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${TARGET_EMAIL}&su=Data%20Analyst%20Role%20Inquiry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                >
                  Open in Gmail <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800 hover:border-emerald-500/50 transition-all shadow-lg group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Phone & WhatsApp</div>
                    <div className="text-sm font-bold text-white font-mono">+91 7603868752</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('+917603868752', 'phone')}
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800 flex items-center gap-3 shadow-lg">
              <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-500/30 text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Location</div>
                <div className="text-sm font-bold text-white">Madurai, Tamil Nadu, India</div>
                <div className="text-[11px] text-cyan-400 font-mono">Open to Remote, Hybrid & Relocation</div>
              </div>
            </div>

            {/* LinkedIn & GitHub Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-slate-400 font-bold tracking-wider uppercase block">
                Professional Networks
              </span>
              
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold transition-all hover:scale-105"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/SAKTHIGANESH2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs font-mono font-semibold transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form with Direct Mail Integration */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Inquiry Received & Dispatched!</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your message has been safely logged to the database and designated for delivery to <strong className="text-cyan-400 font-mono">{TARGET_EMAIL}</strong>. Sakthiganesh K will review and respond shortly!
                    </p>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={getDirectGmailWebUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-black text-xs font-bold shadow-md shadow-cyan-500/20 hover:scale-105 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Also Open in Gmail</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          subject: 'Data Analyst Opportunity',
                          message: ''
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold hover:bg-slate-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-2">
                    <span className="text-xs font-mono font-bold text-slate-300 uppercase flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      Send Inquiries Directly
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400">
                      Destination: sakthiganeshk27@gmail.com
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Michael Chen"
                        className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="m.chen@analytics.org"
                        className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                        COMPANY / ORGANIZATION
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. DataScale Solutions"
                        className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                        PURPOSE / SUBJECT
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Data Analyst Opportunity"
                        className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                      MESSAGE CONTENT *
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Sakthiganesh, we reviewed your interactive portfolio and were impressed by your 780K EDA work and SQL pipelines. We'd love to connect regarding..."
                      className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-xl p-4 text-xs focus:outline-none focus:border-cyan-500 leading-relaxed transition-colors"
                    ></textarea>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-950/80 border border-red-500/40 text-red-300 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-black font-extrabold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-black stroke-[2.5]" />
                      <span>{loading ? 'Dispatched to sakthiganeshk27@gmail.com...' : 'Send Message'}</span>
                    </button>

                    <a
                      href={getDirectGmailWebUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2"
                      title="Compose email directly in Gmail"
                    >
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span>Compose in Gmail</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
