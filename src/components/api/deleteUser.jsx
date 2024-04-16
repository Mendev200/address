import axios from "axios";
import { API_URL } from "./config/Config";

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/users/${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        throw error;
    }
};
