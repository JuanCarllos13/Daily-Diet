import AsyncStorage from "@react-native-async-storage/async-storage";
import { DIET_COLLECTION } from "@storage/storageConfig";
import { MealContentDTO } from "src/dtos/snackDTO";
import { DietGetAll } from "./dietGetAll";

export async function createDiet(content: MealContentDTO) {
  try {
    const storedSnacks = await DietGetAll();
    const snackIndex = storedSnacks.findIndex(
      (snackList: { title: string, data: MealContentDTO[] }) =>
        snackList.title === content.date
    );

    
    if (snackIndex !== -1) {
      storedSnacks[snackIndex].data.push(content);
    } else {
      storedSnacks.push({
        title: content.date,
        data: [content],
      });
    }
    
    await AsyncStorage.setItem(DIET_COLLECTION, JSON.stringify(storedSnacks));
  } catch (error) {
    console.log(error);
  }
}
