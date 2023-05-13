export type MealContentDTO = {
  id: Date;
  date: string;
  hour: string;
  name: string;
  description: string;
  diet: boolean;
};

export type MealDTO = {
  title: string;
  data: MealContentDTO[];
};
