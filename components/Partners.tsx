"use client";

// Exempel på partners (du kan byta namn här)
const innerOrbit = ["Almi", "Högskolan", "Regionen", "Investerare"];
const outerOrbit = ["OpenAI", "Google", "AWS", "Anthropic", "AI Sweden"];

export default function Partners() {
  return (
    <section className="py-32 bg-black relative overflow-hidden min-h-screen flex flex-col items-center justify-center">

      <div className="text-center mb-12 z-20 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space)]">
          THE <span className="text-blue-500">ECOSYSTEM</span>
        </h2>
        <p className="text-gray-400">Centrum för innovation. Kopplad till världen.</p>
      </div>

      {/* Solar System Container */}
      <div className="relative w-[800px] h-[800px] flex items-center justify-center scale-50 md:scale-100">

        {/* SUN: Dalarna Science Park */}
        <div className="absolute z-10 w-40 h-40 bg-gradient-to-br from-green-400 to-blue-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute z-10 w-32 h-32 bg-black border-2 border-green-500/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,255,157,0.3)]">
          <span className="text-center font-bold text-xs leading-tight">
            DALARNA<br/>SCIENCE<br/>PARK
          </span>
        </div>

        {/* ORBIT 1 (Inner) */}
        <div className="absolute border border-white/10 rounded-full w-[400px] h-[400px] animate-spin-slow">
           {innerOrbit.map((partner, i) => (
             <div
                key={i}
                className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 bg-gray-900 border border-white/20 rounded-full flex items-center justify-center text-[10px] font-bold hover:scale-125 hover:border-blue-400 hover:z-50 transition-all cursor-pointer group"
                style={{ transform: `rotate(${i * (360 / innerOrbit.length)}deg) translate(200px) rotate(-${i * (360 / innerOrbit.length)}deg)` }}
             >
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 hidden group-hover:block w-32 bg-gray-800 text-white text-xs p-2 rounded border border-gray-600 z-50 pointer-events-none">
                    Etablerad Partner
                </div>
                {partner.substring(0, 2)}
             </div>
           ))}
        </div>

        {/* ORBIT 2 (Outer - Giants) */}
        <div className="absolute border border-white/5 rounded-full w-[700px] h-[700px] animate-spin-reverse-slow">
            {outerOrbit.map((partner, i) => (
             <div
                key={i}
                className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8 bg-black border border-blue-500/30 rounded-full flex items-center justify-center text-[10px] font-bold shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:scale-125 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all cursor-pointer group"
                style={{ transform: `rotate(${i * (360 / outerOrbit.length)}deg) translate(350px) rotate(-${i * (360 / outerOrbit.length)}deg)` }}
             >
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 hidden group-hover:block w-40 bg-blue-900/90 text-white text-xs p-2 rounded border border-blue-500 z-50">
                    Målpartner: {partner}<br/>
                    <span className="text-gray-300 text-[9px]">Global skalbarhet</span>
                </div>
                {partner}
             </div>
           ))}
        </div>
      </div>

      <div className="absolute bottom-10 text-xs text-gray-500 uppercase tracking-widest">
        Dra musen över planeterna
      </div>
    </section>
  );
}
