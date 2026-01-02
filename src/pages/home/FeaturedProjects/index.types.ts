export interface IProjectData {
  id: number;
  key: string;
  repoUrl: string;
  imageUrl: string;
  techStack: string[];
}

export interface ProjectCardProps {
  data: IProjectData;
  trans: {
    title: string;
    description: string;
    imageAlt: string;
    codeBtn: string;
  };
}
