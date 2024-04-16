import axios from "axios";
import { API_URL } from "./config/Config";

export const postAddContact = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/contacts`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
