"use client";
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Partikel-effekten
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number, height: number;
    let particles: Particle[] = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Initial resize
    resize();
    window.addEventListener('resize', resize);

    // Mouse interaction
    const mouse = { x: 0, y: 0, radius: 150 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.dx = (Math.random() - 0.5) * 0.5;
        this.dy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
      }
      update() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0 || this.x > width) this.dx = -this.dx;
        if (this.y < 0 || this.y > height) this.dy = -this.dy;

        // Mouse interaction physics
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx*dx + dy*dy);

        if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = forceDirectionX * force * 3;
            const directionY = forceDirectionY * force * 3;
            this.x -= directionX;
            this.y -= directionY;
        }
      }
      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = '#00ff9d';
        ctx!.fill();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = (width * height) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);

      // Draw lines
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = dx * dx + dy * dy;

          if (distance < (width * height) / 50) { // Connection distance
            const opacityValue = 1 - (distance / 20000);
            if (opacityValue > 0) {
                ctx.strokeStyle = `rgba(0, 255, 157, ${opacityValue * 0.2})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
          }
        }
        particles[a].update();
        particles[a].draw();
      }
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#000000_100%)]"
      />

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-green-500/30 bg-green-500/10 text-[#00ff9d] text-sm font-mono mb-6 tracking-widest">
            DALARNA SCIENCE PARK
          </span>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight font-[family-name:var(--font-space)]">
            DALARNA <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00ff9d]">2.0</span><br />
            THE AI ERA
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
            Fönstret står öppet. Vi har verktygen. <br />
            Låt oss positionera Dalarna i frontlinjen.
          </p>

          <motion.a
            href="#vision"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-transparent border border-white/20 rounded-full hover:bg-white/5 hover:border-[#00ff9d] hover:text-[#00ff9d]"
          >
            <span>SE FÄRDPLANEN</span>
            <ArrowDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
