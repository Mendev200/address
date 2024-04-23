import {getUser} from "./api/getUser";
// Fonction pour se connecter
export const CheckUserId = async (formData) => {
  try {
    console.log("Fetching users...");
    // Récupérer la liste des utilisateurs
    const users = await getUser();
    console.log("Users fetched:", users);

    // Vérifier si les informations de connexion correspondent à un utilisateur existant
    console.log("Checking matching user...");
    const matchingUser = users.find(user => user.email === formData.email && user.password === formData.password);
    console.log("Matching user:", matchingUser);

    if (matchingUser) {
      // Utilisateur trouvé, connexion réussie
      console.log("User signed in successfully:", matchingUser);
      return matchingUser.id;
    } else {
      // Aucun utilisateur trouvé avec les informations fournies, renvoyer une erreur
      console.log("No matching user found.");
      throw new Error("Adresse e-mail ou mot de passe incorrect.");
    }
  } catch (error) {
    console.error("Error during sign in:", error);
    throw error;
  }
};
