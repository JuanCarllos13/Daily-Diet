export type SnackDTO = {
  title: string;
  data: {
    date: string;
    hour: string;
    name: string;
    description: string;
    diet: boolean;
    content: string;
  }[];
};