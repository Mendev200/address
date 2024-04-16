import axios from "axios";
import { API_URL } from "./config/Config";

export const postSignUp = async (formData) => {
    try {
        // // Vérifier si l'utilisateur existe déjà dans la base de données côté frontend
        // const existingUser = localStorage.getItem("loggedInUser");
        // if (existingUser) {
        //     throw new Error("User already exists"); // Gérer le cas où l'utilisateur existe déjà
        // }

        // Si l'utilisateur n'existe pas déjà, effectuer une requête POST au backend
        const response = await axios.post(`${API_URL}/users`, formData);
        
        // Enregistrer les données de l'utilisateur dans le stockage local pour éviter les doublons
        // localStorage.setItem("loggedInUser", JSON.stringify(response.data));

        return response.data;
    } catch (error) {
        throw error;
    }
};
