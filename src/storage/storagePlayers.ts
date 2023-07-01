import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_STORAGE } from "@storage/storageConfig";
import { PlayerDTO } from "src/models/PlayerDTO";

export async function storageGetAllPlayers(userId: string) {
  try {
    const storage = await AsyncStorage.getItem(
      `${PLAYER_STORAGE}_user:${userId}`
    );
    const players: PlayerDTO[] = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
}

export async function storageCreatePlayer(player: PlayerDTO, userId: string) {
  try {
    const storage = await storageGetAllPlayers(userId);
    const newStorage = JSON.stringify([player, ...storage]);

    await AsyncStorage.setItem(`${PLAYER_STORAGE}_user:${userId}`, newStorage);
  } catch (error) {
    throw error;
  }
}

export async function storageRemovePlayer(playerId: string, userId: string) {
  try {
    const storage = await storageGetAllPlayers(userId);
    const storageFiltered = storage.filter((player) => player.id !== playerId);
    const newStorage = JSON.stringify(storageFiltered);

    await AsyncStorage.setItem(`${PLAYER_STORAGE}_user:${userId}`, newStorage);
  } catch (error) {
    throw error;
  }
}

export async function clearStorage() {
  try {
    await AsyncStorage.clear();
    console.log("Storage clear!");
  } catch (error) {
    throw error;
  }
}
