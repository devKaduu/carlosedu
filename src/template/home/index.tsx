import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Marquee } from "./marquee";
import { About } from "./about";
import { ScrollLetter } from "./scroll-letter";
import { WorkOn } from "./work-on";
import { MoreProjects } from "./more-projects";
import { Footer } from "./footer";

export const HomeTemplate = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <WorkOn />
      <MoreProjects />
      <ScrollLetter />
      <Footer />
    </main>
  );
};
