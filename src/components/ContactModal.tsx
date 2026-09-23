import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onOpenDemo,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Product Inquiry');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md transition-all duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-xl bg-[#131823] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-[#dfe2f1] my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Close contact modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#00a9bc]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#00a9bc]">
            Connect With Us
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
          Get in Touch
        </h2>
        <p className="text-sm text-slate-400 mb-6">
          Reach our platform architects for technical inquiries, product collaborations, or enterprise integrations.
        </p>

        {!sent ? (
          <div>
            {/* Quick Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="p-3 bg-[#0b0f17] border border-white/5 rounded-lg flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ff6a3d] shrink-0" />
                <div className="truncate">
                  <div className="text-[10px] uppercase font-mono text-slate-400">Email</div>
                  <div className="text-xs text-white truncate">info@qurinomsolutions.com</div>
                </div>
              </div>

              <div className="p-3 bg-[#0b0f17] border border-white/5 rounded-lg flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00a9bc] shrink-0" />
                <div className="truncate">
                  <div className="text-[10px] uppercase font-mono text-slate-400">Phone</div>
                  <div className="text-xs text-white truncate">+91 (040) 4852-9900</div>
                </div>
              </div>

              <div className="p-3 bg-[#0b0f17] border border-white/5 rounded-lg flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#adc6ff] shrink-0" />
                <div className="truncate">
                  <div className="text-[10px] uppercase font-mono text-slate-400">HQ</div>
                  <div className="text-xs text-white truncate">Hyderabad, India</div>
                </div>
              </div>
            </div>

            {/* Quick Message Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Varma"
                    className="w-full px-3.5 py-2.5 bg-[#0b0f17] border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#ff6a3d]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ramesh@organization.com"
                    className="w-full px-3.5 py-2.5 bg-[#0b0f17] border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#ff6a3d]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                  Subject
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0b0f17] border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#ff6a3d]"
                >
                  <option value="Product Inquiry">Product Inquiry (QHR / Suite)</option>
                  <option value="Custom Engineering">Bespoke Architecture & Engineering</option>
                  <option value="Partnership">Enterprise Partnership & Reseller</option>
                  <option value="General">General Questions</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can our engineering team assist you today?"
                  className="w-full px-3.5 py-2.5 bg-[#0b0f17] border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#ff6a3d] resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 bg-[#ff6a3d] hover:bg-[#ff7e55] text-white font-medium text-sm rounded-lg flex items-center justify-center gap-2 transition-all shadow-md shadow-[#ff6a3d]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenDemo();
                  }}
                  className="py-3 px-4 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-sm rounded-lg text-center"
                >
                  Schedule Demo Instead
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-2">Message Dispatched</h3>
            <p className="text-slate-300 text-sm max-w-sm mb-6">
              Thank you, {name}. Our engineering liaison will reply to {email} within 24 business hours.
            </p>
            <button
              onClick={onClose}
              className="py-2.5 px-6 bg-white/10 hover:bg-white/15 text-white font-medium text-sm rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
