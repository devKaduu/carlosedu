import { Hero } from "./hero";
import { Navbar } from "./navbar";

export const HomeTemplate = () => {
  return (
    <main className="max-w-[68.188rem]  m-auto">
      <Navbar />
      <Hero />
    </main>
  );
};
