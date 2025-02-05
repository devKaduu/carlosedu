import { Experience } from "./experience";
import { Hero } from "./hero";
import { Marquee } from "./marquee";
import { MoreProjects } from "./more-projects";
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
      <MoreProjects />
      <div className="h-[900vh]" />
    </main>
  );
};
