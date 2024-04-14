import axios from "axios";
import { API_KEY } from "./config/Config";

export const deleteContact = async (formData) => {
    try {
      const response = await axios.delete(`/api/signin?api_key=${API_KEY}`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };