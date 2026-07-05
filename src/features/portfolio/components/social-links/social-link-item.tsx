import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { SocialLink } from "@/features/portfolio/types/social-links";
import { cn } from "@/lib/utils";

export function SocialLinkItem({ icon, title, href }: SocialLink) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          className="group/link relative block size-12 shrink-0 transition-transform ease-out hover:scale-110 active:scale-95"
          href={href}
          target="_blank"
          rel="noopener"
          aria-label={title}
        >
          <Image
            className={cn(
              "size-12 rounded-xl select-none corner-squircle supports-corner-shape:rounded-[50%]",
              (title === "GitHub" || title === "X (formerly Twitter)") &&
                "dark:invert"
            )}
            src={icon}
            alt={title}
            width={48}
            height={48}
            quality={100}
            unoptimized
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 corner-squircle ring-inset dark:ring-white/15 supports-corner-shape:rounded-[50%]" />
        </a>
      </TooltipTrigger>

      <TooltipContent>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  );
}
