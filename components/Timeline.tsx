"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Flag, Search, CheckCircle, Cpu, Code, TrendingUp, Handshake, Award } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Kick off & Målbild",
    desc: "Vi definierar visionen. Vart ska vi? Syftet är att hitta en kristallklar målbild.",
    icon: <Flag className="w-6 h-6" />,
    highlight: false
  },
  {
    id: 2,
    title: "Problem & Kund",
    desc: "Vem betalar? Är det 'nice to have' eller 'must have'? Vi kartlägger marknadspositionen.",
    icon: <Search className="w-6 h-6" />,
    highlight: false
  },
  {
    id: 3,
    title: "Validering",
    desc: "Testa idén mot verkligheten. Vi jagar inte perfekta svar, vi fångar upp signaler och tweakar.",
    icon: <CheckCircle className="w-6 h-6" />,
    highlight: false
  },
  {
    id: 4,
    title: "AI Studio: Grunderna",
    desc: "Nu bygger vi. Vilken AI-lösning stöttar bäst? Vi tar fram en roadmap för tekniken.",
    icon: <Cpu className="w-6 h-6" />,
    highlight: true
  },
  {
    id: 5,
    title: "Bygga POC/MVP",
    desc: "Från snack till verkstad. Tidiga användartester. Produkten ska ut och kännas på.",
    icon: <Code className="w-6 h-6" />,
    highlight: false
  },
  {
    id: 6,
    title: "Sälj & Entreprenör",
    desc: "Bygg teamet och trovärdigheten. Lär er ta betalt. Vi sätter säljpitch och prissättning.",
    icon: <TrendingUp className="w-6 h-6" />,
    highlight: false
  },
  {
    id: 7,
    title: "Pilot & Avtal",
    desc: "Onboarda kunder. LOI:er och skarpa avtal. Nu skalar vi upp marknadsandelen.",
    icon: <Handshake className="w-6 h-6" />,
    highlight: false
  },
  {
    id: 8,
    title: "Demo Day",
    desc: "Finalen. Investerare och intressenter. Skarpt läge med pitch och produktvisning.",
    icon: <Award className="w-6 h-6" />,
    highlight: false
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
      <div className="container mx-auto px-6 relative" ref={containerRef}>

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space)]">
            THE <span className="text-[#00ff9d]">ROADMAP</span>
          </h2>
          <p className="text-gray-400">Från idé till impact på 8 steg.</p>
        </div>

        {/* Central Line Background */}
        <div className="absolute left-[20px] md:left-1/2 top-40 bottom-40 w-0.5 bg-gray-800 transform md:-translate-x-1/2"></div>

        {/* Animated Progress Line */}
        <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-[20px] md:left-1/2 top-40 bottom-40 w-0.5 bg-[#00ff9d] transform md:-translate-x-1/2 shadow-[0_0_15px_#00ff9d]"
        ></motion.div>

        <div className="relative z-10 space-y-12 md:space-y-24">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring" }}
                className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Text Side */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                  <h3 className={`text-2xl font-bold mb-2 ${step.highlight ? 'text-[#00ff9d]' : 'text-white'}`}>
                    Steg {step.id}: {step.title}
                  </h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>

                {/* Center Node (Icon) */}
                <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center bg-black z-10
                        ${step.highlight ? 'border-[#00ff9d] shadow-[0_0_20px_#00ff9d] scale-110' : 'border-gray-700 bg-gray-900'}
                    `}>
                        <div className={step.highlight ? 'text-[#00ff9d]' : 'text-gray-400'}>
                            {step.icon}
                        </div>
                    </div>
                </div>

                {/* Empty Side (for balance) */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
