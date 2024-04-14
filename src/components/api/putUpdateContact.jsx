import axios from "axios";
import { API_KEY } from "./config/Config";

export const putUpdateContact = async (formData) => {
    try {
      const response = await axios.put(`/api/updatecontact?api_key=${API_KEY}`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
