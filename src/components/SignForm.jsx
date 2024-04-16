import React, { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { postSignUp } from "./api/postSignUp";
import { postSignIn } from "./api/postSignIn";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/pages/style.css';

export default function SignForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [redirectSignIn, setRedirectSignIn] = useState(false);
    const [redirectHome, setRedirectHome] = useState(false);

    // Utilisation de useLocation pour obtenir le chemin de l'URL
    const location = useLocation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataLower = {
            ...formData,
            email: formData.email.toLowerCase()
        };

        try {
            // Vérifie si le chemin de l'URL contient "/sign-in"
            if (location.pathname === "/sign-in") {
                await postSignIn(formDataLower);
                setRedirectHome(true);
            } else { // Sinon, il s'agit d'une inscription
                await postSignUp(formDataLower);
                setRedirectSignIn(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (redirectHome) {
        return <Navigate to="/home" />;
    }

    if (redirectSignIn) {
        return <Navigate to="/sign-in" />;
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Afficher les champs firstName et lastName uniquement sur la page d'inscription */}
            {location.pathname !== "/sign-in" && (
                <div>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label fw-bolder">First Name</label>
                        <input type="text" placeholder="Enter first name" className="form-control custom-input" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label fw-bolder">Last Name</label>
                        <input type="text" placeholder="Enter last name" className="form-control custom-input" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                    </div>
                </div>
            )}
            <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bolder">Email</label>
                <input type="email" placeholder="example.email@gmail.com" className="form-control custom-input" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bolder">Password</label>
                <input type="password" placeholder="Enter at least 8 characters" className="form-control custom-input mb-5" id="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <button type="submit" className="form-control btn btn-purple text-white">
                {location.pathname === "/sign-in" ? "Sign In" : "Sign Up"}
            </button>
        </form>
    );
}
