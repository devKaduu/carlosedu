"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { CardImageCarrousel } from "@/components/CardImageCarrousel";
import { cards } from "./const";

import stars from "@/assets/stars.png";
import Image from "next/image";

export const MoreProjects = () => {
  const [viewport, setViewport] = useState(0);

  useEffect(() => {
    setViewport(window.innerWidth);
  }, []);

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0", viewport <= 550 ? "-81%" : "-66%"]);

  return (
    <section className=" max-xl:px-12 max-sm:px-5" ref={targetRef}>
      <div className="flex items-center gap-7">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.7 }}
          className="text-sectionTitle max-sm:text-3xl"
        >
          More Projects
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <Image src={stars} alt="Gradient Image" width={39} />
        </motion.div>
      </div>
      <div className="h-[500vh]">
        <div className="h-screen sticky top-0 z-10">
          <div className="w-full h-fit overflow-hidden relative flex items-start pt-44 justify-start">
            <motion.div className="flex w-max gap-[3vw] max-sm:gap-16" style={{ x }}>
              {cards.map(({ src, alt }, index) => (
                <div key={index}>
                  <CardImageCarrousel index={index} src={src} alt={alt} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
