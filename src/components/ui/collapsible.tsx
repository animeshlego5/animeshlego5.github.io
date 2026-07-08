"use client";

import { ChevronDownIcon } from "lucide-react";
import { Collapsible as CollapsiblePrimitive } from "radix-ui";
import { createContext, useContext, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import type { ChevronsDownUpIconHandle } from "../animated-icons/chevrons-down-up-icon";
import { ChevronsDownUpIcon } from "../animated-icons/chevrons-down-up-icon";

function Collapsible(
  props: React.ComponentProps<typeof CollapsiblePrimitive.Root>
) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger(
  props: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>
) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  );
}

function CollapsibleContent(
  props: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>
) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  );
}

type CollapsibleContextType = {
  open: boolean;
};

const CollapsibleContext = createContext<CollapsibleContextType | null>(null);

const useCollapsible = () => {
  const context = useContext(CollapsibleContext);

  if (!context) {
    throw new Error(
      "Collapsible components must be used within a CollapsibleWithContext"
    );
  }

  return context;
};

function CollapsibleWithContext({
  defaultOpen,
  ...props
}: React.ComponentProps<typeof Collapsible>) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <CollapsibleContext.Provider value={{ open }}>
      <Collapsible open={open} onOpenChange={setOpen} {...props} />
    </CollapsibleContext.Provider>
  );
}

/** @deprecated Use CollapsibleChevronIcon instead */
function CollapsibleChevronsIcon() {
  const { open } = useCollapsible();

  const ref = useRef<ChevronsDownUpIconHandle>(null);

  useEffect(() => {
    const controls = ref.current;
    if (!controls) return;

    if (open) {
      controls.startAnimation();
    } else {
      controls.stopAnimation();
    }
  }, [open]);

  return <ChevronsDownUpIcon ref={ref} />;
}

// Keep in sync with `--animate-slow-blink` in globals.css (1.6s).
const SLOW_BLINK_DURATION_MS = 1600;

function CollapsibleChevronIcon({
  className,
  blinkWhenClosed = false,
}: {
  className?: string;
  blinkWhenClosed?: boolean;
}) {
  const { open } = useCollapsible();

  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!blinkWhenClosed) return;

    const el = ref.current;
    if (!el) return;

    // A CSS animation's timeline starts when the element mounts, so chevrons
    // that mount later (e.g. project items revealed by "Show More") would blink
    // out of phase with the rest. Snap every chevron to the same global phase
    // grid via a negative delay so they all pulse in unison regardless of when
    // they mount.
    el.style.animationDelay = `-${performance.now() % SLOW_BLINK_DURATION_MS}ms`;
  }, [blinkWhenClosed]);

  return (
    <ChevronDownIcon
      ref={ref}
      className={cn(
        "size-4 transition-transform duration-200 ease-in-out",
        open && "rotate-180",
        // Always keep the animation applied so its timeline never resets;
        // when open, opacity is pinned to 1 (overriding the keyframes), so the
        // pulse stays phase-locked across every chevron even after toggling.
        blinkWhenClosed && "animate-slow-blink",
        blinkWhenClosed && open && "!opacity-100",
        className
      )}
    />
  );
}

export {
  Collapsible,
  CollapsibleChevronIcon,
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
};
