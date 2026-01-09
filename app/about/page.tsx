"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Trophy, Code, Mic, TrendingUp, Star, ArrowRight, ExternalLink } from 'lucide-react';

// --- DATA: BILDER & MERITER ---
// Här kopplar vi dina uppladdade bilder till händelser
const mediaHighlights = [
  {
    id: 1,
    title: "Årets Studentföretagare",
    source: "Entreprenörskapsforum",
    year: "2016",
    img: "/arets_studentforetagare_02.jpg",
    desc: "Vinnare av den prestigefulla utmärkelsen och 5:e plats i den globala finalen."
  },
  {
    id: 2,
    title: "Breakit: Klarna-duo & Startup",
    source: "Breakit",
    year: "2017",
    img: "/breakit.jpg",
    desc: "Omtalad lansering av Applied Loyalty med tunga profiler från Klarna."
  },
  {
    id: 3,
    title: "Di Digital: Applied Group",
    source: "Dagens Industri",
    year: "2017",
    img: "/di.jpg",
    desc: "Strategin för att ge e-handlare lojala kunder genom ny teknik."
  },
  {
    id: 4,
    title: "Investering: Almi Invest",
    source: "Dagens Industri",
    year: "2017",
    img: "/investering_02.png",
    desc: "Säkrade 3 miljoner SEK i emission för att skala upp tekniken."
  },
  {
    id: 5,
    title: "Bra Gjort för Sundsvall",
    source: "Sundsvalls Tidning",
    year: "2016",
    img: "/bra_gjort.jpg",
    desc: "Prisad för insatser som sätter Sundsvall på kartan."
  },
  {
    id: 6,
    title: "Ehandel.se: Madlady",
    source: "Ehandel.se",
    year: "2019",
    img: "/madlady.jpg",
    desc: "Först ut med framtidens kundklubb - ett bevis på innovation."
  },
  {
    id: 7,
    title: "Pinguin Kundklubb",
    source: "Ehandel.se",
    year: "2018",
    img: "/ehandel.jpg",
    desc: "Simon Saneback går in i styrelsen. En milstolpe för bolaget."
  }
];

