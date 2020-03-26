import { AsyncStorage } from "react-native";

export const useAsyncStorage = (key: string) => {
  const getStoredData = async () => JSON.parse(await AsyncStorage.getItem(key));

  const setStoredData = async (data: any) =>
    await AsyncStorage.setItem(key, JSON.stringify(data));

  const removeStoredData = async () => await AsyncStorage.removeItem(key);

  return { getStoredData, setStoredData, removeStoredData };
};
