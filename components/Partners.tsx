"use client";
import { motion } from 'framer-motion';
import { ExternalLink, Handshake, Network } from 'lucide-react';

// Future/Target Partners (De vi vill connecta med)
const targets = [
  { name: "AI Sweden", type: "National Center", color: "text-yellow-400", border: "hover:border-yellow-400/50" },
  { name: "OpenAI", type: "LLM Pioneer", color: "text-green-400", border: "hover:border-green-400/50" },
  { name: "Anthropic", type: "Ethical AI", color: "text-purple-400", border: "hover:border-purple-400/50" },
  { name: "Google Gemini", type: "Multimodal AI", color: "text-blue-400", border: "hover:border-blue-400/50" },
];

// Current Ecosystem (De vi jobbar med idag - verifierade + dina förslag)
const currentPartners = [
  "Region Dalarna",
  "Europeiska Unionen",
  "Vinnova",
  "Almi",
  "Almi Invest",
  "Högskolan Dalarna",
  "NyföretagarCentrum",
  "Borlänge Kommun",
  "Falu Kommun",
  "Sparbanksstiftelsen",
];

export default function Partners() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden min-h-screen flex flex-col items-center">

      {/* Header */}
      <div className="text-center mb-20 z-20 relative px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-space)]">
          THE <span className="text-blue-500">ECOSYSTEM</span>
        </h2>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Från lokal förankring till global spets. Vi bygger broarna mellan Dalarna och världens ledande AI-aktörer.
        </p>
      </div>

      {/* SECTION 1: FUTURE ALLIANCES (Targets) */}
      <div className="container mx-auto px-6 mb-32 relative z-20">
        <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-widest uppercase">
                <Network className="w-3 h-3" /> Strategic Targets
            </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targets.map((target, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`
                        bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6
                        flex flex-col items-center text-center group cursor-pointer transition-all duration-300
                        ${target.border} hover:bg-white/5
                    `}
                >
                    <div className={`mb-4 p-3 rounded-full bg-white/5 group-hover:scale-110 transition-transform ${target.color}`}>
                        <ExternalLink className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{target.name}</h3>
                    <p className="text-sm text-gray-500 font-mono">{target.type}</p>

                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-400 flex items-center gap-1">
                        Connect <span className="text-white">→</span>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>

      {/* SECTION 2: ANIMATED ORBIT (Visual Centerpiece) */}
      <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex items-center justify-center scale-75 md:scale-100 mb-20 pointer-events-none">
        {/* SUN */}
        <div className="absolute z-10 w-40 h-40 bg-gradient-to-br from-green-400 to-blue-600 rounded-full blur-[60px] opacity-20 animate-pulse"></div>
        <div className="absolute z-10 w-32 h-32 bg-black border-2 border-green-500/50 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,255,157,0.2)]">
          <span className="text-center font-bold text-xs leading-tight text-white font-[family-name:var(--font-space)]">
            DALARNA<br/>SCIENCE<br/>PARK
          </span>
        </div>

        {/* ORBITS */}
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute border border-white/5 rounded-full w-[100%] h-[100%]"
        >
            <div className="absolute top-0 left-1/2 w-4 h-4 bg-blue-500 rounded-full blur-[2px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full blur-[2px] -translate-x-1/2 translate-y-1/2"></div>
        </motion.div>

        <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute border border-white/5 rounded-full w-[70%] h-[70%]"
        >
             <div className="absolute left-0 top-1/2 w-3 h-3 bg-green-500 rounded-full blur-[2px] -translate-x-1/2 -translate-y-1/2"></div>
        </motion.div>
      </div>

      {/* SECTION 3: CURRENT FOUNDATION (The Box) */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative gradient corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full"></div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Handshake className="w-6 h-6 text-green-400" />
                        Current Foundation
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">Starka partners som möjliggör vår tillväxt idag.</p>
                </div>
                <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-gray-400">
                    ESTABLISHED NETWORK
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {currentPartners.map((partner, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300 text-sm p-2 rounded hover:bg-white/5 transition-colors cursor-default">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
                        {partner}
                    </div>
                ))}
            </div>
        </div>
      </div>

    </section>
  );
}
