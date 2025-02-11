import { motion } from "motion/react";
import { useState } from "react";

interface CardImageCarrouselProps {
  src: string;
  alt: string;
  index: number;
  href: string;
  technologies: string[];
}

export const CardImageCarrousel = ({ src, alt, index, href, technologies }: CardImageCarrouselProps) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="relative block overflow-hidden rounded-xl shadow-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Imagem do Projeto */}
      <motion.img
        src={src}
        className="max-w-[545px] max-sm:w-80"
        alt={alt}
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.35 }}
        whileHover={{ scale: 1.05 }}
      />

      {/* Overlay ao passar o mouse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white text-sm px-4"
      >
        <p className="text-2xl font-bold mb-2">Tech Stack</p>
        <ul className="flex gap-2 flex-wrap justify-center">
          {technologies.map((tech, i) => (
            <li key={i} className="bg-white/10 px-2 py-1 rounded text-base">
              {tech}
            </li>
          ))}
        </ul>
      </motion.div>
    </a>
  );
};
