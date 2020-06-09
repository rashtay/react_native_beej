import AsyncStorage from '@react-native-community/async-storage';

const storage = {
  async getItem(key: string) {
    const result = await AsyncStorage.getItem(key);

    return result ? JSON.parse(result) : null;
  },
  async setItem(key: string, data: object) {
    AsyncStorage.setItem(key, JSON.stringify(data));
  },
  async removeItem(key: string) {
    AsyncStorage.removeItem(key);
  },
};

export default storage;
