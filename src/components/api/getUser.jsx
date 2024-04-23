import axios from "axios";
import { API_URL } from "./config/Config";

export const getUser = async () => {
    try {
      const response = await axios.get(`${API_URL}/users/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };