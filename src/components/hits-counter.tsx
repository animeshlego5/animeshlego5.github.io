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
    const BASE =
      "https://api.counterapi.dev/v1/animeshlego5-github-io/pageviews";

    async function trackAndFetchHits() {
      const hasVisited = localStorage.getItem(VISITED_KEY);

      // Show the cached count immediately so there's always a number on screen,
      // then refresh it from the API below.
      const cachedCount = localStorage.getItem(STORAGE_KEY);
      if (cachedCount) {
        const parsed = parseInt(cachedCount, 10);
        if (!isNaN(parsed)) setHits(parsed);
      }

      try {
        // First-time visitors hit `/up` to increment; returning visitors read
        // the current total (bare endpoint) without inflating the count.
        const response = await fetch(hasVisited ? BASE : `${BASE}/up`);
        if (!response.ok)
          throw new Error(`Counter responded with ${response.status}`);

        const data = (await response.json()) as { count: number };
        const count = Number(data.count);

        if (!isNaN(count)) {
          setHits(count);
          localStorage.setItem(STORAGE_KEY, String(count));
          localStorage.setItem(VISITED_KEY, "true");
        }
      } catch (error) {
        // Network/API failure — keep whatever cached value we already showed.
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
