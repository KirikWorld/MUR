"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Content({ children }: { children: React.ReactNode }) {
  const locale = usePathname();

  const [opacity, setOpacity] = useState(0);
  const [timeoutRef, setTimeoutRef] = useState<ReturnType<typeof setTimeout> | null>(null);

  // Create a particle on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const particle = document.createElement("div");
      particle.className = "particle";

      const offsetX = (Math.random() - 0.5) * 30;
      const offsetY = (Math.random() - 0.5) * 30;

      particle.style.left = `${e.pageX + offsetX}px`;
      particle.style.top = `${e.pageY + offsetY}px`;

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1500);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setOpacity(0);
    const timeout = setTimeout(() => setOpacity(1), 1);
    setTimeoutRef(timeout);

    return () => {
      if (timeoutRef) clearTimeout(timeoutRef);
    };
  }, [locale]);

  return (
    <main className="w-full h-full" style={{ opacity, transition: opacity === 0 ? "none" : "opacity 300ms ease" }}>
      {children}
    </main>
  );
}
