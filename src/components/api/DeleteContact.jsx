import axios from "axios";
import { API_URL } from "./config/Config";

export const deleteContact = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/contacts/${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        throw error;
    }
};