// --- DATA: TIMELINE ---
const experience = [
  {
    role: "Avdelningschef Kommunikation & Kundtjänst",
    company: "Kramfors Kommun",
    period: "2025 - Nu",
    desc: "Leder den strategiska kommunikationen och kontaktcentret. Ansvar för 13 medarbetare och kriskommunikation.",
    tags: ["Leadership", "Public Sector", "Crisis Comm"]
  },
  {
    role: "Kommunikationschef",
    company: "Svalövs Kommun",
    period: "2022 - 2025",
    desc: "Digitaliserade kommunen och utvecklade nya strategier. Ledde ett team på 8 personer.",
    tags: ["Strategy", "Change Management"]
  },
  {
    role: "Grundare & Marknadschef",
    company: "Ungdomsappen.se",
    period: "2019 - Nu",
    desc: "Byggde en app som används av 50.000 ungdomar i 40 kommuner. Ökade jämställdheten med 20%.",
    tags: ["SaaS", "App Dev", "Growth"]
  },
  {
    role: "Grundare & VD",
    company: "Snömoln i Norden AB",
    period: "2017 - 2019",
    desc: "Skapade plattform för att minska matsvinn. Vann Skapa-priset och The Sustainable Prize.",
    tags: ["Sustainability", "Tech", "Innovation"]
  },
  {
    role: "VD & Grundare",
    company: "Applied Loyalty AB",
    period: "2015 - 2017",
    desc: "Utvecklade mjukvara för kundlojalitet. Tog in 12 MSEK i kapital och fick internationell press.",
    tags: ["Venture Capital", "Exit", "Loyalty Tech"]
  },
  {
    role: "Grundare / Creative Director",
    company: "Genomtänkt Kommunikation",
    period: "2013 - 2015",
    desc: "Startade byrå under studietiden. Vann Årets Studentföretagare.",
    tags: ["Marketing", "Entrepreneurship"]
  }
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-green-500 selection:text-black overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="z-10 text-center max-w-4xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-sm font-mono text-green-400 mb-4 tracking-widest uppercase border border-green-500/30 inline-block px-3 py-1 rounded-full bg-green-500/5">
                    The Architect
                </h2>
                <h1 className="text-6xl md:text-9xl font-bold font-[family-name:var(--font-space)] mb-6 leading-tight">
                    JOHAN<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">WIKSTRÖM</span>
                </h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed"
            >
                Från <span className="text-white font-medium">Lärarutbildning</span> till <span className="text-white font-medium">Tech-exit</span>.
                Jag bygger broar mellan innovation och offentlig sektor.
            </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10"
        >
            <ArrowRight className="rotate-90 w-6 h-6 text-gray-500" />
        </motion.div>
      </section>

      {/* 2. STATS & IMPACT */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
                { label: "Founded Companies", value: "4", icon: <Briefcase className="w-5 h-5 mb-2 text-blue-400 mx-auto" /> },
                { label: "Capital Raised", value: "12M+", icon: <TrendingUp className="w-5 h-5 mb-2 text-green-400 mx-auto" /> },
                { label: "Users Reached", value: "50k+", icon: <Star className="w-5 h-5 mb-2 text-yellow-400 mx-auto" /> },
                { label: "Awards Won", value: "7", icon: <Trophy className="w-5 h-5 mb-2 text-purple-400 mx-auto" /> }
            ].map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6"
                >
                    {stat.icon}
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-[family-name:var(--font-space)]">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
                </motion.div>
            ))}
        </div>
      </section>

      {/* 3. THE TROPHY ROOM (MEDIA & BILDER) */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="mb-20 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 font-[family-name:var(--font-space)]">MEDIA & <span className="text-green-400">IMPACT</span></h2>
                <p className="text-gray-400">Milstolpar dokumenterade i press och media.</p>
            </div>

            {/* Masonry Grid Layout för bilder */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {mediaHighlights.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="break-inside-avoid relative group rounded-2xl overflow-hidden border border-white/10 bg-[#111]"
                    >
                        {/* Bild */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-10"></div>
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                            />

                            {/* Overlay Content */}
                            <div className="absolute bottom-0 left-0 p-6 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-green-400 text-xs font-mono border border-green-500/30 px-2 py-1 rounded bg-black/50 backdrop-blur-md">
                                        {item.source}
                                    </span>
                                    <span className="text-gray-400 text-xs font-mono">{item.year}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 h-0 group-hover:h-auto overflow-hidden">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 4. THE JOURNEY (Timeline) */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space)]">THE <span className="text-purple-500">JOURNEY</span></h2>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                {experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                    >
                        {/* Timeline Dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#050505] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:border-purple-500 group-hover:shadow-[0_0_20px_purple] transition-all duration-300 z-10">
                            <div className="w-3 h-3 bg-gray-400 rounded-full group-hover:bg-purple-400 transition-colors"></div>
                        </div>

                        {/* Content Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-purple-400 font-bold text-sm">{job.period}</span>
                                <span className="text-xs text-gray-500">{job.company}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{job.role}</h3>
                            <p className="text-gray-400 text-sm mb-4">{job.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {job.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-black/50 border border-white/10 text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. SKILLS & TECH */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Tech Stack */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <Code className="text-blue-400" /> Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {["React.js", "Next.js", "TypeScript", "Python", "PHP", "Tailwind CSS", "OpenAI API", "Framer Motion"].map(skill => (
                            <span key={skill} className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-sm hover:bg-blue-500/20 cursor-default transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Leadership & Strategy */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <Mic className="text-purple-400" /> Leadership & Strategy
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {["Strategic Comm", "Crisis Management", "Team Building", "Budgeting", "Public Speaking", "Innovation Mgmt", "Growth Hacking"].map(skill => (
                            <span key={skill} className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-sm hover:bg-purple-500/20 cursor-default transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* 6. FOOTER CTA */}
      <section className="py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent"></div>
          <div className="container mx-auto px-6 relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 font-[family-name:var(--font-space)]">
                  READY TO <span className="text-green-400">BUILD?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                  Jag kombinerar det bästa av två världar: Startupsnabbhet och kommunal stabilitet. Låt oss skapa framtiden för Dalarna Science Park.
              </p>
              <a href="mailto:johan.wikstrom@ungdomsappen.se" className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-green-400 transition-colors text-lg">
                  Kontakta Mig <ExternalLink className="ml-2 w-5 h-5" />
              </a>
          </div>
      </section>

    </main>
  );
}
