import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "EXPENSIO_DATA";

export const saveData = async (data: any) => {
    await AsyncStorage.setItem(KEY, JSON.stringify(data));
};

export const loadData = async () => {
    const res = await AsyncStorage.getItem(KEY);
    return res ? JSON.parse(res) : null;
};