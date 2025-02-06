import { HomeTemplate } from "@/template/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "carlosedu",
  description: "Carlosedu",
};

export default function Home() {
  return <HomeTemplate />;
}
