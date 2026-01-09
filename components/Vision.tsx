"use client";
import { motion } from 'framer-motion';
import { Zap, Rocket, Users } from 'lucide-react';

const cards = [
  {
    icon: <Zap className="w-12 h-12 text-[#00ff9d]" />,
    title: "Speed is Key",
    text: "Förväntan på snabb leverans har ökat. Med AI integrerat kan våra startups bygga produkter på dagar, inte månader."
  },
  {
    icon: <Rocket className="w-12 h-12 text-blue-400" />,
    title: "Lättare än någonsin",
    text: "Idag krävs inget stort startkapital. Med rätt verktyg går vi från idé till POC direkt. Starttröskeln är borta."
  },
  {
    icon: <Users className="w-12 h-12 text-purple-400" />,
    title: "Mångfald & Risk",
    text: "AI minskar risken. Det gör att personer som vanligtvis tvekar nu vågar ta steget. Vi demokratiserar entreprenörskapet."
  }
];

export default function Vision() {
  return (
    <section id="vision" className="py-24 bg-black relative">
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
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, boxShadow: "0 0 20px rgba(0, 255, 157, 0.1)" }}
              className="bg-white/5 backdrop-blur-md border border-white/5 p-8 rounded-2xl group hover:border-[#00ff9d]/50 transition-colors"
            >
              <div className="mb-6 bg-white/5 w-fit p-4 rounded-xl group-hover:bg-white/10 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
