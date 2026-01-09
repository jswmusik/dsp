import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Timeline from "@/components/Timeline";
import Partners from "@/components/Partners";
import Marketing from "@/components/Marketing";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Vision />
      <Timeline />
      <Partners />
      <Marketing />

      {/* Enkel Footer */}
      <footer className="py-10 border-t border-white/10 text-center text-gray-600 text-sm">
        <p>Created for Dalarna Science Park Interview</p>
        <p className="mt-2 text-xs">Built with Next.js, Tailwind & AI</p>
      </footer>
    </main>
  );
}
