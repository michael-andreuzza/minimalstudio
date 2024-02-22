export interface Template {
    url: string;
    description: string;
    title: string;
    type: string;
  };
  const lexington: Template = {
    url: "https://lexingtonthemes.com/",
    description: "Outstanding themes and UI Kits made with Astro & Tailwind CSS",
    type: "Design & Development landing page and all themes inlcuded.",
    title: "Lexington Themes",
  };
  const bal: Template = {
    url: "https://www.builtatlightspeed.com/",
    description: "A directory of 4000+ templates & UI kits for the modern stack.",
    type: "Design",
    title: "Website for Built at light speed",
  };
  const dojo: Template = {
    url: "https://devdojo.com/tails/",
    description: "Tailwind Page Builder and Component Library",
    type: "Design & Development",
    title: "Different components for Tails",
  };
  const backgrounds: Template = {
    url: "https://wickedbackgrounds.com/",
    description: "Create beautiful SVG backgrounds for your designs.",
    type: "Design & Development",
    title: "Landing page for Wicked Backgrounds",
  };
  const beforeafter: Template = {
    url: "https://www.figma.com/community/file/1191635037971766859/before-after",
    description: "Redesigns",
    type: "Design & Development",
    title: "2023 100+ Redesigns of components headers",
  };
  export const byName = {
    lexington,
    bal,
    backgrounds,
    dojo,
    beforeafter,
  };
  export const work = Object.values(byName);
