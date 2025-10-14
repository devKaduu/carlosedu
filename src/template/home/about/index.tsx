"use client";

import star from "@/assets/general-star.png";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { C } from "./const";

export const About = () => {
  const containerRef = useRef(null);

  // Progresso da seção
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Crescimento suave da linha (0 -> 1)
  const scaleY = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  // Matiz variando com o scroll (ex.: do azul/verde ao magenta/roxo)
  const hue = useTransform(scrollYProgress, [0, 1], [180, 260]); // ajuste esses valores como preferir

  // Gradiente da linha usando o hue dinâmico
  const lineGradient = useMotionTemplate`
    linear-gradient(
      to bottom,
      hsl(${hue} 100% 95%),
      hsl(${hue} 95% 80%),
      hsl(${hue} 85% 68%)
    )
  `;

  return (
    <section
      ref={containerRef}
      className="mt-52 max-xl:px-12 max-sm:px-5 max-w-[68.188rem] m-auto relative mb-52"
      id="about"
    >
      {/* Título */}
      <div className="flex items-center gap-7 mb-24 max-sm:mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sectionTitle"
        >
          Carreira
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Image src={star} alt="Ícone decorativo" />
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-[735px] ml-9 max-sm:ml-4">
        {/* Trilho fixo */}
        <div
          className="absolute left-[-14px] top-4 w-[2px] h-[calc(100%-1rem)]
          bg-white/10 rounded-full z-20 max-sm:hidden"
        />

        {/* Linha de progresso com gradiente que muda de cor */}
        <motion.div
          style={{
            scaleY,
            transformOrigin: "top",
            background: lineGradient,
          }}
          className="absolute left-[-14px] top-4 w-[2px]
          rounded-full h-[calc(100%-1rem)] z-30 will-change-transform
          shadow-[0_0_12px_rgba(255,255,255,0.12)]
          max-sm:hidden"
        />

        {/* Conteúdo da timeline */}
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
            {/* Data à esquerda */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center justify-center font-bold text-sm absolute left-[-84px] top-2 bg-transparent py-8 max-sm:static"
            >
              {date}
            </motion.div>

            {/* Bloco do item */}
            <div className="ml-24 max-sm:ml-0">
              {current && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-4 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12 text-sm relative"
                >
                  {/* Pulse duplo com a mesma matiz da linha */}
                  <motion.span
                    className="w-2 h-2 rounded-full bg-green-500"
                    animate={{ scale: [1, 0.95, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="w-2 h-2 rounded-full bg-green-500 blur-sm absolute left-3"
                    animate={{ opacity: [1, 0.5, 1], scale: [1, 0.95, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <span className="text-sm text-white tracking-wide">Atualmente</span>
                </motion.div>
              )}

              <Image src={img} alt="Ícone da etapa" className="mb-5 w-[48px]" />
              <p className="text-xl mb-7">{title}</p>
              <p className="text-lg opacity-70">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
