"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  variant?: "fade" | "bounce";
}

const ScrollReveal = ({ children, className = "", delay = 0, direction = "up", variant = "fade" }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (variant === "bounce") {
            el.style.animationDelay = `${delay}ms`;
            el.classList.add("animate-stat-in");
          } else {
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("reveal-visible");
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, variant]);

  if (variant === "bounce") {
    return (
      <div ref={ref} className={`opacity-0 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={`reveal-hidden reveal-${direction} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
