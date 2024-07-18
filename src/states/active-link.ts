import { proxy } from "valtio";

export const linkState = proxy<LinkStateType>({
  links: [
    { href: "about", active: true },
    { href: "projects", active: false },
    { href: "skills", active: false },
    { href: "contact", active: false },
  ],
  setLinkActive: (link: string) => {
    linkState.links.forEach((lnk) => {
      if (link === lnk.href) lnk.active = true;
    });
  },
  deactivateLinks: () => {
    linkState.links.forEach((lnk) => {
      lnk.active = false;
    });
  }
});
