import React, { useState } from "react";
import { deleteContact } from "./api/deleteContact";
import { deleteUser } from "./api/deleteUser";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Delete({ contactId, userId }) {
    const [refresh, setRefresh] = useState(false); // État pour gérer le rafraîchissement de la page

    const handleDelete = async () => {
        try {
            if (userId) {
                console.log(`Suppression de l'utilisateur avec l'ID : ${userId}`);
                await deleteUser(userId); // Supprimer l'utilisateur
            } else if (contactId) {
                console.log(`Suppression du contact avec l'ID : ${contactId}`);
                await deleteContact(contactId); // Supprimer le contact
            }
            console.log("Suppression terminée avec succès !");
            setRefresh(true); // Mettre à jour l'état pour rafraîchir la page
        } catch (error) {
            console.error("Une erreur s'est produite lors de la suppression :", error);
        }
    };

    if (refresh) {
        // Rafraîchir la page en rechargeant l'URL
        window.location.reload();
    }

    return (
        <button onClick={handleDelete} className="btn text-white btn-danger" type="button">Supprimer</button>
    );
}
