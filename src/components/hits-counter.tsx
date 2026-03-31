"use client";

import { EyeIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface HitsCounterProps {
  className?: string;
}

const STORAGE_KEY = "portfolio-visit-count";
const VISITED_KEY = "portfolio-has-visited";

export function HitsCounter({ className }: HitsCounterProps) {
  const [hits, setHits] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function trackAndFetchHits() {
      try {
        const hasVisited = localStorage.getItem(VISITED_KEY);

        if (hasVisited) {
          // Returning visitor — show cached count, don't hit the API
          const cachedCount = localStorage.getItem(STORAGE_KEY);
          if (cachedCount) {
            setHits(parseInt(cachedCount, 10));
          }
          return;
        }

        // First-time visitor — fetch from API (this increments the count)
        const counterUrl =
          "https://hits.dwyl.com/animeshlego5/animeshlego5.github.io.json";
        const proxyUrl = `https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(counterUrl)}`;

        const response = await fetch(proxyUrl);
        if (!response.ok)
          throw new Error(`Proxy responded with ${response.status}`);

        const data = (await response.json()) as { message: string };
        const count = parseInt(data.message.replace(/,/g, ""), 10);

        if (!isNaN(count)) {
          setHits(count);
          // Cache the count and mark as visited
          localStorage.setItem(STORAGE_KEY, String(count));
          localStorage.setItem(VISITED_KEY, "true");
        }
      } catch (error) {
        console.error("[HitsCounter] Error:", error);
      } finally {
        setIsLoading(false);
      }
    }

    trackAndFetchHits();
  }, []);

  if (isLoading && hits === null) {
    return (
      <div
        className={cn(
          "flex items-center gap-1.5 text-xs text-muted-foreground/50",
          className
        )}
      >
        <EyeIcon className="size-3" />
        <span className="font-mono">...</span>
      </div>
    );
  }

  if (hits === null) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 font-mono text-xs text-muted-foreground",
        className
      )}
    >
      <EyeIcon className="size-3" />
      <AnimatePresence mode="wait">
        <motion.span
          key={hits}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {hits.toLocaleString()} views
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
