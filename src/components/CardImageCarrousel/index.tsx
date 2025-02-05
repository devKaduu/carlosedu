import { motion } from "motion/react";

interface CardImageCarrouselProps {
  src: string;
  alt: string;
  index: number;
}

export const CardImageCarrousel = ({ src, alt, index }: CardImageCarrouselProps) => {
  return (
    <motion.img
      src={src}
      className="max-w-[545px] max-sm:w-80 object-center h-full"
      alt={alt}
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={{ scale: 1.05 }}
    />
  );
};
