import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Marquee } from "./marquee";
import { About } from "./about";
import { ScrollLetter } from "./scroll-letter";
import { MoreProjects } from "./more-projects";
import { Projects } from "./projects";
import { Footer } from "./footer";

export const HomeTemplate = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <MoreProjects />
      <ScrollLetter />
      <Footer />
    </main>
  );
};
