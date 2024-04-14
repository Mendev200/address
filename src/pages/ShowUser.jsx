import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Delete from "../components/Delete";
import { getUserProfile } from "../components/api/getUserProfile";

function ShowUser() {
    const [userData, setUserData] = useState(null); // État pour stocker les données de l'utilisateur

    // Utiliser useEffect pour exécuter la fonction getUserProfile une fois que le composant est monté
    useEffect(() => {
        // Fonction asynchrone pour obtenir le profil de l'utilisateur
        const fetchData = async () => {
            try {
                const userData = await getUserProfile(); // Appel de la fonction getUserProfile
                setUserData(userData); // Mettre à jour l'état avec les données de l'utilisateur
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };
        
        fetchData(); // Appeler la fonction fetchData
    }, []); // [] signifie que useEffect ne s'exécute qu'une seule fois après le montage du composant

    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5 card-pb-dix">
                        <div className="card-body d-flex justify-content-between">
                            {userData ? ( // Vérifier si les données de l'utilisateur existent avant de les afficher
                                <div className="d-flex align-items-start"> 
                                    <img src={process.env.PUBLIC_URL + '/images/icon.png'} alt="icon" className="p-2 bg-warning rounded " style={{width: '48px'}} />
                                    <div className="d-flex flex-column ms-3"> 
                                        <h1 className="fs-5 fw-bold text-center">{userData.email}</h1>
                                        <p>{userData.password}</p>
                                    </div>
                                </div>
                            ) : (
                                <p>Loading...</p> // Afficher un message de chargement tant que les données de l'utilisateur ne sont pas chargées
                            )}
                            <div className="d-flex flex-column mt-3">
                                <Link to="/update-user" className="btn btn-primary mb-2" type="button">Update</Link>
                                <Delete />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowUser;

