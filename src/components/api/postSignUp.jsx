import axios from "axios";
import { API_KEY } from "./config/Config";

export const postSignUp = async (formData) => {
    try {
      const response = await axios.post(`/api/signup?api_key=${API_KEY}`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
