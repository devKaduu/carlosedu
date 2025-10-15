"use client";
import Eu from "@/assets/mini.png";
import { useLenis } from "lenis/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const tabs = [
  { name: "Carreira", href: "#about" },
  { name: "Projetos", href: "#projects" },
  { name: "Conecte-se", href: "#footer" },
];

export const Navbar = () => {
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const lenis = useLenis();

  return (
    <nav className="flex items-center justify-center w-full mx-auto mt-8 max-xl:px-12 max-sm:px-5 fixed top-0 z-40">
      <div className="absolute h-11 transition-all duration-300 ease-out bg-[#ffffff1a] rounded-full" />
      <Link
        href="/"
        className="relative cursor-pointer text-base bg-black/40 backdrop-blur-md px-4 pt-2 pb-2 rounded-l-full relati"
      >
        <Image
          src={Eu}
          alt="Eu"
          width={40}
          height={40}
          className="rounded-full w-[40px] h-[40px] object-cover object-center mr-0"
        />
      </Link>
      <ul className="flex items-center justify-around gap-2 bg-black/40 backdrop-blur-md px-4 pt-2 pb-2 max-md:hidden">
        {tabs.map((tab, index) => (
          <Link
            href={tab.href}
            key={index}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            onClick={(e) => {
              e.preventDefault();
              lenis?.scrollTo(tab.href, { offset: -150, duration: 2.5 });
            }}
            className="px-4 py-2 rounded-button relative cursor-pointer text-base"
          >
            {tab.name}
          </Link>
        ))}
      </ul>
      <div className="relative bg-black/40 backdrop-blur-md px-6 pt-4 pb-4 h-full rounded-r-full">
        <Link
          href="#footer"
          onClick={(e) => {
            e.preventDefault();
            lenis?.scrollTo("#footer", { offset: -80, duration: 2.5 });
          }}
          className="px-4 py-2 rounded-button text-black relative cursor-pointer text-base bg-[#ffffff]"
        >
          Contato
        </Link>
      </div>
    </nav>
  );
};
