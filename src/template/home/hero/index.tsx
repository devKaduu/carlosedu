"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import heroImage from "@/assets/eu.jpeg";

import {
  SiCss3,
  SiCypress,
  SiExpo,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiGreensock,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

export const Hero = () => {
  // ordem dos ícones no loop
  const icons = [
    { Icon: SiReact, label: "React Native" },
    { Icon: SiNextdotjs, label: "Next.js" },
    { Icon: SiVite, label: "Vite" },
    { Icon: SiExpo, label: "Expo" },
    { Icon: SiTypescript, label: "TypeScript" },
    { Icon: SiJavascript, label: "JavaScript" },
    { Icon: SiTailwindcss, label: "Tailwind" },
    { Icon: SiCss3, label: "CSS3" },
    { Icon: SiStyledcomponents, label: "Styled Components" },
    { Icon: SiGit, label: "Git" },
    { Icon: SiGithub, label: "GitHub" },
    { Icon: SiGreensock, label: "GSAP" },
    { Icon: SiReactquery, label: "TanStack Query" },
    { Icon: SiFramer, label: "Framer Motion" },
    { Icon: SiCypress, label: "Cypress" },
    { Icon: SiNodedotjs, label: "Node.js" },
    { Icon: SiPrisma, label: "Prisma" },
    { Icon: SiSupabase, label: "Supabase" },
    { Icon: SiVercel, label: "Vercel" },
    { Icon: SiFigma, label: "Figma" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length);
    }, 4000);
    return () => clearInterval(id);
  }, [icons.length]);

  const { Icon, label } = icons[index];

  return (
    <header className="flex flex-col items-center justify-center text-center" id="home">
      <div className="flex flex-col justify-center sm:flex-row sm:justify-between items-center w-full max-w-[1400px] mx-auto h-screen gap-6 sm:gap-4">
        <div className="w-full flex-col flex items-center sm:items-end sm:justify-end gap-2 sm:gap-0">
          <p className="uppercase text-3xl font-antonio font-normal sm:self-start">Carlos Eduardo</p>
          <p className="text-6xl sm:text-9xl font-sans font-extrabold">Creative</p>
        </div>

        <div className="w-full items-center justify-center">
          <div className="relative">
            <Image
              src={heroImage}
              alt="Foto do Carlos Eduardo"
              className="object-cover rounded-2xl w-[200px] h-[300px] mx-auto sm:w-[450px] sm:h-[550px]"
              priority
            />

            <div
              className="w-20 h-20 left-20 bottom-5  sm:w-32 sm:h-32 absolute sm:-bottom-10 sm:-left-10 rounded-full flex items-center justify-center shadow-xl bg-indigo-600 overflow-hidden"
              aria-label={label}
              title={label}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={label}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex items-center justify-center w-full h-full"
                >
                  <Icon className="text-white text-[40px] sm:text-[50px]" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-end sm:mt-20 gap-2 sm:gap-0">
          <h1 className="text-6xl sm:text-9xl font-sans font-extrabold">Developer</h1>
          <p className="text-center sm:text-right text-base sm:text-lg sm:mt-6">
            Front-End developer do Brasil 🇧🇷
            <br className="flex sm:hidden" /> Transformando <br className="hidden sm:flex" /> código em experiências
            digitais
          </p>
        </div>
      </div>
    </header>
  );
};
