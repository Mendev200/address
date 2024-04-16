import axios from "axios";
import { API_URL } from "./config/Config";

export const postSignIn = async (formData) => {
  try {
    // Vérifier si l'utilisateur existe dans la base de données
    const response = await axios.post(`${API_URL}/sign-in`, formData);
    // const user = response.data[0];
    // if (!user) {
    //   throw new Error("Invalid email or password");
    // }
    return response.data;
  } catch (error) {
      throw error;
  }
};
