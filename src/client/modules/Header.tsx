"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsBlurred(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-16 flex items-center justify-center z-10 transition-all duration-300 ${
        isBlurred ? "backdrop-blur-md" : "backdrop-blur-none"
      }`}
    >
      <div id="logo-target" className="absolute z-10"></div>
    </header>
  );
}
