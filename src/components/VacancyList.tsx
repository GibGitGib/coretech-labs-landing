import React, { useState } from "react";
import { Briefcase, MapPin, ChevronDown, Sparkles, Send } from "lucide-react";
import { CareerOpening } from "../types";

export default function VacancyList() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const roles: CareerOpening[] = [
    {
      id: "role-1",
      title: "Substrate Protocol Architect",
      team: "Protocol Engineering",
      location: "San Francisco / Hybrid",
      equity: "1.2% - 2.5% Founder Track",
      description: "You will spearhead our kernel memory consolidation layer. Experience with bare-metal instruction layouts, custom scheduler paradigms, and zero-latency state machines is mandatory. Rust/C++ expertise is a given; we expect the capability to optimize cycles at the CPU level."
    },
    {
      id: "role-2",
      title: "High-Frequency Routing Engineer",
      team: "Systems & Delivery",
      location: "Remote (Global Client Mesh Focus)",
      equity: "0.8% - 1.5% Scale Track",
      description: "You will build our geographic backpressure pre-routing model. Expected to optimize and test network layers that bypass traditional OSI bottlenecks, using low-overhead fiber switching protocols. This is a highly challenging role directly impacting our sub-millisecond edge metrics."
    },
    {
      id: "role-3",
      title: "Lead Cryptography Enclave Researcher",
      team: "ZK Proof Labs",
      location: "Zurich / Hybrid",
      equity: "1.0% - 1.8% Founder Track",
      description: "Spearhead our zero-knowledge enclave proving strategy. Work directly on optimizing recursive PlonK setups, hardware accelerated GPU proof shaders, and low-latency state proofs to make zero-knowledge translation practically instant."
    }
  ];

  const handleApply = (roleTitle: string) => {
    alert(`Institutional inquiry pipeline initiated. Please transmit your credential bundle (Git repo / CV / structural specs) directly to info@coretechlabs.app specifying the role: "${roleTitle}".`);
  };

  return (
    <div id="careers-section" className="space-y-8 py-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-purple/5 border border-brand-purple/20 text-brand-purple text-xs font-mono tracking-widest uppercase">
            WE ARE HIRING ELITE SPECIALISTS
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-slate-100">
            Build the bedrock of <span className="text-gradient-purple-cyan">what comes next.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl">
            We are not building another SaaS workflow application. We operate below the application level entirely. Core Tech Labs is hiring high-conviction systems engineers to scale the substrate standard globally.
          </p>
        </div>
        
        <div className="bg-brand-dark px-4 py-3 rounded-lg border border-slate-900 text-xs font-mono text-slate-500 flex items-center space-x-2 shrink-0">
          <Sparkles className="w-4 h-4 text-brand-purple" />
          <span>Talent pool bounded by execution depth</span>
        </div>
      </div>

      {/* Accordion Role List */}
      <div className="space-y-3">
        {roles.map((role) => {
          const isExpanded = expandedId === role.id;
          return (
            <div
              key={role.id}
              className={`border rounded-xl transition-all duration-300 relative overflow-hidden ${
                isExpanded
                  ? "bg-brand-dark-surface border-brand-purple/30 shadow-md shadow-brand-purple/5"
                  : "bg-brand-dark-card/30 border-slate-900 hover:border-slate-800 hover:bg-brand-dark-card/50"
              }`}
            >
              {/* Expandable Header with mouseovers */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : role.id)}
                id={`role-toggle-${role.id}`}
                className="w-full text-left p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
              >
                <div className="space-y-1.5">
                  <h4 className="font-display text-lg font-semibold text-slate-200">
                    {role.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono">
                    <span className="flex items-center space-x-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{role.team}</span>
                    </span>
                    <span className="text-slate-700">•</span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{role.location}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 self-end md:self-center">
                  <div className="text-right font-mono text-xs">
                    <div className="text-slate-500">PROPOSED STAKE</div>
                    <div className="text-brand-purple font-medium">{role.equity}</div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isExpanded ? "rotate-180 text-brand-purple" : ""}`} />
                </div>
              </button>

              {/* Expandable Content Area */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isExpanded ? "max-h-96 border-t border-slate-900" : "max-h-0"
                }`}
              >
                <div className="p-5 space-y-4">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {role.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-900">
                    <span className="text-[10px] text-slate-500 font-mono">
                      CONTACT: info@coretechlabs.app • SUBSTRATE-WAVE-02
                    </span>
                    <button
                      onClick={() => handleApply(role.title)}
                      className="px-4 py-2 bg-brand-purple hover:bg-brand-purple/90 text-white font-mono text-xs rounded hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
                    >
                      <span>Transmit Credentials</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
