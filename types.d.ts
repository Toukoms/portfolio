type ProjectProps = {
  name: string;
  description: string;
  image: string;
  type: "team" | "solo";
  techno: string[];
  linkSource: string;
  linkDemo?: string;
};

type SkillProps = {
  name: string;
  image: string;
};

type LinkType = {
  href: string;
  active: boolean;
};

type LinkStateType = {
  links: LinkType[];
  setLinkActive: (activeLink: string) => void;
  deactivateLinks: () => void;
};
