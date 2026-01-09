"use client";
import { motion } from 'framer-motion';
import { Mic, Video, Code, Play } from 'lucide-react';

export default function Marketing() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00ff9d]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-24">
          <span className="inline-block py-1 px-3 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-mono mb-6 tracking-widest uppercase">
            Modern Distribution
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-space)]">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">MEDIA MACHINE</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Vi bygger inte bara bolag. Vi bygger en publik. Genom att dokumentera resan skapar vi attraktionskraft för investerare och talang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* CARD 1: VIBE CODING */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="col-span-1 md:col-span-2 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Code className="w-32 h-32" />
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                                <Code className="w-5 h-5 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Vibe Coding & Live Builds</h3>
                        </div>
                        <p className="text-gray-400 mb-8 text-lg">
                            Vi visar kraften i AI genom att bygga startups live. Från idé till fungerande app på under en timme. Inspirerat av Greg Isenberg.
                        </p>
                        <div className="flex gap-4">
                            <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                                <div className="text-2xl font-bold text-white mb-1">45m</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Time to MVP</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                                <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">No-Code / AI</div>
                            </div>
                        </div>
                    </div>

                    {/* Mockup Window */}
                    <div className="w-full md:w-1/2 bg-[#111] rounded-xl border border-white/10 overflow-hidden shadow-2xl relative">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="ml-4 text-xs text-gray-500 font-mono">cursor_ai_demo.tsx</div>
                        </div>
                        <div className="p-6 font-mono text-xs md:text-sm text-gray-300 space-y-2">
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">StartupIdea</span> = <span className="text-yellow-300">async</span> () <span className="text-purple-400">=&gt;</span> &#123;</p>
                            <p className="pl-4"><span className="text-gray-500">// Genererar fullstack app...</span></p>
                            <p className="pl-4"><span className="text-purple-400">await</span> ai.generateUI(<span className="text-green-300">&quot;SaaS Dashboard&quot;</span>);</p>
                            <p className="pl-4"><span className="text-purple-400">await</span> ai.connectDB(<span className="text-green-300">&quot;Supabase&quot;</span>);</p>
                            <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-blue-400">&lt;Launch /&gt;</span>;</p>
                            <p>&#125;</p>

                            <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded text-green-400">
                                &gt; Build Successful in 42s_
                                <span className="animate-pulse">|</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* CARD 2: PODCAST/STUDIO */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/30 transition-colors"
            >
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 mb-6">
                    <Mic className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Dalarna Tech Talks</h3>
                <p className="text-gray-400 mb-8">
                    En podcast där vi intervjuar våra startups, investerare och tech-profiler. Vi skapar content som utbildar och attraherar.
                </p>

                {/* Audio Visualizer Mockup */}
                <div className="flex items-center justify-center gap-1 h-24 mt-auto">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ height: [20, 60, 30, 80, 40, 20] }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "easeInOut",
                                delay: i * 0.1
                            }}
                            className="w-2 bg-purple-500 rounded-full opacity-60"
                        />
                    ))}
                </div>
            </motion.div>

            {/* CARD 3: REALITY / DOCUMENTARY */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-red-500/30 transition-colors"
            >
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30 mb-6">
                    <Video className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">The Journey</h3>
                <p className="text-gray-400 mb-8">
                    &quot;Build in public&quot;. Vi följer utvalda startups med filmteam. En återkommande serie som visar sanningen bakom att bygga bolag.
                </p>

                {/* Video Player Mockup */}
                <div className="relative w-full aspect-video bg-black rounded-lg border border-white/10 flex items-center justify-center group-hover:border-red-500/40 transition-colors">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800')] bg-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 z-10 cursor-pointer hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                    <div className="absolute bottom-4 left-4 z-10">
                        <div className="text-xs font-bold text-red-500 uppercase tracking-widest bg-black/80 px-2 py-1 rounded mb-1 w-fit">Rec</div>
                        <div className="text-white font-mono text-sm">EPISODE 01: THE PIVOT</div>
                    </div>
                </div>
            </motion.div>

        </div>

        {/* Channels / Footer of section */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="font-bold text-xl">YouTube Studio</span>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="font-bold text-xl">LinkedIn Lives</span>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="font-bold text-xl">Podcast Network</span>
            </div>
        </div>

      </div>
    </section>
  );
}
