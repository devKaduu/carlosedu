"use client";

import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

import FooterHover from "@/assets/footer/footer.jpeg";
import { useLenis } from "lenis/react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact me", href: "https://www.linkedin.com/in/carlos-eduardo-sousa/" },
];

const contact = [
  { name: "Linkedin", href: "https://www.linkedin.com/in/carlos-eduardo-sousa/" },
  { name: "Instagram", href: "https://www.instagram.com/kadu_sz/" },
  { name: "Github", href: "https://github.com/devKaduu" },
  { name: "Email", href: "mailto:kadufenix10@gmail.com" },
];

export const Content = () => {
  const lenis = useLenis();

  return (
    <div className="bg-[#101111] py-8 px-12 h-full w-full flex flex-col justify-between">
      <div className="flex shrink-0 gap-20 flex-wrap relative">
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
          {links.map(({ name, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              onClick={(e) => {
                const isExternal = href.startsWith("http");

                if (!isExternal) {
                  e.preventDefault();
                  lenis?.scrollTo(href, { offset: -150, duration: 2.5 });
                }
              }}
            >
              {name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 uppercase text-[#ffffff80]">Contact</h3>
          {contact.map(({ name, href }, index) => (
            <a key={index} href={href} target="_blank">
              {name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <a className="mb-2 uppercase text-[#ffffff80]" href="./documents/cv/cv-carlos-eduardo-sousa.pdf" download>
            Download CV
          </a>
        </div>
        <motion.div
          className="absolute -top-20 cursor-help -right-12 blur-[20px]"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={FooterHover} alt="Me" width={500} />
        </motion.div>
      </div>
      <div className="flex justify-between items-end">
        <h1 className="text-[14vw] leading-[0.8] mt-10">CARLOS EDU</h1>
        <p>©copyright</p>
      </div>
    </div>
  );
};
