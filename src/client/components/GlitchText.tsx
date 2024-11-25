"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./GlitchText.css";

interface Props {
  font: any;
  text: string;
  size?: number;
  isFlying?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export default function GlitchText({ font, size, text, isFlying, style, className }: Props) {
  const logoRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (isFlying) {
      const logo = logoRef.current;
      const target = document.getElementById("logo-target");

      if (logo && target) {
        // Получаем финальную позицию шапки
        const targetRect = target.getBoundingClientRect();
        const logoRect = logo.getBoundingClientRect();
        const dy = targetRect.top - logoRect.top;

        // Анимация полёта
        gsap.to(logo, {
          y: dy - logoRect.height / 2,
          scale: 0.5, // Уменьшение
          duration: 1.5,
          zIndex: 9999,
          position: "fixed",
          ease: "power3.inOut",
          onComplete: () => {
            // Закрепляем в шапке
            gsap.set(logo, {
              position: "fixed",
              top: `${targetRect.top}px`,
              // x: 0 - logoRect.width / 2,
              y: 0,
              scale: 0.5
            });
          }
        });
      }
    }
  }, [isFlying]);

  return (
    <p
      style={style}
      ref={logoRef}
      className={`${font.className} text-${
        size ? `${size}xl` : "sm"
      } text-primary glitch text-wrap leading-none ${className}`}
    >
      {/* <span aria-hidden="true">{text}</span> */}
      {text}
      {/* <span aria-hidden="true">{text}</span> */}
    </p>
  );
}
