import React from "react";

import { SOCIAL_LINKS } from "../../data/social-links";
import { Panel } from "../panel";
import { SocialLinkItem } from "./social-link-item";

export function SocialLinks() {
  return (
    <Panel>
      <h2 className="sr-only">Social Links</h2>

      <div className="flex items-center justify-center gap-6 py-4">
        {SOCIAL_LINKS.map((link, index) => {
          return <SocialLinkItem key={index} {...link} />;
        })}
      </div>
    </Panel>
  );
}
