import AsyncStorage from "@react-native-async-storage/async-storage";
import { DIET_COLLECTION } from "../storageConfig";

export async function DietGetAll() {
  try {
    const storage = await AsyncStorage.getItem(DIET_COLLECTION);

    const diet = storage ? JSON.parse(storage) : [];

    return diet;
  } catch (error) {
    throw Error;
  }
}
