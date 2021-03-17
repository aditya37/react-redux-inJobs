import AsyncStorage from '@react-native-community/async-storage';

const StoreData = async (key, value) => {
  try {
    await AsyncStorage.clear();
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('ASYNC ERROR ', error);
  }
};
const RemoveData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
const UpdateItem = async (key, value) => {
  try {
    await AsyncStorage.mergeItem(key,value);
  } catch (error) {
    console.log(error);
  }
};
export {StoreData, RemoveData,UpdateItem};
