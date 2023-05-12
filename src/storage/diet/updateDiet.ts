import AsyncStorage from "@react-native-async-storage/async-storage";
import { DIET_COLLECTION } from "@storage/storageConfig";
import { DietGetAll } from "./dietGetAll";
import {MealContentDTO} from '../../dtos/snackDTO'

export async function updateSnack(snack: MealContentDTO) {
  try {
    const storedSnacks = await DietGetAll();

    // Iterar sobre cada objeto armazenado
    for (let i = 0; i < storedSnacks.length; i++) {
      const storedSnack = storedSnacks[i];

      // Buscar o objeto com o id correspondente
      const snackIndex = storedSnack.data.findIndex(
        (storedSnack: MealContentDTO) => storedSnack.id === snack.id
      );

      if (snackIndex !== -1) {
        storedSnack.data[snackIndex].date = snack.date;
        storedSnack.data[snackIndex].hour = snack.hour;
        storedSnack.data[snackIndex].name = snack.name;
        storedSnack.data[snackIndex].description = snack.description;
        storedSnack.data[snackIndex].diet = snack.diet;
        await AsyncStorage.setItem(
          DIET_COLLECTION,
          JSON.stringify(storedSnacks)
        );
        return;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
