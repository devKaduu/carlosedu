"use client";

import ReactLenis, { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

interface LenisProps {
  children: ReactNode;
}

export function Lenis({ children }: LenisProps) {
  const lenisRef = useRef<LenisRef>(null);

  // Easing "exp-out" bem suave. Pode testar outros (abaixo tem variações).
  const easing = (t: number) => 1 - Math.pow(2, -10 * t);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);
  return (
    <ReactLenis
      root
      options={{
        autoRaf: false, // quem dirige o loop é o motion/react
        duration: 1.8, // ↑ deixa o smear mais longo (1.1–1.6 é bom)
        easing, // curva suave
        smoothWheel: true,
        // Ajuste fino de sensibilidade do scroll:
        // em trackpad muito "nervoso", diminua para 0.6–0.8
        wheelMultiplier: 0.75,
        // toque: pode aumentar um pouco para dar "peso" no mobile
        touchMultiplier: 1.1,
        syncTouch: true,
        gestureOrientation: "vertical",
      }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
