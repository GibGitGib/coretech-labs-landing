import React, { useState } from "react";
import { Mail, User, CheckCircle2 } from "lucide-react";

export default function LeadCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [productUpdates, setProductUpdates] = useState(true);
  const [promosOffers, setPromosOffers] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div id="contact-section" className="relative max-w-4xl mx-auto bg-brand-dark-card border border-slate-800/80 rounded-2xl overflow-hidden p-6 lg:p-10">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-cyan/2 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-purple/2 blur-[80px] pointer-events-none" />

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left: Context */}
        <div className="md:col-span-6 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-brand-cyan/5 border border-brand-cyan/20 text-brand-cyan font-mono text-[10px] tracking-wider uppercase">
            <span>STAY IN THE LOOP</span>
          </div>

          <h3 className="font-display text-2xl lg:text-3xl font-bold text-slate-100 tracking-tight">
            Get notified when{" "}
            <span className="text-gradient-cyan-teal">something ships.</span>
          </h3>
          
          <p className="text-slate-400 text-sm leading-relaxed">
            Occasional updates when I release something new. No spam, no drip campaigns, no "growth hacking."
          </p>

          <div className="space-y-2 mt-4">
            <div className="flex items-center space-x-3 text-xs text-slate-400">
              <span className="text-brand-cyan">▸</span>
              <span>Infrequent — roughly once a month</span>
            </div>
            <div className="flex items-center space-x-3 text-xs text-slate-400">
              <span className="text-brand-cyan">▸</span>
              <span>No tracking pixels, no analytics on emails</span>
            </div>
            <div className="flex items-center space-x-3 text-xs text-slate-400">
              <span className="text-brand-cyan">▸</span>
              <span>Unsubscribe anytime, instantly</span>
            </div>
          </div>
        </div>

        {/* Right: Form or Confirmation */}
        <div className="md:col-span-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 bg-brand-dark-surface/50 border border-slate-900 rounded-xl p-5 md:p-6">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">
                JOIN THE LIST
              </div>

              <div className="relative">
                <label htmlFor="contact-email" className="sr-only">Email address</label>
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-slate-500" />
                </div>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-brand-dark/80 border border-slate-800 focus:border-brand-cyan/60 rounded-lg py-3 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-brand-cyan/20 transition-all font-mono"
                />
              </div>

              {/* Opt-in toggles */}
              <div className="space-y-2.5 pt-1">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={productUpdates}
                    onChange={(e) => setProductUpdates(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-700 bg-brand-dark text-brand-cyan focus:ring-brand-cyan/30 cursor-pointer"
                  />
                  <span className="text-xs text-slate-300">Product updates & new releases</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={promosOffers}
                    onChange={(e) => setPromosOffers(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-700 bg-brand-dark text-brand-cyan focus:ring-brand-cyan/30 cursor-pointer"
                  />
                  <span className="text-xs text-slate-300">Promos & special offers</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-display font-medium text-xs tracking-wider uppercase py-3.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? "bg-slate-900 border border-slate-800 text-slate-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-brand-cyan to-brand-teal text-brand-dark font-bold hover:opacity-95 shadow-md shadow-brand-teal/5 cursor-pointer active:scale-98"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-brand-cyan" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Adding you...</span>
                  </>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>

              <div className="flex items-start space-x-2.5 text-[10px] text-slate-500 leading-relaxed pt-1">
                <User className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
                <span>
                  No credit card. No phone number. Just an email address — and I won't abuse it.
                </span>
              </div>
            </form>
          ) : (
            /* Confirmation State */
            <div className="bg-brand-dark-surface border border-brand-teal/30 rounded-xl p-5 md:p-6 space-y-4 transition-all duration-500">
              <div className="flex items-center space-x-2 text-brand-teal">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">YOU'RE ON THE LIST</span>
              </div>

              <div className="border-t border-b border-slate-800/80 py-4 space-y-3 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">EMAIL</span>
                  <span className="text-slate-300 font-medium text-right">{email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">FREQUENCY</span>
                  <span className="text-brand-cyan font-bold">~Monthly</span>
                </div>
                {productUpdates && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">UPDATES</span>
                    <span className="text-brand-teal font-medium">✓ Product releases</span>
                  </div>
                )}
                {promosOffers && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">PROMOS</span>
                    <span className="text-brand-magenta font-medium">✓ Offers enabled</span>
                  </div>
                )}
              </div>

              <div className="text-[10px] text-slate-500 text-center font-mono">
                You'll hear from me when something ships. That's it.
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="w-full text-slate-500 hover:text-slate-300 font-mono text-[10px] py-2 transition-colors cursor-pointer"
              >
                Actually, unsubscribe
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
