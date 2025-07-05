import BackgroundSample from "@/images/background-sample.jpg";
import { SlugFormatter } from "@/helpers/formatter";

type LinkType = {
  preview: string;
  github: string;
};

type ToolType = {
  title: string;
  url: string;
  desc: string;
};

type TypeOfProject = {
  title: string;
  slug: string;
  desc: string;
  image: any;
  status: string;
  link: LinkType[];
  tools: ToolType[];
};

const projects = [
  {
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    image: BackgroundSample,
    status: "private" as const,
    link: [
      {
        preview: "",
        github: "",
      },
    ],
    tools: [
      {
        title: "Next.JS",
        url: "https://nextjs.org/",
        desc: "The React Framework for the Web, Next.js enables you to create high-quality web applications with the power of React components.",
      },
      {
        title: "Tailwindcss",
        url: "https://tailwindcss.com/",
        desc: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
      },
    ],
  },
  {
    title: "Project 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    image: BackgroundSample,
    status: "public" as const,
    link: [
      {
        preview: "https://google.com",
        github: "https://github.com/fajarrhnn",
      },
    ],
    tools: [
      {
        title: "Next.JS",
        url: "https://nextjs.org/",
        desc: "The React Framework for the Web, Next.js enables you to create high-quality web applications with the power of React components.",
      },
      {
        title: "Tailwindcss",
        url: "https://tailwindcss.com/",
        desc: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
      },
    ],
  },
];

export const ProjectsData: TypeOfProject[] = projects.map((project) => ({
  ...project,
  slug: SlugFormatter(project.title),
}));

export type { LinkType, ToolType };
