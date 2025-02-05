"use client";

import * as motion from "motion/react-client";

import { useState } from "react";

interface TitleProps {
  firstText: string;
  secondText: string;
  image: string;
  src: string;
}

export const Title = ({ firstText, secondText, image, src }: TitleProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={src}
      className="flex flex-row items-center justify-center w-screen h-24 border-bottom-gradient text-center"
      onMouseMove={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className="uppercase text-8xl font-bold leading-normal not-italic max-2xl:text-7xl max-xl:text-4xl max-sm:text-2xl">
        {firstText}
      </p>
      <motion.img
        animate={{
          width: isHovered ? "10rem" : "0",
          opacity: isHovered ? 1 : 0,
          padding: isHovered ? "0rem 0.75rem" : "0rem",
        }}
        transition={{ ease: "backOut", duration: 0.5 }}
        src={image}
        className="overflow-hidden z-10 max-sm:hidden"
        alt="Projects"
      />
      <p className="uppercase text-8xl font-bold leading-normal not-italic max-2xl:text-7xl max-xl:text-4xl max-sm:text-2xl">
        {secondText}
      </p>
    </a>
  );
};
