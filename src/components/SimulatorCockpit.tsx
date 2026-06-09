import React, { useState } from "react";
import { Mic, Heart, MessageCircle, UtensilsCrossed, ExternalLink, Calculator } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  tagline: string;
  icon: React.ReactNode;
  color: string;
  link: string;
  status: "live" | "building";
}

export default function SimulatorCockpit() {
  const [activeProduct, setActiveProduct] = useState<string>("voice-calc");

  const products: Product[] = [
    {
      id: "voice-calc",
      name: "Voice Calc",
      tagline: "Speak your math. Get instant answers.",
      description: "A voice-first calculator PWA. Speak calculations naturally — 'what's 15% of 87 plus 42' — and get spoken results back. Built for accessibility, speed, and hands-free use. Works offline. Features iOS lock-screen widget deep-link for instant access.",
      icon: <Mic className="w-5 h-5" />,
      color: "brand-cyan",
      link: "https://github.com/GibGitGib/voice-calc",
      status: "live"
    },
    {
      id: "fear-ladder",
      name: "Fear Ladder",
      tagline: "Face your fears, one step at a time.",
      description: "A guided tool for building and climbing a personalized fear hierarchy. Rate situations, work through graduated exposure, and track your progress over time. Evidence-based approach, privacy-first — all data stays on your device.",
      icon: <Heart className="w-5 h-5" />,
      color: "brand-purple",
      link: "https://github.com/GibGitGib/fear-ladder",
      status: "live"
    },
    {
      id: "so-spill",
      name: "So Spill",
      tagline: "A space to vent and reflect.",
      description: "A private companion for emotional processing. Speak freely, and the app provides reflective summaries and pattern recognition. Runs entirely on-device — nothing you share ever leaves your browser.",
      icon: <MessageCircle className="w-5 h-5" />,
      color: "brand-magenta",
      link: "https://sospill.org",
      status: "live"
    },
    {
      id: "menu-optimizer",
      name: "Menu Optimizer",
      tagline: "Less waste, more profit for restaurants.",
      description: "A tool that helps restaurants reduce food waste by analyzing inventory, menu pricing, and supplier costs. Input your numbers, see exactly where you're losing money, and get actionable recommendations. Built for busy restaurant owners.",
      icon: <UtensilsCrossed className="w-5 h-5" />,
      color: "brand-teal",
      link: "https://github.com/GibGitGib/menu-optimizer",
      status: "live"
    }
  ];

  const current = products.find(p => p.id === activeProduct) || products[0];

  const colorMap: Record<string, string> = {
    "brand-cyan": "border-brand-cyan/40 bg-brand-cyan/5 text-brand-cyan",
    "brand-purple": "border-brand-purple/40 bg-brand-purple/5 text-brand-purple",
    "brand-magenta": "border-brand-magenta/40 bg-brand-magenta/5 text-brand-magenta",
    "brand-teal": "border-brand-teal/40 bg-brand-teal/5 text-brand-teal",
  };

  const gradientMap: Record<string, string> = {
    "brand-cyan": "from-brand-cyan to-brand-teal",
    "brand-purple": "from-brand-purple to-brand-magenta",
    "brand-magenta": "from-brand-magenta to-brand-purple",
    "brand-teal": "from-brand-teal to-brand-cyan",
  };

  return (
    <div id="products-section" className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 bg-brand-dark-surface/60 border border-slate-800/80 rounded-2xl p-6 lg:p-8 backdrop-blur-md">
      {/* Background Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-brand-cyan/2 via-transparent to-brand-purple/2 pointer-events-none" />

      {/* LEFT: Product Selector */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-6 z-10">
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase">PRODUCT STUDIO</span>
          </div>

          <h3 className="font-display text-2xl lg:text-3xl font-semibold text-slate-100 tracking-tight leading-tight">
            What we build.
          </h3>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            Four public products. Each one solves a real problem. Each one is free to use and open source.
          </p>

          {/* Product Tabs */}
          <div className="mt-6 space-y-3">
            {products.map((product) => {
              const isActive = product.id === activeProduct;
              const colorClass = colorMap[product.color];
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(product.id)}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? `bg-brand-dark-card ${colorClass}`
                      : "bg-transparent border-slate-800/50 hover:border-slate-700/80 hover:bg-slate-900/20 text-slate-400"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={isActive ? "" : "text-slate-500"}>
                      {product.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold tracking-wide flex items-center gap-2">
                        {product.name}
                        {product.status === "live" && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-brand-teal/10 text-brand-teal font-mono uppercase">LIVE</span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">{product.tagline}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </button>
              );
            })}
          </div>
        </div>

        {/* All open source */}
        <div className="bg-brand-dark-card/30 border border-slate-900 rounded-xl p-4 flex items-start space-x-3">
          <Calculator className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
          <p className="text-xs text-slate-500 leading-relaxed">
            <span className="text-slate-300 font-medium">All products are open source.</span> Code lives on GitHub. Contributions, forks, and feedback welcome.
          </p>
        </div>
      </div>

      {/* RIGHT: Product Detail Panel */}
      <div className="lg:col-span-7 bg-brand-dark-surface/40 border border-slate-800/60 rounded-2xl p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden z-10">
        {/* Accent glow */}
        <div className={`absolute -right-16 -top-16 w-48 h-48 rounded-full bg-${current.color}/5 blur-[60px] pointer-events-none`} />
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className={`font-mono text-xs uppercase tracking-widest ${current.color === 'brand-cyan' ? 'text-brand-cyan' : current.color === 'brand-purple' ? 'text-brand-purple' : current.color === 'brand-magenta' ? 'text-brand-magenta' : 'text-brand-teal'}`}>
              {current.name}
            </span>
            <span className="bg-brand-dark px-2.5 py-1 rounded border border-slate-800 font-mono text-[10px] text-slate-400">
              {current.status === "live" ? "PRODUCTION" : "IN DEVELOPMENT"}
            </span>
          </div>

          <h3 className="font-display text-2xl lg:text-3xl font-bold text-slate-100 tracking-tight">
            {current.tagline}
          </h3>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            {current.description}
          </p>

          {/* Feature highlights */}
          <div className="py-4 px-5 bg-brand-dark/40 border border-slate-900 rounded-xl space-y-2">
            {current.id === "voice-calc" && (
              <>
                <div className="text-xs text-slate-400 flex items-center gap-2"><span className="text-brand-cyan">▸</span> Speech-to-text input via Web Speech API</div>
                <div className="text-xs text-slate-400 flex items-center gap-2"><span className="text-brand-cyan">▸</span> Natural language math parsing</div>
                <div className="text-xs text-slate-400 flex items-center gap-2"><span className="text-brand-cyan">▸</span> Text-to-speech output for hands-free use</div>
                <div className="text-xs text-slate-400 flex items-center gap-2"><span className="text-brand-cyan">▸</span> iOS lock-screen widget deep-link</div>
              </>
            )}
            {current.id === "fear-ladder" && (
              <>
                <div className="text-xs text-slate-400 flex items-center gap-2"><span className="text-brand-purple">▸</span> Personalized fear hierarchy builder</div>
                <div className="text-xs text-slate-400 flex items-center gap-2"><span className="text-brand-purple">▸</span> Progress tracking with history</div>
                <div className="text-xs text-slate-400 flex items-center gap-2"><span className="text-brand-purple">▸</span> Graduated exposure sessions</div>
                <div className="text-xs text-slate-400 flex items-center gap-2"><span className="text-brand-purple">▸</span> All data stored locally, never uploaded</div>
              </>
            )}
            {current.id === "so-spill" && (
              <>
                <div className="text-xs text-slate-400 flex items-center gap-2"><span className="text-brand-magenta">▸</span> On-device processing (no cloud dependency)</div>
                <div className="text-xs text-slate-400 flex items-center gap-2"><span className="text-brand-magenta">▸</span> Reflective summaries and pattern recognition</div>
                <div className="text-xs text-slate-400 flex items-center gap-2"><span className="text-brand-magenta">▸</span> Nothing you share ever leaves your browser</div>
                <div className="text-xs text-slate-400 flex items-center gap-2"><span className="text-brand-magenta">▸</span> Installable as an app on any device</div>
              </>
            )}
            {current.id === "menu-optimizer" && (
              <>
                <div className="text-xs text-slate-400 flex items-center gap-2"><span className="text-brand-teal">▸</span> Inventory analysis and waste calculation</div>
                <div className="text-xs text-slate-400 flex items-center gap-2"><span className="text-brand-teal">▸</span> Supplier cost comparison tools</div>
                <div className="text-xs text-slate-400 flex items-center gap-2"><span className="text-brand-teal">▸</span> Menu pricing recommendations</div>
                <div className="text-xs text-slate-400 flex items-center gap-2"><span className="text-brand-teal">▸</span> Built for busy restaurant owners</div>
              </>
            )}
          </div>
        </div>

        {/* Bottom action */}
        <div className="mt-8 pt-6 border-t border-slate-900">
          <a
            href={current.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center space-x-2 font-display font-medium text-xs tracking-wider uppercase py-3 px-5 rounded-lg transition-all bg-gradient-to-r ${gradientMap[current.color]} text-brand-dark hover:opacity-90 shadow-md hover:shadow-lg`}
          >
            <span>View on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
