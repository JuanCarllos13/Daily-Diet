import { DetailsSnackProps } from "@screens/DetailsSnack";
import { SnackDTO } from "src/dtos/snackDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Details: undefined;
      NewSnack: { snack?: DetailsSnackProps | undefined };
      Finish: { diet: boolean };
      DetailsSnacK: { snack: DetailsSnackProps };
    }
  }
}
