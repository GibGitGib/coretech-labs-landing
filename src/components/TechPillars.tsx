import React, { useState } from "react";
import { GitBranch, Dna, Swords, Cpu, Workflow, Info } from "lucide-react";

interface Algorithm {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  realWorldUse: string;
}

export default function TechPillars() {
  const [selectedAlgo, setSelectedAlgo] = useState<string>("grid-search");

  const algorithms: Algorithm[] = [
    {
      id: "grid-search",
      name: "Grid Search",
      category: "EXHAUSTIVE OPTIMIZATION",
      tagline: "Brute-force optimal configurations across parameter spaces.",
      description: "Systematically explores every combination of parameters within defined bounds. For bounded problems — like matching inventory to menu items — it guarantees you'll find the global optimum. No guesswork, just computation.",
      icon: <GitBranch className="w-5 h-5" />,
      realWorldUse: "Menu Optimizer: matches available ingredients to possible menu items, minimizing waste"
    },
    {
      id: "genetic",
      name: "Genetic Algorithm",
      category: "EVOLUTIONARY SEARCH",
      tagline: "Evolve solutions through selection, crossover, and mutation.",
      description: "A population of candidate solutions competes. The fittest survive, combine traits (crossover), and occasionally mutate. Over generations, the population converges on near-optimal solutions — even in vast, non-convex spaces where grid search would choke.",
      icon: <Dna className="w-5 h-5" />,
      realWorldUse: "Menu Optimizer: evolves menu combinations across multiple constraints (cost, nutrition, popularity)"
    },
    {
      id: "pairwise",
      name: "Pairwise Tournament",
      category: "COMPARATIVE RANKING",
      tagline: "Head-to-head elimination to surface the strongest candidates.",
      description: "Pits options against each other in a bracket. Each round, the better option advances. Elo-style rating updates after each matchup. Efficient for problems where absolute scoring is noisy but relative comparisons are reliable.",
      icon: <Swords className="w-5 h-5" />,
      realWorldUse: "Menu Optimizer: ranks final menu alternatives when multiple objectives conflict"
    },
    {
      id: "meta",
      name: "Meta-Optimizer",
      category: "ALGORITHM ORCHESTRATION",
      tagline: "Choose the right algorithm for the right problem, automatically.",
      description: "Analyzes the problem structure — dimensionality, constraints, objective shape — and selects the best algorithm (or combination) for the job. It's the conductor: grid search for small bounded spaces, genetic for large non-convex, pairwise for ranking, and hybrid approaches when needed.",
      icon: <Cpu className="w-5 h-5" />,
      realWorldUse: "Every product: routes optimization tasks to the right algorithm based on problem characteristics"
    }
  ];

  const current = algorithms.find(a => a.id === selectedAlgo) || algorithms[0];

  return (
    <div id="engine-section" className="space-y-12 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block px-3 py-1 rounded-full bg-brand-cyan/5 border border-brand-cyan/20 text-brand-cyan text-xs font-mono tracking-widest uppercase">
          THE CORE ENGINE
        </div>
        <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight text-slate-100">
          Multi-algorithm <span className="text-gradient-cyan-teal">optimization.</span>
        </h2>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          One engine, four algorithms, unlimited presets. The same optimizer that powers restaurant menus today will power supply chains tomorrow. That's the bet.
        </p>
      </div>

      {/* Algorithm Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT: Algorithm Toggles */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            {algorithms.map((algo) => {
              const isActive = algo.id === selectedAlgo;
              return (
                <button
                  key={algo.id}
                  onClick={() => setSelectedAlgo(algo.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? "bg-brand-dark-surface border-brand-cyan/30 text-slate-100 shadow-md shadow-brand-cyan/5"
                      : "bg-brand-dark-card/20 border-slate-900 hover:border-slate-800 hover:bg-slate-900/30 text-slate-400"
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-cyan to-brand-teal" />
                  )}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-zinc-500 tracking-wider">
                      {algo.category}
                    </span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />}
                  </div>
                  <h4 className="font-display text-lg font-semibold mt-2 group-hover:text-slate-100 transition-colors">
                    {algo.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                    {algo.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Philosophy note */}
          <div className="bg-brand-dark-card/30 border border-slate-900 rounded-xl p-4 flex items-start space-x-3">
            <Info className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
            <p className="text-xs text-slate-500 leading-relaxed">
              <span className="text-slate-300 font-medium">Distributed R&D velocity.</span> Every product in the wild feeds performance data back to the engine. A restaurant using the Menu Optimizer is unknowingly stress-testing the grid search. A vent app user is validating local inference patterns. The flywheel compounds.
            </p>
          </div>
        </div>

        {/* RIGHT: Algorithm Detail */}
        <div className="lg:col-span-7 bg-brand-dark-surface/40 border border-slate-800/60 rounded-2xl p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-brand-cyan/2 blur-[40px] pointer-events-none" />
          
          <div className="space-y-6 z-10">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-brand-teal uppercase tracking-widest">{current.category}</span>
              <div className="flex items-center gap-2 text-slate-500 font-mono text-[10px]">
                {current.icon}
              </div>
            </div>

            <h3 className="font-display text-2xl lg:text-3xl font-bold text-slate-100 tracking-tight">
              {current.name}
            </h3>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              {current.description}
            </p>

            {/* Real-world application */}
            <div className="py-4 px-5 bg-brand-dark/40 border border-slate-900 rounded-xl space-y-3">
              <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                <Workflow className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Active Deployment</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {current.realWorldUse}
              </p>
            </div>
          </div>

          {/* Bottom: engine stats */}
          <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-900 z-10">
            <div>
              <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">ALGORITHMS</div>
              <div className="font-mono text-lg lg:text-xl font-bold text-slate-200 mt-1">
                <span className="text-gradient-cyan-teal">4</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">PRESETS</div>
              <div className="font-mono text-xs text-slate-300 mt-2 bg-slate-900/80 inline-block px-2 py-1 rounded border border-slate-800">
                EXPANDING
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
