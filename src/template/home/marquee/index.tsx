"use client";

import Image from "next/image";
import marqueeIcon from "@/assets/marquee.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import * as motion from "motion/react-client";

gsap.registerPlugin(useGSAP);

export const Marquee = () => {
  const marqueeItems = [
    "Animations",
    "React",
    "Typescript",
    "NextJS",
    "React Native",
    "Green Sock (GSAP)",
    "TailwindCSS",
    "NodeJs",
    "Git/Github",
    "Styled-Components",
  ];

  return (
    <section className="border-y-white border-y border-opacity-20 absolute left-0 right-0">
      <div className="flex gap-24 max-w-[1070px] mx-auto border gradient-marquee overflow-hidden items-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: `-100%` }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear", repeatDelay: 0, repeatType: "loop" }}
          className="w-max flex items-center gap-24 py-5"
        >
          {marqueeItems.map((item, index) => (
            <div key={index} className="flex items-center gap-24">
              <Image src={marqueeIcon} alt="marquee" width={20} height={20} />
              <p className="text-base whitespace-nowrap">{item}</p>
            </div>
          ))}
          {marqueeItems.map((item, index) => (
            <div key={index} className="flex items-center gap-24">
              <Image src={marqueeIcon} alt="marquee" width={20} height={20} />
              <p className="text-base whitespace-nowrap">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
