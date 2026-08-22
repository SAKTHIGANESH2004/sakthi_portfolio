import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Github, Linkedin, MessageSquare, Sparkles, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendContactMessage } from '../utils/api';

export default function ContactSection({ theme }) {
  const TARGET_EMAIL = "sakthiganeshk27@gmail.com";
  const LINKEDIN_URL = "https://www.linkedin.com/in/sakthiganesh-k-60ba8b292";
  const isDark = theme === 'dark';

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
      const result = await sendContactMessage(formData);
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
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono mb-2 shadow-inner ${
            isDark
              ? 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300'
              : 'bg-cyan-50 border-cyan-300 text-cyan-700'
          }`}>
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT & COLLABORATE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Get In Touch
          </h2>
          <p className={`text-sm sm:text-base mt-2 max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            All messages are directly routed to <strong className={`font-mono ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>{TARGET_EMAIL}</strong>. Reach out regarding Data Analyst opportunities, analytics consulting, or dataset collaborations!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Quick Links */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className={`glass-panel rounded-2xl p-5 border transition-all shadow-lg group ${
              isDark ? 'border-slate-800 hover:border-cyan-500/50' : 'border-slate-200 hover:border-cyan-400/60'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl border group-hover:scale-105 transition-transform ${
                    isDark ? 'bg-cyan-950/80 border-cyan-500/30 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-600'
                  }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Direct Recipient Email</div>
                    <div className={`text-sm font-bold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>{TARGET_EMAIL}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(TARGET_EMAIL, 'email')}
                  className={`p-2.5 rounded-xl transition-colors cursor-pointer ${
                    isDark ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800'
                  }`}
                  title="Copy Email Address"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Direct Gmail Web Opener Link */}
              <div className={`mt-3 pt-3 border-t flex items-center justify-between text-xs ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
                <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>Prefer sending from Gmail?</span>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${TARGET_EMAIL}&su=Data%20Analyst%20Role%20Inquiry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold flex items-center gap-1 ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-500'}`}
                >
                  Open in Gmail <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className={`glass-panel rounded-2xl p-5 border transition-all shadow-lg group ${
              isDark ? 'border-slate-800 hover:border-emerald-500/50' : 'border-slate-200 hover:border-emerald-400/60'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl border group-hover:scale-105 transition-transform ${
                    isDark ? 'bg-emerald-950/80 border-emerald-500/30 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-600'
                  }`}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Phone & WhatsApp</div>
                    <div className={`text-sm font-bold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>+91 7603868752</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('+917603868752', 'phone')}
                  className={`p-2.5 rounded-xl transition-colors cursor-pointer ${
                    isDark ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800'
                  }`}
                  title="Copy Phone Number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className={`glass-panel rounded-2xl p-5 border flex items-center gap-3 shadow-lg ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <div className={`p-3 rounded-xl border ${isDark ? 'bg-purple-950/80 border-purple-500/30 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-600'}`}>
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Location</div>
                <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Madurai, Tamil Nadu, India</div>
                <div className={`text-[11px] font-mono ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>Open to Remote, Hybrid & Relocation</div>
              </div>
            </div>

            {/* LinkedIn & GitHub Card */}
            <div className={`p-5 rounded-2xl border space-y-3 ${
              isDark ? 'bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border-slate-800' : 'bg-gradient-to-r from-slate-50 via-white to-slate-50 border-slate-200'
            }`}>
              <span className={`text-xs font-mono font-bold tracking-wider uppercase block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Professional Networks
              </span>
              
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-mono font-semibold transition-all hover:scale-105 ${
                    isDark ? 'bg-cyan-950/60 hover:bg-cyan-900/60 border-cyan-500/30 text-cyan-300' : 'bg-cyan-50 hover:bg-cyan-100 border-cyan-300 text-cyan-700'
                  }`}
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/SAKTHIGANESH2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-mono font-semibold transition-all hover:scale-105 ${
                    isDark ? 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-200' : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className={`glass-panel rounded-2xl p-6 sm:p-8 border shadow-2xl relative ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              
              {submitted ? (
                <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95">
                  <div className={`w-16 h-16 rounded-full border flex items-center justify-center mx-auto shadow-lg ${
                    isDark ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-400 shadow-emerald-500/20' : 'bg-emerald-50 border-emerald-300 text-emerald-600 shadow-emerald-200'
                  }`}>
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Message Sent Successfully!</h3>
                    <p className={`text-sm max-w-md mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      Your message has been delivered to <strong className={`font-mono ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>{TARGET_EMAIL}</strong>. Sakthiganesh K will review and respond shortly!
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
                      className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                        isDark ? 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className={`flex items-center justify-between border-b pb-3 mb-2 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                    <span className={`text-xs font-mono font-bold uppercase flex items-center gap-1.5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-cyan-500'}`} />
                      Send Inquiries Directly
                    </span>
                    <span className={`text-[11px] font-mono ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                      Destination: sakthiganeshk27@gmail.com
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-mono mb-1.5 font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Michael Chen"
                        className={`w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none transition-colors ${
                          isDark
                            ? 'bg-slate-950 border-slate-700 text-slate-100 focus:border-cyan-500 placeholder-slate-600'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-500 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-mono mb-1.5 font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="m.chen@analytics.org"
                        className={`w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none transition-colors ${
                          isDark
                            ? 'bg-slate-950 border-slate-700 text-slate-100 focus:border-cyan-500 placeholder-slate-600'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-500 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-mono mb-1.5 font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        COMPANY / ORGANIZATION
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. DataScale Solutions"
                        className={`w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none transition-colors ${
                          isDark
                            ? 'bg-slate-950 border-slate-700 text-slate-100 focus:border-cyan-500 placeholder-slate-600'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-500 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-mono mb-1.5 font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        PURPOSE / SUBJECT
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Data Analyst Opportunity"
                        className={`w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none transition-colors ${
                          isDark
                            ? 'bg-slate-950 border-slate-700 text-slate-100 focus:border-cyan-500 placeholder-slate-600'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-500 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-mono mb-1.5 font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      MESSAGE CONTENT *
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Sakthiganesh, we reviewed your interactive portfolio and were impressed by your 780K EDA work and SQL pipelines. We'd love to connect regarding..."
                      className={`w-full border rounded-xl p-4 text-xs focus:outline-none leading-relaxed transition-colors ${
                        isDark
                          ? 'bg-slate-950 border-slate-700 text-slate-100 focus:border-cyan-500 placeholder-slate-600'
                          : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-500 placeholder-slate-400'
                      }`}
                    ></textarea>
                  </div>

                  {errorMsg && (
                    <div className={`p-3 rounded-lg border text-xs ${
                      isDark ? 'bg-red-950/80 border-red-500/40 text-red-300' : 'bg-red-50 border-red-200 text-red-700'
                    }`}>
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
                      <span>{loading ? 'Sending to sakthiganeshk27@gmail.com...' : 'Send Message'}</span>
                    </button>

                    <a
                      href={getDirectGmailWebUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full sm:w-auto px-4 py-3.5 rounded-xl border text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 ${
                        isDark
                          ? 'bg-slate-900 hover:bg-slate-800 text-cyan-300 border-cyan-500/30'
                          : 'bg-white hover:bg-slate-50 text-cyan-700 border-cyan-300'
                      }`}
                      title="Compose email directly in Gmail"
                    >
                      <Mail className="w-4 h-4" />
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
