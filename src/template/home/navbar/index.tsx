"use client";

import { useLenis } from "lenis/react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GoFile, GoHome } from "react-icons/go";

const tabs = [
  {
    name: <GoHome size={20} key={0} />,
    href: "#home",
  },
  {
    name: "Carreira",
    href: "#about",
  },
  {
    name: "Projetos",
    href: "#projects",
  },
  {
    name: "Conecte-se",
    href: "#footer",
  },
];

export const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoverStyle, setHoverStyle] = useState({});
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const lenis = useLenis();

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = tabRefs.current[hoveredIndex];
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement;
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [hoveredIndex]);

  return (
    <nav className="max-w-[68.188rem] mx-auto flex items-center justify-between w-full m-auto mt-11 max-xl:px-12 max-sm:px-5">
      <p className="text-2xl">carlosedu</p>

      <div
        className={`absolute h-8 transition-all duration-300 ease-out bg-[#ffffff1a] rounded-full`}
        style={{
          ...hoverStyle,
          opacity: hoveredIndex !== null ? 1 : 0,
        }}
      />

      <ul className="flex items-center justify-around gap-10 bg-navbar rounded-full px-4  pt-2 pb-2 max-md:hidden">
        {tabs.map((tab, index) => (
          <Link
            href={index === 0 ? "" : tab.href}
            key={index}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            onClick={() => {
              lenis?.scrollTo(tab.href, { offset: -80, duration: 2.5 });
            }}
            className={`px-4 py-2 rounded-button relative cursor-pointer`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {tab.name}
          </Link>
        ))}
      </ul>
      <div className="flex items-center relative">
        <button className="text-base bg-bgButtonNavbar py-3 px-5 rounded-button font-medium">
          <a href="https://www.linkedin.com/in/carlos-eduardo-sousa/">Entre em contato</a>
        </button>
        <button className="y-3 px-3 rounded-full">
          <a href="./documents/cv/cv-carlos-eduardo-fullstack.pdf" target="_blank">
            <GoFile size={22} />
          </a>

          <a
            className="absolute w-full top-12 max-sm:hidden"
            href="./documents/cv/cv-carlos-eduardo-fullstack.pdf"
            target="_blank"
          >
            <motion.p
              className="text-sm  italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
            >
              Baixar CV
            </motion.p>
            <svg viewBox="0 0 286 73" fill="none" className="absolute -left-0 -right-2 -top-5  bottom-0">
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                stroke="#403f42"
                strokeWidth="3"
              />
            </svg>
          </a>
        </button>
      </div>
    </nav>
  );
};
