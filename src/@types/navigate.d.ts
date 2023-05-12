import { MealContentDTO } from "src/dtos/snackDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Details: {percentagem: MealsStatisticsProps};
      NewSnack: { snack?: MealContentDTO | undefined, edit?: boolean};
      Finish: { diet: boolean,};
      DetailsSnacK: { snack: MealContentDTO, edit: boolean };
    }
  }
}
