"use client";
import { motion } from 'framer-motion';
import { Zap, Rocket, Users } from 'lucide-react';

export default function Vision() {
  return (
    <section id="vision" className="py-24 bg-black relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space)]">
            VARFÖR AI? <span className="text-[#00ff9d]">VARFÖR NU?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Spelplanen har ritats om. Det är dags att spela.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Kort 1: Speed is Key (Med Progress Bar) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.0, duration: 0.6 }}
            whileHover={{ y: -10, boxShadow: "0 0 20px rgba(0, 255, 157, 0.1)" }}
            className="bg-white/5 backdrop-blur-md border border-white/5 p-8 rounded-2xl group hover:border-[#00ff9d]/50 transition-colors relative overflow-hidden"
          >
            <div className="mb-6 bg-white/5 w-fit p-4 rounded-xl group-hover:bg-white/10 transition-colors">
                <Zap className="w-12 h-12 text-[#00ff9d]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Speed is Key</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Förväntan på snabb leverans har ökat. Med AI integrerat kan våra startups bygga produkter på dagar, inte månader.
            </p>
            {/* Progress Bar Animation */}
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    className="h-full bg-[#00ff9d]"
                />
            </div>
          </motion.div>

          {/* Kort 2: Lättare än någonsin */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -10, boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)" }}
            className="bg-white/5 backdrop-blur-md border border-white/5 p-8 rounded-2xl group hover:border-blue-400/50 transition-colors"
          >
            <div className="mb-6 bg-white/5 w-fit p-4 rounded-xl group-hover:bg-white/10 transition-colors">
                <Rocket className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Lättare än någonsin</h3>
            <p className="text-gray-400 leading-relaxed">
              Idag krävs inget stort startkapital. Med rätt verktyg går vi från idé till POC direkt. Starttröskeln är borta.
            </p>
          </motion.div>

          {/* Kort 3: Mångfald & Risk */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ y: -10, boxShadow: "0 0 20px rgba(168, 85, 247, 0.1)" }}
            className="bg-white/5 backdrop-blur-md border border-white/5 p-8 rounded-2xl group hover:border-purple-400/50 transition-colors"
          >
            <div className="mb-6 bg-white/5 w-fit p-4 rounded-xl group-hover:bg-white/10 transition-colors">
                <Users className="w-12 h-12 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Mångfald & Risk</h3>
            <p className="text-gray-400 leading-relaxed">
              AI minskar risken. Det gör att personer som vanligtvis tvekar nu vågar ta steget. Vi demokratiserar entreprenörskapet.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
