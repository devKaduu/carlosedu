import { HomeTemplate } from "@/template/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "carlosedu",
  description:
    "Portfolio of Carlos Eduardo, a fullstack developer specialized in React, React Native, NextJs, TypeScript, and interactive animations with GSAP and Framer Motion.",
};

export default function Home() {
  return <HomeTemplate />;
}
