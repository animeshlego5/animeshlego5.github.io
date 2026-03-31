"use client";

import { EyeIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface HitsCounterProps {
  className?: string;
}

interface CounterResponse {
  id: string;
  namespace: string;
  key: string;
  count: number;
}

export function HitsCounter({ className }: HitsCounterProps) {
  const [hits, setHits] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function trackAndFetchHits() {
      try {
        const NAMESPACE = "animeshlego5-portfolio";
        const KEY = "visits";
        const STORAGE_KEY = `visited-${NAMESPACE}`;

        // Check if user has already been counted in this browser
        const hasVisited = localStorage.getItem(STORAGE_KEY);

        // If first time, use /up to increment, otherwise just fetch current count
        const mode = hasVisited ? "" : "/up";
        const url = `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}${mode}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Counter API failed");

        const data = (await response.json()) as CounterResponse;
        setHits(data.count);

        // Mark as visited to prevent recount on refresh
        if (!hasVisited) {
          localStorage.setItem(STORAGE_KEY, "true");
        }
      } catch (error) {
        console.error("Failed to fetch hits:", error);
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
        <span>...</span>
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
