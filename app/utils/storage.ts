import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {
  async getString(key: string): Promise<string | undefined> {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ?? undefined;
    } catch {
      return undefined;
    }
  },

  async set(
    key: string,
    value: string | number | boolean | object | any[]
  ): Promise<boolean> {
    try {
      if (value === null || value === undefined) {
        return false;
      }

      const formattedValue =
        typeof value === 'object' ? JSON.stringify(value) : String(value);

      await AsyncStorage.setItem(key, formattedValue);

      return true;
    } catch {
      return false;
    }
  },

  async delete(key: string): Promise<boolean> {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  },

  async clearAll(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch { }
  },

  async contains(key: string): Promise<boolean> {
    try {
      const value = await AsyncStorage.getItem(key);
      return value !== null;
    } catch {
      return false;
    }
  },

  async getAllKeys(): Promise<string[]> {
    try {
      return await AsyncStorage.getAllKeys();
    } catch {
      return [];
    }
  },
};

export const getJson = async <T = any>(
  key: string
): Promise<T | undefined> => {
  const value = await Storage.getString(key);

  if (!value) return undefined;

  try {
    return JSON.parse(value) as T;
  } catch {
    return undefined;
  }
};