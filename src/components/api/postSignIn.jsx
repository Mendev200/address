import axios from "axios";
import { API_KEY } from "./config/Config";

export const postSignIn = async (formData) => {
    try {
      const response = await axios.post(`/api/signin?api_key=${API_KEY}`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };