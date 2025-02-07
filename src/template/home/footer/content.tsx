import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

import FooterHover from "@/assets/footer.jpeg";

export default function Content() {
  return (
    <div className="bg-[#101111] py-8 px-12 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-[14vw] leading-[0.8] mt-10">CARLOS EDU</h1>
      <p>©copyright</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20 flex-wrap relative">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contact me</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Contact</h3>
        <p>Linkedin</p>
        <p>Instagram</p>
        <p>Github</p>
        <p>Email</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Download CV</h3>
      </div>
      <motion.div
        className="w-26 h-6 absolute -top-20 cursor-help -right-12 blur-[20px]"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.3 }}
        transition={{ duration: 0.2 }}
      >
        <Image src={FooterHover} alt="?" />
      </motion.div>
    </div>
  );
};
