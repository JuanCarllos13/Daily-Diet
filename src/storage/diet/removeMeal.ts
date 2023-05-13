import { MealContentDTO, MealDTO } from "src/dtos/snackDTO";
import { DietGetAll } from "./dietGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DIET_COLLECTION } from "@storage/storageConfig";

export async function RemoveDiet(content: MealContentDTO) {
  console.log(content);

  try {
    const storage = await DietGetAll();

    const updatedStorage: MealDTO[] = storage.filter((item: MealDTO) => {
      return (
        item.title !== content.date ||
        item.data.findIndex(
          (data: MealContentDTO) => data.id === content.id
        ) === -1
      );
    });

    await AsyncStorage.setItem(DIET_COLLECTION, JSON.stringify(updatedStorage));
  } catch (error) {
    console.log(error);
  }
}
