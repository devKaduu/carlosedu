"use client";

import { useLenis } from "lenis/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GoHome, GoPerson } from "react-icons/go";

const tabs = [<GoHome size={20} key={0} />, "About", "Projects", "Contact me"];

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
        className={`absolute h-8 transition-all duration-300 ease-out bg-[#ffffff1a] rounded-full  ${
          hoveredIndex === 0 ? "h-11" : "h-8"
        }`}
        style={{
          ...hoverStyle,
          opacity: hoveredIndex !== null ? 1 : 0,
        }}
      />

      <ul className="flex items-center justify-around gap-10 bg-navbar rounded-full px-4  pt-2 pb-2 max-md:hidden">
        {tabs.map((tab, index) => (
          <Link
            href="#about"
            key={index}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            onClick={() => {
              lenis?.scrollTo("#about", { offset: -80, duration: 2.5 });
            }}
            className={`px-4 py-2 rounded-button relative cursor-pointer`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {tab}
          </Link>
        ))}
      </ul>
      <div className="flex items-center">
        <button className="text-base bg-bgButtonNavbar py-3 px-5 rounded-button font-medium">
          <a href="https://www.instagram.com/kadu_sz/">Hire me</a>
        </button>
        <button className="y-3 px-3 rounded-full">
          <a href="https://www.instagram.com/kadu_sz/">
            <GoPerson size={22} />
          </a>
        </button>
      </div>
    </nav>
  );
};
