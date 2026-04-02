"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

export default function PageTransition({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-background/80 backdrop-blur-sm pointer-events-none">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      )}
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300"}>
        {children}
      </div>
    </>
  );
}
