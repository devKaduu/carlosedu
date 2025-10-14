import imageHero from "@/assets/hero/hero.png";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center text-center" id="home">
      <div className="relative w-full h-[568px] mt-14 2xl:mt-48 max-sm:mt-20">
        <h1 className="text-title max-sm:text-2xl mb-3 mt-24 max-xl:mt-28 max-lg:mt-30">
          Crio experiências digitais do design ao código.
        </h1>
        <Image
          src={imageHero}
          alt="hero"
          priority
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] -z-10 object-cover max-xl:h-[568px]"
        />
        <p className="text-base text-center mb-6">
          Desenvolvo interfaces modernas com React.js, TypeScript e Next.js, <br /> unindo estética, performance e
          propósito.
        </p>
        <div className="flex justify-center items-center gap-3">
          <a href="https://www.linkedin.com/in/carlos-eduardo-sousa/" target="_blank">
            <BsLinkedin size={24} className="hover:opacity-60 transition-opacity" />
          </a>
          <a href="https://github.com/devKaduu" target="_blank">
            <BsGithub size={24} className="hover:opacity-60 transition-opacity" />
          </a>
        </div>
      </div>
    </header>
  );
};
