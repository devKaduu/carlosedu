import { Hero } from "./hero";
import { Navbar } from "./navbar";

export const HomeTemplate = () => {
  return (
    <main className="max-w-[1091px] m-auto px-4 md:px-0">
      <Navbar />
      <Hero />
    </main>
  );
};
