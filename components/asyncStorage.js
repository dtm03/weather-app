import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

export const storeData = async (key, value) => {
    try {
        await asyncStorage.setItem(key, value);
    } catch (error) {
        console.error('Error storing data:', error);
    }
};

export const getData = async (key) => {
    try {
        return await asyncStorage.getItem(key);
    } catch (error) {
        console.error('Error getting data:', error);
        return null;
    }
};