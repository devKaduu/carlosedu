import { Experience } from "./experience";
import { Hero } from "./hero";
import { Marquee } from "./marquee";
import { Navbar } from "./navbar";
import { SomeProjects } from "./some-projects";

export const HomeTemplate = () => {
  return (
    <main className="max-w-[68.188rem]  m-auto">
      <Navbar />
      <Hero />
      <Marquee />
      <Experience />
      <SomeProjects />
      <div className="h-dvh"></div>
    </main>
  );
};
