import axios from "axios";
import { API_URL } from "./config/Config";

export const getContactList = async () => {
  try {
    const response = await axios.get(`${API_URL}/contacts`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

