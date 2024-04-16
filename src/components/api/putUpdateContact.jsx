import axios from "axios";
import { API_URL } from "./config/Config";

export const putUpdateContact = async (id, formData) => {
  try {
    const response = await axios.put(`${API_URL}/contacts/${id}`, formData);
    console.log(response.data);
    return response.data;
  } catch (error) {
      throw error;
  }
};

