import { Content } from "./content";

export function Footer() {
  return (
    <footer
      className="relative h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      id="footer"
    >
      <div className="relative h-[calc(100dvh+800px)] -top-[100dvh]">
        <div className="h-[800px] sticky top-[calc(100dvh-800px)] ">
          <Content />
        </div>
      </div>
    </footer>
  );
}
