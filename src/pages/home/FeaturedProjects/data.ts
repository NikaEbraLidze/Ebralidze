import {
  TypeScript,
  CSharp,
  PostgreSQL,
  Node,
  Javascript,
  ReactIcon,
  Inboxify,
  WatchWeb,
  SearchPlatform,
  CSharpProject,
} from "@/assets/index";

export interface IProjectData {
  id: number;
  key: string;
  repoUrl: string;
  imageUrl: string;
  techStack: string[];
}

export const projectsData: IProjectData[] = [
  {
    id: 1,
    key: "platrack",
    repoUrl: "https://github.com/NikaEbraLidze/Platrack",
    imageUrl: SearchPlatform,
    techStack: [ReactIcon, Node, PostgreSQL, TypeScript, Javascript],
  },
  {
    id: 2,
    key: "csharp",
    repoUrl: "https://github.com/NikaEbraLidze/ItStepAcademy-C--ASP.NET",
    imageUrl: CSharpProject,
    techStack: [CSharp],
  },
  {
    id: 3,
    key: "inboxify",
    repoUrl: "https://github.com/NikaEbraLidze/Inboxify",
    imageUrl: Inboxify,
    techStack: [ReactIcon, Node, PostgreSQL, Javascript],
  },
  {
    id: 4,
    key: "ecommerce",
    repoUrl: "https://github.com/NikaEbraLidze/watch-website",
    imageUrl: WatchWeb,
    techStack: [ReactIcon, Javascript],
  },
];
