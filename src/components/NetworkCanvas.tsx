import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originX: number;
  originY: number;
  size: number;
  color: string;
}

export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseActive, setMouseActive] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 65;
    const connectionDistance = 120;
    const gravityForce = 40;

    const resizeCanvas = () => {
      const container = containerRef.current;
      if (!container || !canvas) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight || 700;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const w = canvas.width;
      const h = canvas.height;

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const isAccent = Math.random() > 0.75;
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          originX: x,
          originY: y,
          size: isAccent ? Math.random() * 2 + 1.5 : Math.random() * 1 + 0.5,
          color: isAccent ? "rgba(0, 242, 254, 0.85)" : "rgba(148, 163, 184, 0.35)",
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      // Draw subtle ambient grid background
      ctx.strokeStyle = "rgba(255, 255, 255, 0.012)";
      ctx.lineWidth = 1;
      const gridSpacing = 60;
      for (let x = 0; x < w; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Update and Draw Particles
      particles.forEach((p, idx) => {
        // Organic Brownian motion + simple float
        p.vx += (Math.random() - 0.5) * 0.02;
        p.vy += (Math.random() - 0.5) * 0.02;
        
        // Speed limits
        p.vx = Math.max(-0.6, Math.min(0.6, p.vx));
        p.vy = Math.max(-0.6, Math.min(0.6, p.vy));

        p.x += p.vx;
        p.y += p.vy;

        // Boundary bounce
        if (p.x < 0 || p.x > w) {
          p.vx *= -1;
          p.x = p.x < 0 ? 0 : w;
        }
        if (p.y < 0 || p.y > h) {
          p.vy *= -1;
          p.y = p.y < 0 ? 0 : h;
        }

        // Mouse gravity pull
        if (mouseActive) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 200) {
            const pull = (200 - distance) / 200; // closer target has stronger pull
            p.x += (dx / distance) * pull * 1.5;
            p.y += (dy / distance) * pull * 1.5;
          }
        }

        // Draw particle node
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw node aura if it's an accent node
        if (p.color.includes("0, 242, 254")) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = "rgba(0, 242, 254, 0.4)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(0, 242, 254, 0.15)";
          ctx.stroke();
          ctx.shadowBlur = 0; // reset
        }

        // Connect particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distx = p.x - p2.x;
          const disty = p.y - p2.y;
          const len = Math.sqrt(distx * distx + disty * disty);

          if (len < connectionDistance) {
            const opacity = (1 - len / connectionDistance) * 0.18;
            ctx.strokeStyle = p2.color.includes("0, 242, 254") || p.color.includes("0, 242, 254")
              ? `rgba(0, 242, 254, ${opacity * 1.5})`
              : `rgba(148, 163, 184, ${opacity})`;
            ctx.lineWidth = len < 50 ? 1.2 : 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [mouseActive]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    if (!mouseActive) setMouseActive(true);
  };

  const handleMouseLeave = () => {
    setMouseActive(false);
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="canvas-trigger-container"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-85 transition-opacity duration-1000"
        id="particle-network-canvas"
      />
      {/* Decorative gradient shadows overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-brand-dark/10 pointer-events-none" />
      <div className="absolute left-1/4 top-1/3 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-96 h-96 rounded-full bg-brand-purple/5 blur-[120px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />
    </div>
  );
}
