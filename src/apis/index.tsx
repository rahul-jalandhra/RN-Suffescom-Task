import axios from "axios";
import { errorAlert } from "../utils/alert";
import { formatCharacterData } from "../utils/apiUtils";

const baseURL = "https://rickandmortyapi.com/api/character";

export const fetchCharacters = async (params:string='') => {
    try {
        const response = await axios.get(`${baseURL}${params}`);
        return formatCharacterData(response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const message = error.response?.data?.message || error.message;
            errorAlert(message);
        } else {
            errorAlert("An unexpected error occurred");
        }
        console.error("Error fetching characters:", JSON.stringify(error));
        return [];
    }
};