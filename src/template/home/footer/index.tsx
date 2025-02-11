import { Content } from "./content";

export function Footer() {
  return (
    <footer className="relative h-screen" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }} id="footer">
      <div className="relative h-[calc(100dvh+100vh)] -top-[100dvh]">
        <div className="h-dvh sticky top-[calc(100dvh-100vh)]">
          <Content />
        </div>
      </div>
    </footer>
  );
}
