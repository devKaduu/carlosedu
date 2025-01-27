import { Hero } from "./hero";
import { Marquee } from "./marquee";
import { Navbar } from "./navbar";

export const HomeTemplate = () => {
  return (
    <main className="max-w-[68.188rem]  m-auto">
      <Navbar />
      <Hero />
      <Marquee />
      <div className="h-dvh"></div>
    </main>
  );
};
