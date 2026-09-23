import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { DemoFormData, DemoFormErrors } from '../types';

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const RequestDemoModal: React.FC<RequestDemoModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = 'QHR',
}) => {
  const [formData, setFormData] = useState<DemoFormData>({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    productInterest: defaultProduct,
  });

  const [errors, setErrors] = useState<DemoFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Update default product when prop changes
  useEffect(() => {
    if (defaultProduct) {
      setFormData((prev) => ({ ...prev, productInterest: defaultProduct }));
    }
  }, [defaultProduct]);

  // Reset state when modal is opened or closed
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setErrors({});
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: DemoFormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid work email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 6) {
      newErrors.phone = 'Please enter a valid contact phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief network submission for natural UX feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md transition-all duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-[#131823] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-[#dfe2f1] my-8 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6a3d]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff6a3d]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff6a3d]/10 border border-[#ff6a3d]/20 text-[#ff6a3d] text-xs font-mono uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Live Platform Demo</span>
              </div>
              <h2 id="modal-title" className="text-2xl font-bold font-display tracking-tight text-white">
                Request a Product Demo
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Experience our product suite in an interactive sandbox configured for your enterprise requirements.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Selection */}
              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                  Platform Product of Interest
                </label>
                <select
                  value={formData.productInterest}
                  onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#0b0f17] border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#ff6a3d] focus:ring-1 focus:ring-[#ff6a3d] transition-colors"
                >
                  <option value="QHR">QHR - HR & Payroll Platform</option>
                  <option value="StoreFlaunt">StoreFlaunt - Hyperlocal Commerce</option>
                  <option value="WeeVids">WeeVids - Creator Infrastructure</option>
                  <option value="My Holy Trip">My Holy Trip - Cultural Geo Archive</option>
                  <option value="Snapp Buddy">Snapp Buddy - AI Event Optics</option>
                  <option value="All Products">Entire Qurinom Product Suite</option>
                </select>
              </div>

              {/* Full Name */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Full Name <span className="text-[#ff6a3d]">*</span>
                  </label>
                  {errors.fullName && (
                    <span className="text-xs text-rose-400 font-mono">{errors.fullName}</span>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  className={`w-full px-3.5 py-2.5 bg-[#0b0f17] border rounded-lg text-white placeholder:text-slate-500 text-sm focus:outline-none transition-colors ${
                    errors.fullName ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-[#ff6a3d] focus:ring-1 focus:ring-[#ff6a3d]'
                  }`}
                />
              </div>

              {/* Email & Phone (2 Cols) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-medium text-slate-300 uppercase tracking-wider">
                      Work Email <span className="text-[#ff6a3d]">*</span>
                    </label>
                  </div>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full px-3.5 py-2.5 bg-[#0b0f17] border rounded-lg text-white placeholder:text-slate-500 text-sm focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-[#ff6a3d] focus:ring-1 focus:ring-[#ff6a3d]'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-rose-400 font-mono mt-1 block">{errors.email}</span>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-medium text-slate-300 uppercase tracking-wider">
                      Phone Number <span className="text-[#ff6a3d]">*</span>
                    </label>
                  </div>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    className={`w-full px-3.5 py-2.5 bg-[#0b0f17] border rounded-lg text-white placeholder:text-slate-500 text-sm focus:outline-none transition-colors ${
                      errors.phone ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-[#ff6a3d] focus:ring-1 focus:ring-[#ff6a3d]'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-rose-400 font-mono mt-1 block">{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* Company */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Company / Organization <span className="text-[#ff6a3d]">*</span>
                  </label>
                  {errors.company && (
                    <span className="text-xs text-rose-400 font-mono">{errors.company}</span>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="e.g. Acme Technologies"
                  value={formData.company}
                  onChange={(e) => {
                    setFormData({ ...formData, company: e.target.value });
                    if (errors.company) setErrors({ ...errors, company: undefined });
                  }}
                  className={`w-full px-3.5 py-2.5 bg-[#0b0f17] border rounded-lg text-white placeholder:text-slate-500 text-sm focus:outline-none transition-colors ${
                    errors.company ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-[#ff6a3d] focus:ring-1 focus:ring-[#ff6a3d]'
                  }`}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                  Specific Requirements or Team Size (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. We have ~250 employees across 3 office locations needing biometric attendance & payroll automation."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#0b0f17] border border-white/10 rounded-lg text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#ff6a3d] focus:ring-1 focus:ring-[#ff6a3d] transition-colors resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-5 bg-[#ff6a3d] hover:bg-[#ff7e55] active:scale-[0.98] text-white font-medium text-sm rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#ff6a3d]/25 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Request...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="py-3 px-5 bg-white/5 hover:bg-white/10 active:scale-[0.98] text-slate-300 hover:text-white font-medium text-sm rounded-lg transition-colors text-center"
                >
                  Cancel
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[#00a9bc]" />
                <span>Enterprise SLA • Confidentiality Guaranteed • Zero Spam</span>
              </div>
            </form>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="py-6 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 animate-in fade-in zoom-in duration-300">
              <CheckCircle className="w-9 h-9" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-[#ff6a3d] mb-1">
              Confirmed // Priority Scheduled
            </span>
            <h3 className="text-2xl font-bold font-display text-white mb-2">
              Demo Request Submitted
            </h3>
            <p className="text-slate-300 text-sm max-w-sm mb-6 leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName}</strong>! Our product implementation team will get in touch with you at <span className="text-[#ff6a3d] font-mono">{formData.email}</span> within 2 business hours.
            </p>

            <div className="w-full bg-[#0b0f17] border border-white/5 rounded-xl p-4 text-left mb-6 text-xs space-y-2">
              <div className="flex justify-between text-slate-400">
                <span>Product Focus:</span>
                <span className="font-semibold text-white">{formData.productInterest}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Organization:</span>
                <span className="font-semibold text-white">{formData.company}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Status:</span>
                <span className="text-emerald-400 font-mono">Sandbox Provisioning Queued</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 px-5 bg-white/10 hover:bg-white/15 text-white font-medium text-sm rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
