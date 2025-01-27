import Image from "next/image";
import imageHero from "@/assets/hero.png";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="relative w-full h-[568px] mt-14">
        <h1 className="text-title max-sm:text-2xl mb-3 mt-28 max-xl:mt-32 max-lg:mt-30">
          I design and build clean websites
        </h1>
        <Image
          src={imageHero}
          alt="hero"
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] -z-10 object-cover max-xl:h-[568px]"
        />
        <p className="text-base text-center mb-6">
          Write anything here something about yourself to <br /> showcase what actually you doing or targeting etc.
        </p>
        <button className="text-base bg-bgButtonNavbar w-28 h-10 rounded-button font-medium">
          <a href="https://www.instagram.com/kadu_sz/">Hire me</a>
        </button>
      </div>
    </div>
  );
};
