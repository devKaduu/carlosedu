"use client";

import star from "@/assets/general-star.png";
import { CardImageCarrousel } from "@/components/CardImageCarrousel";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cards } from "./const";

export const MoreProjects = () => {
  const [viewport, setViewport] = useState(0);
  const targetRef = useRef(null);

  useEffect(() => {
    setViewport(window.innerWidth);
  }, []);

  // Scroll animation only for desktop
  const { scrollYProgress } = useScroll({
    target: viewport > 550 ? targetRef : undefined,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-72%"]);

  const MotionWrapper = viewport > 550 ? motion.div : "div"; // disables motion on mobile
  const MotionText = viewport > 550 ? motion.p : "p";

  return (
    <section ref={targetRef} className="max-xl:px-12 max-sm:px-5">
      <div className="flex items-center gap-7 max-w-[68.188rem] m-auto relative">
        <MotionText
          {...(viewport > 550 && {
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.4 },
            viewport: { once: true, amount: 0.7 },
          })}
          className="text-sectionTitle max-sm:text-3xl"
        >
          Explorando Ideias
        </MotionText>

        <div className="flex items-center justify-between flex-1 text-sm">
          <Image src={star} alt="Gradient Image" width={39} />
          <span className="text-sm opacity-20 italic max-sm:text-right max-sm:text-xs text-center hidden sm:block">
            Clique em um projeto para acessar o repositório. <br />
            Esta seção é navegada com <b>scroll horizontal</b>.
          </span>
        </div>
      </div>

      <div className="h-[550vh] max-sm:h-auto max-sm:ml-4">
        <div className="h-dvh sticky top-0 z-10 max-sm:h-fit max-sm:static">
          <div className="w-full h-fit overflow-hidden relative flex items-start pt-44 justify-start max-sm:pt-24">
            <MotionWrapper
              className="flex w-max gap-[3vw] max-sm:gap-16 max-sm:flex-col"
              style={viewport > 550 ? { x } : {}}
            >
              {cards.map(({ src, alt, href, technologies }, index) => (
                <div key={index}>
                  <CardImageCarrousel index={index} src={src} alt={alt} href={href} technologies={technologies} />
                </div>
              ))}
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
