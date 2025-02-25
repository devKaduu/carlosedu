"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Contact() {
  const now = new Date();
  const horaBrasil12h = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", hour12: true });

  const textButton = "SUBMIT";
  const DURATION = 0.25;
  const STAGGER = 0.025;

  const placeholder = ["Your mini message", "Send me a message", "Talk to me please", "I'm here for you", "😭😭"];
  const [sampleInputIndex, setSampleInputIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSampleInputIndex((prev) => (prev + 1) % placeholder.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" ">
      <div className="flex items-center justify-center p-6">
        <div className="relative -z-10">
          <div className="w-16 h-16 border-t border-l border-gray-200 absolute left-0 top-0" />
          <div className="w-16 h-16 border-t border-r border-gray-200 absolute right-0 top-0" />
          <div className="w-16 h-16 border-b border-l border-gray-200 absolute left-0 bottom-0" />
          <div className="w-16 h-16 border-b border-r border-gray-200 absolute right-0 bottom-0" />
          <p className="text-center font-mono opacity-60">
            Located in Brasil, working globally. // 23.5505° S, 46.6333° W // {horaBrasil12h}
          </p>
          <h1 className="text-[20vw] font-bold -z-10 mix-blend-screen">CONTACT</h1>
        </div>
      </div>

      <form className="flex items-center justify-center flex-col gap-6 max-w-96 mx-auto -mt-24">
        <p className="font-mono">{"\u002F\u002F If you need us, just call"}</p>
        <input
          type="text"
          maxLength={256}
          placeholder="Your Name"
          name="name"
          className="py-4 px-3 bg-transparent border-b border-gray-400 w-full text-xl outline-none"
        />
        <div className="flex justify-center items-end  w-full gap-4">
          <input
            type="email"
            name="email"
            maxLength={256}
            placeholder="Your email address"
            className="py-4 px-3 bg-transparent border-b border-gray-400 w-full text-xl outline-none"
          />

          <button type="submit" className="relative">
            <div className="p-2">
              <div className="py-2 px-5 h-7 flex items-center justify-center bg-[#64e79e] flex-row">
                <div className="w-2 h-2 border-t border-l border-gray-200 absolute left-0 top-0" />
                <div className="w-2 h-2 border-t border-r border-gray-200 absolute right-0 top-0" />
                <div className="w-2 h-2 border-b border-l border-gray-200 absolute left-0 bottom-0" />
                <div className="w-2 h-2 border-b border-r border-black-200 absolute right-0 bottom-0" />
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
              </div>
            </div>
          </button>
        </div>
        <div className="relative w-full">
          <AnimatePresence initial={false}>
            <motion.span
              className="py-4 px-3 absolute text-gray-400 text-xl -z-10"
              aria-hidden
              key={sampleInputIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
            >
              {placeholder[sampleInputIndex]}
            </motion.span>
          </AnimatePresence>
          <textarea
            name="message"
            maxLength={180}
            rows={4}
            // placeholder="Your Mini message"
            className="py-4 px-3 w-full bg-transparent h-40 outline-none border-b border-gray-400 text-xl resize-none"
          />
        </div>
      </form>
    </section>
  );
}
