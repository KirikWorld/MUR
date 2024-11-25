"use client";

import localFont from "next/font/local";
import GlitchText from "./GlitchText";

interface Props {
  children: React.ReactNode;
  texts: { text: string; top: string; left: string }[];
}

const font = localFont({ src: "../../../app/fonts/AnotherDangerDemo.otf" });

export default function BGText({ children, texts }: Props) {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {texts.map(({ text, top, left }, index) => (
        <div key={index} className="absolute top-0 left-0 w-full h-full">
          <GlitchText
            font={font}
            className="absolute z-20"
            style={{
              rotate: `${Math.random() * 10 - 5}deg`,
              fontSize: "clamp(1rem, 4vw, 4rem)",
              top: top,
              left: left
            }}
            text={text}
          />
        </div>
      ))}
      <div className="w-full z-10">{children}</div>
    </div>
  );
}
