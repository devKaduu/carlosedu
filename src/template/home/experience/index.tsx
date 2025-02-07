"use client";

import Image from "next/image";

import stars from "@/assets/stars.png";

import * as motion from "motion/react-client";
import { Aboutbottom, Aboutleft, Aboutright, AboutTop } from "@/assets/about";

export const Experience = () => {
  const about = [
    {
      title: "IT Trainee - FIAP",
      text: "Monitoring classes, controlling access passwords, distributing and controlling files on the network, controlling remote access, supporting students and organizing classrooms and computer labs.",
      img: AboutTop,
    },
    {
      title: "FreeLancer - C&A Count",
      text: "Mobile screen prototyping with an emphasis on UX and UI for a project to facilitate financial calculations at C&A stores.",
      img: Aboutright,
    },
    {
      title: "Web Developer Trainee - FIAP",
      text: "Creation and maintenance of web applications using HTML, CSS, JavaScript and PHP (Twig) on the web development side along with changes to Wordpress. Creation of ADS banners for advertisements using GSAP (GreenSock) for animations. Email marketing development using MJML and React technologies",
      img: Aboutbottom,
    },
    {
      title: "Programmer - FIAP",
      text: "Focused on web application development using ReactJS and Typescript. Web animations using GreenSock, Email Marketing with MJML and React, ADS banner ads. Changes to Wordpress pages and maintenance and new features on the legacy site using Html, Css, Javascript.",
      img: Aboutleft,
    },
  ];

  return (
    <section className="mt-48 max-xl:px-12 max-sm:px-5 max-w-[68.188rem] m-auto">
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

      <div className="max-w-[735px] ml-14">
        {about.map(({ title, text, img }, index) => (
          <motion.div
            key={index}
            className="mb-20"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image src={img} alt="stars" width={36} className="mb-8" />
            <p className="text-xl mb-7">
              Step {index + 1}: {title}
            </p>
            <p className="text-lg opacity-80">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
