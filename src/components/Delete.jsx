import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { deleteUser } from "./api/deleteUser";
import { deleteContact } from "./api/deleteContact"; // Import de la fonction DeleteContactApi
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Delete({ userType }) {
    const [redirect, setRedirect] = useState(false); // État pour gérer la redirection après la suppression réussie

    // Fonction pour gérer la suppression de l'utilisateur
    const handleDelete = async () => {
        try {
            // Utilise soit la fonction de suppression d'utilisateur ou de contact de l'API en fonction de userType
            if (userType === "user") {
                await deleteUser();
            } else if (userType === "contact") {
                await deleteContact();
            }
            setRedirect(true); // Déclenche la redirection après la suppression réussie
        } catch (error) {
            console.error(error); // Gestion des erreurs : affiche l'erreur dans la console
        }
    };

    // Si redirect est true, redirige l'utilisateur vers une autre page (par exemple, la page d'accueil)
    if (redirect) {
        return <Navigate to="/show-user" />;
    }

    return (
        <div>
            {/* Mettez ici le contenu de votre composant, par exemple un bouton pour déclencher la suppression */}
            <button onClick={handleDelete} className="btn text-white btn-danger" type="button">Delete {userType}</button>
        </div>
    );
}
