import axios from "axios";
import { API_KEY } from "./config/Config";

export const getUserProfile = async (formData) => {
    try {
      const response = await axios.get(`/api/yserprofile?api_key=${API_KEY}`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };