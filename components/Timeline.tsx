"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Flag, Search, CheckCircle, Cpu, Code, TrendingUp, Handshake, Award } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Kick off & Målbild",
    desc: "Vi definierar visionen. Vart ska vi? Syftet är att hitta en kristallklar målbild för startupen.",
    icon: <Flag className="w-6 h-6" />,
    img: "/roadmap_img/01_kickoff.png",
  },
  {
    id: 2,
    title: "Problem & Kund",
    desc: "Vem betalar? Är det 'nice to have' eller 'must have'? Vi kartlägger marknadspositionen.",
    icon: <Search className="w-6 h-6" />,
    img: "/roadmap_img/02_problem.png",
  },
  {
    id: 3,
    title: "Validering",
    desc: "Testa idén mot verkligheten. Vi jagar inte perfekta svar, vi fångar upp signaler och tweakar.",
    icon: <CheckCircle className="w-6 h-6" />,
    img: "/roadmap_img/03_validate.png",
  },
  {
    id: 4,
    title: "AI Studio: Grunderna",
    desc: "Nu bygger vi. Vilken AI-lösning stöttar bäst? Vi tar fram en teknisk roadmap.",
    icon: <Cpu className="w-6 h-6" />,
    img: "/roadmap_img/04_grunderna.png",
    highlight: true
  },
  {
    id: 5,
    title: "Bygga POC/MVP",
    desc: "Från snack till verkstad. Tidiga användartester. Produkten ska ut och kännas på.",
    icon: <Code className="w-6 h-6" />,
    img: "/roadmap_img/05_poc.png",
  },
  {
    id: 6,
    title: "Sälj & Entreprenör",
    desc: "Bygg teamet och trovärdigheten. Lär er ta betalt. Vi sätter säljpitch och prissättning.",
    icon: <TrendingUp className="w-6 h-6" />,
    img: "/roadmap_img/06_sell.png",
  },
  {
    id: 7,
    title: "Pilot & Avtal",
    desc: "Onboarda kunder. LOI:er och skarpa avtal. Nu skalar vi upp marknadsandelen.",
    icon: <Handshake className="w-6 h-6" />,
    img: "/roadmap_img/07_deal.png",
  },
  {
    id: 8,
    title: "Demo Day",
    desc: "Finalen. Investerare och intressenter. Skarpt läge med pitch och produktvisning.",
    icon: <Award className="w-6 h-6" />,
    img: "/roadmap_img/08_demoday.png",
  }
];

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20"
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      {/* Glowing Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>

        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-space)]">
            THE <span className="text-[#00ff9d]">ROADMAP</span>
          </h2>
          <p className="text-gray-400 text-xl">Från idé till impact på 8 steg.</p>
        </div>

        {/* Central Line Background */}
        <div className="absolute left-[20px] md:left-1/2 top-60 bottom-40 w-0.5 bg-gray-800 transform md:-translate-x-1/2"></div>

        {/* Animated Progress Line */}
        <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-[20px] md:left-1/2 top-60 bottom-40 w-0.5 bg-[#00ff9d] transform md:-translate-x-1/2 shadow-[0_0_15px_#00ff9d]"
        ></motion.div>

        {/* Timeline Items */}
        <div className="relative z-10 space-y-16 md:space-y-20">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* CARD CONTENT */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`
                        relative overflow-hidden rounded-2xl border bg-black/80 backdrop-blur-md p-1 group
                        ${step.highlight ? 'border-[#00ff9d]/50 shadow-[0_0_30px_rgba(0,255,157,0.1)]' : 'border-white/10 hover:border-white/20'}
                        transition-all duration-500
                    `}
                  >
                    {/* Image Area with "Cyberpunk" Filter Effect */}
                    <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4 bg-black">
                        {/* Overlay: Green Tint & Darken */}
                        <div className="absolute inset-0 bg-[#00ff9d]/10 mix-blend-overlay z-10 pointer-events-none group-hover:bg-transparent transition-all duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 opacity-90"></div>

                        <img
                            src={step.img}
                            alt={step.title}
                            className="h-full w-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out"
                        />

                        {/* Step Badge */}
                        <div className="absolute bottom-3 left-3 z-30 flex items-center gap-2">
                            <span className="text-[#00ff9d] bg-black/80 px-2 py-1 rounded text-xs font-mono border border-[#00ff9d]/30 shadow-lg backdrop-blur-md">
                                STEP 0{step.id}
                            </span>
                        </div>
                    </div>

                    <div className="p-4 pt-0 relative z-30">
                        <h3 className={`text-2xl font-bold mb-2 ${step.highlight ? 'text-[#00ff9d]' : 'text-white'} group-hover:text-[#00ff9d] transition-colors`}>
                            {step.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                            {step.desc}
                        </p>
                    </div>
                  </motion.div>

                </div>

                {/* Center Node (Icon) */}
                <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <motion.div
                        initial={{ scale: 1, backgroundColor: "#050505", borderColor: "#374151" }}
                        whileInView={{
                            scale: 1.3,
                            backgroundColor: "#000",
                            borderColor: step.highlight ? "#00ff9d" : "#fff",
                            boxShadow: step.highlight ? "0 0 20px #00ff9d" : "0 0 10px rgba(255,255,255,0.3)"
                        }}
                        viewport={{ margin: "-45% 0px -45% 0px" }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 rounded-full border-2 flex items-center justify-center z-10"
                    >
                        <div className={step.highlight ? 'text-[#00ff9d]' : 'text-gray-400'}>
                            {step.icon}
                        </div>
                    </motion.div>
                </div>

                {/* Empty Side */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
