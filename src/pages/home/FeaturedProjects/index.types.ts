export type ProjectSpan = "hero" | "tall" | "square";

export interface IProjectData {
  id: number;
  key: string;
  repoUrl: string;
  imageUrl?: string;
  mark: string;
  span: ProjectSpan;
}
