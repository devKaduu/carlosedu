"use client";

import React from "react";

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
    <div className="bg-[#101111] py-8 px-12 h-full w-full flex flex-col justify-between relative">
      <div className="flex shrink-0 gap-20 flex-wrap mt-40 max-2xl:mt-0 max-sm:mt-40">
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
          {links.map(({ name, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                const isExternal = href.startsWith("http");

                if (!isExternal) {
                  e.preventDefault();
                  lenis?.scrollTo(href, { offset: -80, duration: 2.5 });
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
            <a key={index} href={href} target="_blank" rel="noreferrer">
              {name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <a className="mb-2 uppercase text-[#ffffff80]" href="./documents/cv/cv-carlos-eduardo-sousa.pdf" download>
            Download CV
          </a>
        </div>
      </div>
      <div className="flex justify-between items-end z-10">
        <h1 className="text-[14vw] leading-[0.8] mt-10 max-xl:text-[13vw] max-sm:text-4xl">CARLOS EDU</h1>
        <p>©copyright</p>
      </div>
    </div>
  );
};
