"use client";

import Image from "next/image";
import star from "@/assets/general-star.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { C } from "./const";

export const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="mt-52 max-xl:px-12 max-sm:px-5 max-w-[68.188rem] m-auto relative mb-52"
      id="about"
    >
      <div className="flex items-center gap-7 mb-44 max-sm:mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sectionTitle"
        >
          About
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Image src={star} alt="Gradient Image" />
        </motion.div>
      </div>

      <div className="relative max-w-[735px] ml-9 max-sm:ml-4">
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-[-14px] top-4 w-[2px] bg-white z-30 max-sm:hidden"
        />
        {C.map(({ title, text, img, date, current }, index) => (
          <motion.div
            key={index}
            className="mb-20 relative flex items-start gap-6 max-sm:flex-col last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center justify-center font-bold text-sm absolute left-[-84px] top-2 bg-transparent italic py-8 max-sm:static "
            >
              {date}
            </motion.div>

            <div className="ml-24 max-sm:ml-0">
              {current && (
                <motion.div
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  className="inline-flex items-center gap-4 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12 text-sm"
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-green-500 relative opacity-20"
                    animate={{
                      scale: [1, 0.95, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full bg-green-500 blur-sm absolute"
                    animate={{
                      opacity: [1, 0.5, 1],
                      scale: [1, 0.95, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  <span className="text-sm text-white tracking-wide">Current</span>
                </motion.div>
              )}

              <Image src={img} alt="Step icon" className="mb-8 w-[48px]" />
              <p className="text-xl mb-7">{title}</p>
              <p className="text-lg opacity-70">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
