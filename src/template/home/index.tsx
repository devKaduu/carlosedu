import { Experience } from "./experience";
import Footer from "./footer";
import { FrontEnd } from "./letters";
import { Hero } from "./hero";
import { Marquee } from "./marquee";
import { MoreProjects } from "./more-projects";
import { Navbar } from "./navbar";
import { SomeProjects } from "./some-projects";

export const HomeTemplate = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Marquee />
      <Experience />
      <SomeProjects />
      <MoreProjects />
      <FrontEnd />
      <Footer />
      {/* <div className="h-[900vh]" /> */}
    </main>
  );
};
