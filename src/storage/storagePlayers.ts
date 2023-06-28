import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_STORAGE } from "@storage/storageConfig";
import { PlayerDTO } from "@models/PlayerDTO";

export async function getAllPlayers() {
  try {
    const storage = await AsyncStorage.getItem(PLAYER_STORAGE);
    const players: PlayerDTO[] = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
}

export async function createPlayer(player: PlayerDTO) {
  try {
    const storage = await getAllPlayers();
    const newStorage = JSON.stringify([player, ...storage]);

    await AsyncStorage.setItem(PLAYER_STORAGE, newStorage);
  } catch (error) {
    throw error;
  }
}

export async function removePlayer(playerId: string) {
  try {
    const storage = await getAllPlayers();
    const storageFiltered = storage.filter((player) => player.id !== playerId);
    const newStorage = JSON.stringify(storageFiltered);

    await AsyncStorage.setItem(PLAYER_STORAGE, newStorage);
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
