export type MealContentDTO = {
  id: string;
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
