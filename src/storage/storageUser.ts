import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_STORAGE } from "./storageConfig";
import { UserDTO } from "src/models/UserDTO";

export async function storageUserGet() {
  try {
    const storage = await AsyncStorage.getItem(USER_STORAGE);
    const user: UserDTO = storage ? JSON.parse(storage) : {};
    return user;
  } catch (error) {
    throw error;
  }
}

export async function storageUserCreate(user: UserDTO) {
  try {
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
  } catch (error) {
    throw error;
  }
}

export async function storageUserRemove() {
  try {
    await AsyncStorage.removeItem(USER_STORAGE);
  } catch (error) {
    throw error;
  }
}
