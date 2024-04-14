import axios from "axios";
import { API_KEY } from "./config/Config";

export const postAddContact = async (formData) => {
    try {
      const response = await axios.post(`/api/addcontact?api_key=${API_KEY}`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };