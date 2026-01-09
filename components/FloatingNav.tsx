"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Menu, X } from 'lucide-react';

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Vision", path: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Johan", path: "/about", icon: <User className="w-5 h-5" /> }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">

      {/* Expanded Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col gap-3"
          >
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}>
                  <motion.div
                    whileHover={{ scale: 1.05, x: -5 }}
                    className={`
                      flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md border shadow-2xl cursor-pointer
                      ${isActive
                        ? 'bg-[#00ff9d]/20 border-[#00ff9d] text-[#00ff9d]'
                        : 'bg-black/80 border-white/10 text-white hover:border-white/30'}
                    `}
                  >
                    <span className="text-sm font-bold font-[family-name:var(--font-space)] uppercase tracking-widest">
                      {item.name}
                    </span>
                    {item.icon}
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`
          w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border shadow-[0_0_30px_rgba(0,0,0,0.5)]
          transition-colors duration-300
          ${isOpen
            ? 'bg-white text-black border-white'
            : 'bg-black/80 text-white border-[#00ff9d]/50 hover:border-[#00ff9d] hover:shadow-[0_0_20px_#00ff9d]'}
        `}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Menu className="w-8 h-8" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
