import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { putUpdateUser } from "./api/putUpdateUser";
import { putUpdateContact } from "./api/putUpdateContact";
import { postAddContact } from "./api/postAddContact";
// import ImageUploader from "./ImageUploader";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/pages/style.css';

export default function DataForm({ contactId, userId }) {
    const [formData, setFormData] = useState({
        phoneNumber: "",
        email: "",
        address: "",
        file: null,
        password: ""
    });
    const [redirectHome, setRedirectHome] = useState(false);
    const [redirectShowUser, setRedirectShowUser] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Try commence");
            if (userId) {
                await putUpdateUser(formData);
                console.log("Informations utilisateur mises à jour avec succès");
                setRedirectShowUser(true);
            } else 
            if (contactId) {
                console.log("if");
                await putUpdateContact(contactId, formData);
                console.log("Informations de contact mises à jour avec succès");
                setRedirectHome(true);
            } else {
                await postAddContact(formData);
                console.log("Nouveau contact ajouté avec succès");
                setRedirectHome(true);
            }
        } catch (error) {
            console.error("Erreur lors de la soumission :", error);
        }
    };

    if (redirectHome) {
        return <Navigate to={`/home/${userId}`} />;
    }

    if (redirectShowUser) {
        return <Navigate to={`/show-user/${userId}`} />;
    }

    return (
        <form onSubmit={handleSubmit}>
            {!userId && (
            <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label fw-bolder">Numéro de téléphone</label>
                <input type="tel" placeholder="Numéro de téléphone" className="form-control custom-input w-100" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </div>
            )}
            <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bolder">Email</label>
                <input type="email" placeholder="Email" className="form-control custom-input" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            {userId && (
                <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-bolder">Mot de passe</label>
                    <input type="password" placeholder="Mot de passe" className="form-control custom-input" id="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
            )}
            {!userId &&(     
            <div className="mb-3">
                <label htmlFor="address" className="form-label fw-bolder">Adresse</label>
                <input type="text" placeholder="Adresse" className="form-control custom-input mb-5" id="address" name="address" value={formData.address} onChange={handleChange} />
            </div>
            )}
          
            {/* <div className="mb-3">
                <ImageUploader />
            </div> */}
            <div className="d-flex justify-content-end">
                <Link to="/home" className="btn">Annuler</Link>
                <button className="btn text-white btn-purple" type="submit">Mettre à jour</button>
            </div>
        </form>
    );
}
