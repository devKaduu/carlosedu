import { About } from "./about";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { MoreProjects } from "./more-projects";
import { Navbar } from "./navbar";
import { ScrollLetter } from "./scroll-letter";
import { WorkOn } from "./work-on";

export const HomeTemplate = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Marquee /> */}
      <About />
      <WorkOn />
      <MoreProjects />
      <ScrollLetter />
      <Footer />
    </main>
  );
};
