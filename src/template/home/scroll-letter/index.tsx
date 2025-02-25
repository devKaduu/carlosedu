"use client";

import mephoto from "@/assets/scroll-letter/me.jpeg";
import Image from "next/image";
import { useRef } from "react";

import { StaticImageData } from "next/image";
import { MotionValue, useScroll, useTransform, motion } from "motion/react";

interface SlideProps {
  left: string;
  src: StaticImageData;
  progress: MotionValue<number>;
  direction: "left" | "right";
}

const Phrase = ({ src, phrase }: { src: StaticImageData; phrase: string }) => {
  return (
    <div className="px-5 flex gap-5 items-center ">
      <p className="text-[7.5vw] max-sm:text-[12vw]">{phrase}</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image src={src} alt="Image Park" className="h-44  object-cover" />
      </span>
    </div>
  );
};

const Slide = ({ left, src, progress, direction }: SlideProps) => {
  const directionPosition = direction == "left" ? -1 : 1;

  const translateX = useTransform(progress, [0, 1], [150 * directionPosition, -150 * directionPosition]);

  return (
    <motion.div style={{ x: translateX, left: left }} className="relative flex whitespace-nowrap">
      <Phrase src={src} phrase="FullStack Developer" />
      <Phrase src={src} phrase="Front End Developer" />
      <Phrase src={src} phrase="Software Engineer" />
    </motion.div>
  );
};

export const ScrollLetter = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  return (
    <section className="overflow-hidden relative w-full h-dvh max-sm:h-[50dvh]">
      <div ref={container} className="absolute top-28 left-0">
        <Slide src={mephoto} left={"-45%"} progress={scrollYProgress} direction="right" />
        <Slide src={mephoto} left={"-15%"} progress={scrollYProgress} direction="left" />
        <Slide src={mephoto} left={"0%"} progress={scrollYProgress} direction="right" />
      </div>
    </section>
  );
};
