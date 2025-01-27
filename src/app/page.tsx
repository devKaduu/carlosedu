import { HomeTemplate } from "@/template/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Homepage about my portfolio",
};

export default function Home() {
  return <HomeTemplate />;
}
