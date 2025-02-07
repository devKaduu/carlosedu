import React from "react";
import Content from "./content";

export default function Footer() {
  return (
    <div className="relative h-[800px]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="relative h-[calc(100dvh+800px)] -top-[100dvh]">
        <div className="h-[800px] sticky top-[calc(100dvh-800px)] ">
          <Content />
        </div>
      </div>
    </div>
  );
}
