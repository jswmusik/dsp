import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import FloatingNav from "@/components/FloatingNav";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space' });

export const metadata: Metadata = {
  title: "Dalarna Science Park 2.0 | AI Era",
  description: "Presentation för rollen som chef för startup- och inkubatorn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>
        {children}
        <FloatingNav />
      </body>
    </html>
  );
}
