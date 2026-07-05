import React from "react";

import { Markdown } from "@/components/markdown";
import {
  CollapsibleChevronIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Tag } from "@/components/ui/tag";
import { ProseMono } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import type { ExperiencePosition } from "../../types/experiences";

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePosition;
}) {
  const { start, end } = position.employmentPeriod;
  const isOngoing = !end;

  return (
    <CollapsibleWithContext defaultOpen={position.isExpanded ?? false} asChild>
      <div className="group/experience relative isolate transition-colors last:before:absolute last:before:left-3 last:before:-z-2 last:before:h-full last:before:w-4 last:before:bg-background">
        <CollapsibleTrigger
          className={cn(
            "block w-full cursor-pointer text-left transition-transform active:scale-[0.995]",
            "relative before:absolute before:-inset-x-2 before:-inset-y-1.5 before:-z-1 before:rounded-lg before:transition-[background-color] before:ease-out hover:before:bg-accent"
          )}
        >
          <div className="relative z-1 mb-1 flex items-center gap-3">
            <h4 className="flex-1 font-medium text-balance">
              {position.title}
            </h4>

            <div
              className="flex shrink-0 items-center gap-1 text-xs text-foreground"
              aria-hidden
            >
              <CollapsibleChevronIcon blinkWhenClosed />
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {position.employmentType && (
              <>
                <dl>
                  <dt className="sr-only">Employment Type</dt>
                  <dd>{position.employmentType}</dd>
                </dl>

                <Separator
                  className="data-[orientation=vertical]:h-4"
                  orientation="vertical"
                />
              </>
            )}

            <dl>
              <dt className="sr-only">Employment Period</dt>
              <dd className="flex items-center gap-0.5">
                <span>{start}</span>
                <span className="font-mono">—</span>
                {isOngoing ? <span>Present</span> : <span>{end}</span>}
              </dd>
            </dl>
          </div>
        </CollapsibleTrigger>

        <div className="relative -ml-4 pl-4 after:absolute after:top-0 after:-bottom-[15px] after:left-0 after:w-[2px] after:bg-foreground after:opacity-0 after:transition-opacity group-data-[state=open]/experience:after:opacity-100">
          <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-fade-up data-[state=open]:animate-collapsible-fade-down">
            {position.description && (
              <ProseMono className="pt-2">
                <Markdown>{position.description}</Markdown>
              </ProseMono>
            )}
          </CollapsibleContent>

          {Array.isArray(position.skills) && position.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5 pt-3">
              {position.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </CollapsibleWithContext>
  );
}
