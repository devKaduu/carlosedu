import { motion } from "motion/react";

interface AnimationTextProps {
  textButton: string;
}

export function AnimationText({ textButton }: AnimationTextProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="text-xs text-black font-mono overflow-hidden whitespace-nowrap gap-3 relative flex-row"
    >
      <div>
        {textButton.split("").map((letter, index) => (
          <motion.span
            className="inline-block"
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            key={index}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {textButton.split("").map((letter, index) => (
          <motion.span
            className="inline-block"
            key={index}
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
