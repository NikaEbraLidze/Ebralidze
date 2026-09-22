import { SearchPlatform, CSharpProject, Inboxify } from "@/assets/index";
import type { IProjectData } from "./index.types";

export const projectsData: IProjectData[] = [
  {
    id: 1,
    key: "authforge",
    repoUrl: "https://github.com/NikaEbraLidze/Authforge",
    mark: "Af",
    span: "hero",
  },
  {
    id: 2,
    key: "f1AeroLab",
    repoUrl: "https://github.com/NikaEbraLidze/f1-aerolab-frontend",
    mark: "F1",
    span: "tall",
  },
  {
    id: 3,
    key: "hotel",
    repoUrl: "https://github.com/NikaEbraLidze/Hotel-Management-System",
    imageUrl: CSharpProject,
    mark: "H",
    span: "square",
  },
  {
    id: 4,
    key: "inboxify",
    repoUrl: "https://github.com/NikaEbraLidze/Inboxify",
    imageUrl: Inboxify,
    mark: "In",
    span: "square",
  },
  {
    id: 5,
    key: "platrack",
    repoUrl: "https://github.com/NikaEbraLidze/Platrack",
    imageUrl: SearchPlatform,
    mark: "P",
    span: "square",
  },
];
