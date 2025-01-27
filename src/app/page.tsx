import { HomeTemplate } from "@/pages/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Homepage about my portfolio",
};

export default function Home() {
  return <HomeTemplate />;
}
