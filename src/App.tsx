import React, { useState, useEffect } from "react";
import { 
  Layers, Terminal, ArrowUpRight, Mail, Sparkles, 
  Cpu, Menu, X, ChevronRight, Activity, ArrowRight, CornerDownRight,
  Mic, Heart, MessageCircle, Utensils
} from "lucide-react";

import NetworkCanvas from "./components/NetworkCanvas";
import SimulatorCockpit from "./components/SimulatorCockpit";
import TechPillars from "./components/TechPillars";
import LeadCapture from "./components/LeadCapture";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("info@coretechlabs.app");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-brand-dark text-slate-100 min-h-screen font-sans antialiased selection:bg-brand-cyan selection:text-brand-dark overflow-x-hidden bg-grid-white relative">
      {/* Scroll indicator bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-magenta z-50 transition-all duration-300 pointer-events-none" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Decorative Background Ambient */}
      <div className="absolute top-0 right-0 p-12 pointer-events-none select-none z-10">
        <p className="text-[120px] md:text-[200px] font-black text-white/[0.015] leading-none select-none">CT</p>
      </div>

      {/* Side Rail Text */}
      <div className="absolute left-10 bottom-36 hidden xl:flex items-center transform -rotate-90 origin-left pointer-events-none select-none text-[9px] uppercase tracking-[0.52em] text-brand-cyan/30 font-mono">
        Product studio — optimization × behavioral health — EST. 2024
      </div>

      {/* FIXED GLASS NAVIGATION BAR */}
      <header className="fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:max-w-7xl lg:mx-auto z-40">
        <nav className="bg-brand-dark-surface/75 border border-white/5 rounded-2xl px-5 py-4 backdrop-blur-md flex items-center justify-between transition-all duration-350">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-purple p-[1px] shadow-sm shadow-brand-cyan/20">
              <div className="w-full h-full bg-brand-dark rounded-full flex items-center justify-center font-display font-black text-xs text-brand-cyan tracking-tighter">
                •
              </div>
            </div>
            <div>
              <span className="font-display font-bold text-slate-100 tracking-tighter text-base uppercase">CORE TECH LABS</span>
              <span className="text-[9px] text-brand-magenta font-mono tracking-widest uppercase block -mt-1 font-semibold">SOFTWARE EXPERIMENTS</span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8 text-[11px] font-mono tracking-[0.2em] uppercase text-slate-400">
            <button onClick={() => scrollToSection("products-section")} className="hover:text-brand-cyan transition-colors cursor-pointer">
              Products
            </button>
            <button onClick={() => scrollToSection("engine-section")} className="hover:text-brand-cyan transition-colors cursor-pointer">
              The Engine
            </button>
            <button onClick={() => scrollToSection("contact-section")} className="hover:text-brand-cyan transition-colors cursor-pointer">
              Contact
            </button>
          </div>

          {/* Action Callouts */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={copyEmailToClipboard}
              className="text-[10px] font-mono hover:text-slate-200 text-slate-400 border border-white/5 bg-brand-dark px-3 py-2 rounded transition-all flex items-center space-x-1.5"
            >
              <Mail className="w-3 h-3 text-brand-cyan" />
              <span>{copiedEmail ? "COPIED ✓" : "info@coretechlabs.app"}</span>
            </button>
            
            <a 
              href="https://github.com/GibGitGib"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden font-display font-bold tracking-widest text-[10px] text-brand-dark bg-gradient-to-r from-brand-cyan to-brand-magenta px-4 py-2.5 rounded transition-transform duration-200 active:scale-95 flex items-center space-x-1.5 hover:shadow-md hover:shadow-brand-cyan/15 uppercase"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-1.5 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <div className="mt-2 bg-brand-dark-surface border border-white/5 rounded-xl p-5 md:hidden space-y-4 backdrop-blur-lg">
            <div className="flex flex-col space-y-3 font-mono text-xs tracking-widest uppercase text-slate-400">
              <button onClick={() => scrollToSection("products-section")} className="text-left py-2 hover:text-slate-100 transition-colors border-b border-white/5">
                Products
              </button>
              <button onClick={() => scrollToSection("engine-section")} className="text-left py-2 hover:text-slate-100 transition-colors border-b border-white/5">
                The Engine
              </button>
              <button onClick={() => scrollToSection("contact-section")} className="text-left py-2 hover:text-slate-100 transition-colors">
                Contact
              </button>
            </div>
            
            <div className="pt-3 border-t border-white/5 flex flex-col gap-3">
              <div className="text-xs text-slate-500 font-mono text-center">
                info@coretechlabs.app
              </div>
              <a 
                href="https://github.com/GibGitGib"
                target="_blank"
                rel="noopener noreferrer" 
                className="w-full bg-gradient-to-r from-brand-cyan to-brand-magenta text-brand-dark font-display font-semibold text-xs py-3 rounded text-center cursor-pointer block"
              >
                GitHub →
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
        {/* Particle web canvas */}
        <NetworkCanvas />

        {/* Decorative circles */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full hidden lg:flex items-center justify-center opacity-45 lg:opacity-75 pointer-events-none select-none z-10">
          <div className="relative w-[480px] h-[480px]">
            <div className="absolute inset-0 border-[0.5px] border-brand-cyan/25 rounded-full scale-100"></div>
            <div className="absolute inset-6 border border-brand-purple/20 rounded-full scale-90"></div>
            <div className="absolute inset-14 border-2 border-brand-magenta/25 rounded-full scale-75"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-gradient-to-br from-brand-cyan via-brand-purple to-brand-magenta rounded-[60px] blur-[90px] opacity-35 animate-pulse"></div>
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.4)]">
                <div className="w-4 h-4 bg-black rounded-sm transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Copy */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-25 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 flex flex-col justify-center items-start text-left space-y-8">
            {/* Badge */}
            <div className="inline-block px-3 py-1 border border-brand-cyan/30 rounded-full text-[10px] uppercase tracking-widest text-brand-cyan">
              Labs for Software Experiments
            </div>

            {/* Primary Headline */}
            <h1 className="text-[52px] sm:text-[75px] md:text-[98px] leading-[0.9] font-bold tracking-tight text-slate-50 uppercase text-left">
              OPTIMIZATION<br />
              MEETS<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-magenta animate-glow">
                BEHAVIORAL HEALTH.
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-lg text-slate-400 text-sm sm:text-base md:text-lg font-light leading-relaxed font-sans text-left">
              CoreTech Labs is a solo-founder product studio. We build optimization engines and behavioral health tools — voice calculators, exposure therapy apps, restaurant waste reducers. No hype, just working software.
            </p>

            {/* Philosophy pull quote */}
            <div className="max-w-lg bg-brand-dark-surface/80 border border-white/5 p-4 rounded text-left backdrop-blur-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-cyan" />
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-slate-500 tracking-wider flex items-center space-x-1.5">
                  <Activity className="w-3.5 h-3.5 text-brand-magenta animate-pulse" />
                  <span>DISTRIBUTED R&D VELOCITY</span>
                </div>
                <p className="text-slate-300 font-display italic text-xs leading-relaxed">
                  "Ship presets into the wild. Let real usage feed improvements back to the core engine. Every product stress-tests a different algorithm. That's the flywheel."
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch justify-start gap-4 pt-4 w-full sm:w-auto">
              <button 
                onClick={() => scrollToSection("products-section")}
                className="px-10 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-[#00F0FF] transition-all cursor-pointer text-center"
              >
                See the Products
              </button>
              <button 
                onClick={() => scrollToSection("engine-section")}
                className="px-10 py-4 border border-white/20 font-bold uppercase text-xs tracking-widest hover:border-white transition-all cursor-pointer text-center text-slate-300"
              >
                How It Works
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block" />
        </div>

        {/* Ambient corner data — real, not fake */}
        <div className="absolute hidden xl:block left-10 bottom-10 font-mono text-[9px] text-slate-600 space-y-1 select-none pointer-events-none">
          <div>BUILT BY: Corey (@GibGitGib)</div>
          <div>DOMAIN: coretechlabs.app</div>
        </div>

        <div className="absolute hidden xl:block right-10 bottom-10 font-mono text-[9px] text-slate-500 tracking-wider uppercase select-none pointer-events-none">
          <div>Active projects: 4 public · N experiments</div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 md:px-8 space-y-24 pb-24 relative z-30">
        
        {/* PRODUCT SHOWCASE */}
        <section className="scroll-mt-28">
          <SimulatorCockpit />
        </section>

        {/* ENGINE SECTION */}
        <section className="scroll-mt-28">
          <TechPillars />
        </section>

        {/* CONTACT / NEWSLETTER */}
        <section className="scroll-mt-32">
          <LeadCapture />
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-brand-dark-surface py-16 px-6 relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-brand-cyan via-brand-purple to-brand-magenta p-[1px]">
                <div className="w-full h-full bg-brand-dark rounded-full flex items-center justify-center font-display font-bold text-xs text-brand-cyan">
                  •
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-slate-100 tracking-tighter text-base uppercase">CORE TECH LABS</span>
                <span className="text-[9px] text-brand-magenta font-mono tracking-widest uppercase block -mt-1 font-semibold">SOFTWARE EXPERIMENTS</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm font-light">
              A product studio building optimization engines and behavioral health tools. Solo founder, real products, no investors.
            </p>

            <div className="text-[10px] text-slate-600 font-mono">
              © {new Date().getFullYear()} CoreTech Labs. Built by Corey. All rights reserved.
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="font-mono text-[10px] font-semibold text-slate-400 tracking-[0.2em] uppercase">
              Explore
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-500 font-mono uppercase tracking-wider">
              <li>
                <button onClick={() => scrollToSection("products-section")} className="hover:text-brand-cyan text-left cursor-pointer transition-colors">
                  [ Products ]
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("engine-section")} className="hover:text-brand-cyan text-left cursor-pointer transition-colors">
                  [ The Engine ]
                </button>
              </li>
              <li>
                <a href="https://github.com/GibGitGib" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors inline-block">
                  [ GitHub ]
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact-section")} className="hover:text-brand-cyan text-left cursor-pointer transition-colors">
                  [ Contact ]
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="font-mono text-[10px] font-semibold text-slate-400 tracking-[0.2em] uppercase">
              Get in Touch
            </h5>
            
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Reach out for collaborations, consulting, or to discuss the optimizer engine. I read every message.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center space-x-3 text-xs">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a 
                  href="mailto:info@coretechlabs.app" 
                  className="font-mono text-brand-cyan hover:text-brand-magenta transition-colors font-medium underline underline-offset-4"
                >
                  info@coretechlabs.app
                </a>
              </div>
              <div className="flex items-start space-x-2.5 text-[10px] text-slate-500 leading-normal">
                <CornerDownRight className="w-3.5 h-3.5 text-slate-700 shrink-0 mt-0.5" />
                <span>
                  Solo founder. Replies may take 24–48 hours. No sales teams, no BDRs.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
