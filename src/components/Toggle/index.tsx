"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle({
  offsetX = 0,
  offsetY = 0,
  zIndex = 9999,
}: {
  offsetX?: number;
  offsetY?: number;
  zIndex?: number;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Carrega tema salvo
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Aplica e salva
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div
      className="fixed"
      style={{
        left: "50%",
        top: "50%",
        transform: `translate3d(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px), 0)`,
        zIndex,
      }}
    >
      <button
        type="button"
        role="switch"
        aria-checked={theme === "dark"}
        onClick={toggleTheme}
        aria-label="Alternar tema"
        className={[
          "relative h-6 w-12 rounded-full border transition-colors duration-300 bg-black/20",
          "backdrop-blur-md shadow-lg",
          theme === "dark" ? "bg-yellow-300/90 border-white/20" : "bg-zinc-800/80 border-white/10",
        ].join(" ")}
      >
        {/* trilha suave (sem ícones) */}
        <span
          className={[
            "absolute inset-0 rounded-full transition-opacity bg-black/20",
            "backdrop-blur-md",
            theme === "dark" ? "opacity-100" : "opacity-0 bg-transparent",
          ].join(" ")}
        />
        {/* bolinha */}
        <span
          className={[
            "absolute top-1 left-1 h-4 w-4 rounded-full bg-white",
            "shadow-[0_4px_10px_rgba(0,0,0,0.25)]",
            "transition-transform duration-300 ease-out",
            theme === "dark" ? "translate-x-6 bg-green-500" : "translate-x-0 ",
          ].join(" ")}
        />
      </button>
    </div>
  );
}
