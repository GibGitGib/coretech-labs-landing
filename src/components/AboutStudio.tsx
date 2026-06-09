import React from "react";
import { Terminal, Coffee, Globe } from "lucide-react";

export default function AboutStudio() {
  return (
    <div id="about-section" className="space-y-12 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block px-3 py-1 rounded-full bg-brand-cyan/5 border border-brand-cyan/20 text-brand-cyan text-xs font-mono tracking-widest uppercase">
          ABOUT THE STUDIO
        </div>
        <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight text-slate-100">
          One person, <span className="text-gradient-cyan-teal">many experiments.</span>
        </h2>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          CoreTech Labs is a solo product studio. I build useful software, release it, and iterate based on real feedback. No investors, no growth targets — just building things that work and seeing where they lead.
        </p>
      </div>

      {/* Three pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-brand-dark-surface/40 border border-slate-800/60 rounded-2xl p-6 space-y-3">
          <Terminal className="w-5 h-5 text-brand-cyan" />
          <h4 className="font-display text-base font-semibold text-slate-100">Everything ships</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Ideas become working products, not slide decks. If something exists on this site, you can use it right now.
          </p>
        </div>

        <div className="bg-brand-dark-surface/40 border border-slate-800/60 rounded-2xl p-6 space-y-3">
          <Globe className="w-5 h-5 text-brand-purple" />
          <h4 className="font-display text-base font-semibold text-slate-100">Open by default</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Products are open source. Code lives on GitHub. The best feedback comes from people actually using what you build.
          </p>
        </div>

        <div className="bg-brand-dark-surface/40 border border-slate-800/60 rounded-2xl p-6 space-y-3">
          <Coffee className="w-5 h-5 text-brand-magenta" />
          <h4 className="font-display text-base font-semibold text-slate-100">Built by one person</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Solo founder in Cambridge, MA. Every product on this site was designed, built, and shipped by Corey. No teams, no agencies.
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center max-w-xl mx-auto pt-8">
        <p className="text-slate-500 text-sm leading-relaxed">
          Reach out at{" "}
          <a href="mailto:info@coretechlabs.app" className="text-brand-cyan hover:text-brand-magenta transition-colors font-mono underline underline-offset-4">
            info@coretechlabs.app
          </a>
          {" "}— I read every message. Replies may take 24–48 hours. No sales teams, no BDRs.
        </p>
      </div>
    </div>
  );
}
