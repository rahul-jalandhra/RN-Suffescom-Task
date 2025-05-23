import { Alert } from "react-native";

export const errorAlert = (message: string) => {
    Alert.alert("Error", message);
}