import { Hero } from "./hero";
import { Navbar } from "./navbar";

export const HomeTemplate = () => {
  return (
    <main className="max-w-[68.188rem] max-xl:max-w-[55rem] m-auto">
      <Navbar />
      <Hero />
    </main>
  );
};
