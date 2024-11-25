"use client";
import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const wordsArray = words.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Устанавливаем, что текст виден
        }
      },
      { threshold: 0.5 } // 50% элемента должно быть видно
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none"
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2)
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-white opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none"
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      ref={containerRef} // Отслеживаем видимость этого контейнера
      className={cn("font-bold", className)}
    >
      <div className="mt-4">
        <div className="text-white leading-snug tracking-wide text-center px-4" style={{fontSize: "clamp(1rem, 4vw, 2rem)"}}>{renderWords()}</div>
      </div>
    </div>
  );
};
