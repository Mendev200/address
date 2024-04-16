import axios from "axios";
import { API_URL } from "./config/Config";

export const putUpdateUser = async (id, formData) => {
    try {
      const response = await axios.put(`${API_URL}/users/${id}`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };