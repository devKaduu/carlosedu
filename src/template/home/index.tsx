import { Experience } from "./experience";
import { Hero } from "./hero";
import { Marquee } from "./marquee";
import { Navbar } from "./navbar";

export const HomeTemplate = () => {
  return (
    <main className="max-w-[68.188rem]  m-auto">
      <Navbar />
      <Hero />
      <Marquee />
      <Experience />
      <div className="h-dvh"></div>
    </main>
  );
};
