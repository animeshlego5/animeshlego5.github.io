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

function CollapsibleChevronIcon({
  className,
  blinkWhenClosed = false,
}: {
  className?: string;
  blinkWhenClosed?: boolean;
}) {
  const { open } = useCollapsible();

  return (
    <ChevronDownIcon
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
