import axios from "axios";
import { API_KEY } from "./config/Config";

export const putUpdateUser = async () => {
    try {
      const response = await axios.put(`/api/updateuser?api_key=${API_KEY}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };