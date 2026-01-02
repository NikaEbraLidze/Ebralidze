export interface IServiceData {
  id: number;
  key: string;
  icon: string;
}

export interface ServiceCardProps {
  data: IServiceData;
  trans: {
    description: string;
    imageAlt: string;
  };
}
