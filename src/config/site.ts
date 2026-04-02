import { USER } from "@/features/portfolio/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || USER.website,
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
];

export const GITHUB_USERNAME = "animeshlego5";
export const SOURCE_CODE_GITHUB_REPO = "animeshlego5/animeshlego5.github.io";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/animeshlego5/animeshlego5.github.io";
export const UTM_PARAMS = {};
