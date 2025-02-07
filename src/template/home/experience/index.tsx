"use client";

import Image from "next/image";
import stars from "@/assets/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Fiap, Cea } from "@/assets/about";

export const Experience = () => {
  const about = [
    {
      title: "Programmer - FIAP",
      date: "Jan 2022 - Present",
      text: "Focused on web application development using ReactJS and Typescript. Web animations using GreenSock, Email Marketing with MJML and React, ADS banner ads. Changes to Wordpress pages and maintenance and new features on the legacy site using Html, Css, Javascript.",
      img: Fiap,
    },
    {
      title: "Web Developer Trainee - FIAP",
      date: "Ago 2021 - Jan 2022",
      text: "Creation and maintenance of web applications using HTML, CSS, JavaScript and PHP (Twig) on the web development side along with changes to Wordpress. Creation of ADS banners for advertisements using GSAP (GreenSock) for animations. Email marketing development using MJML and React technologies",
      img: Fiap,
    },
    {
      title: "FreeLancer - C&A Count",
      date: "Jun 2021 -Jun 2021",
      text: "Mobile screen prototyping with an emphasis on UX and UI for a project to facilitate financial calculations at C&A stores.",
      img: Cea,
    },
    {
      title: "IT Trainee - FIAP",
      date: "Jan 2020 - Ago 2021",
      text: "Monitoring classes, controlling access passwords, distributing and controlling files on the network, controlling remote access, supporting students and organizing classrooms and computer labs.",
      img: Fiap,
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="mt-48 max-xl:px-12 max-sm:px-5 max-w-[68.188rem] m-auto relative" id="about">
      <div className="flex items-center gap-7 mb-14">
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
          <Image src={stars} alt="Gradient Image" width={39} />
        </motion.div>
      </div>

      <div className="relative max-w-[735px] ml-9 max-sm:ml-4">
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-[0.813rem] top-4 w-[2px] bg-white z-30 max-sm:hidden"
        />
        {about.map(({ title, text, img, date }, index) => (
          <motion.div
            key={index}
            className="mb-20 relative flex items-start gap-6 max-sm:flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.3,
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
              <Image src={img} alt="Step icon" width={46} className="mb-8" />
              <p className="text-xl mb-7">{title}</p>
              <p className="text-lg opacity-80">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
