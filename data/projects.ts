import BackgroundSample from "@/images/background-sample.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export const ProjectsData: TypeOfProject[] = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    image: BackgroundSample,
    status: "private",
    link: [
      {
        preview: "",
        github: "",
      },
    ],
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    image: BackgroundSample,
    status: "private",
    link: [
      {
        preview: "",
        github: "",
      },
    ],
  },
];

type TypeOfProject = {
  title: string;
  desc: string;
  image: StaticImport | StaticImageData | string;
  status: string;
  link: [
    {
      preview: string;
      github: string;
    }
  ];
};
