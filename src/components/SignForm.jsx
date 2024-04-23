import React, { useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { postSignUp } from "./api/postSignUp";
import { CheckUserId } from "./CheckUserId";
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
    const [error, setError] = useState("");
    const location = useLocation();
    const navigation = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validatePassword = (password) => {
        // Au moins 16 caractères, au moins une lettre majuscule, au moins un chiffre et au moins un caractère spécial
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{16,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { firstName, lastName, email, password } = formData;

        // Validation des champs requis
        if (!email || !password || (location.pathname !== "/sign-in" && (!firstName || !lastName))) {
            setError("Veuillez remplir tous les champs requis");
            return;
        }

        const formDataLower = {
            ...formData,
            email: email.toLowerCase()
        };

        try {
            if (location.pathname === "/sign-in") {
                const userId = await CheckUserId(formDataLower);
                navigation(`/home/${userId}`);
            } else {
                if (!validatePassword(password)) {
                    setError("Le mot de passe doit contenir au moins 16 caractères, au moins une lettre majuscule, au moins un chiffre et au moins un caractère spécial");
                    return;
                }
                await postSignUp(formDataLower);
                setRedirectSignIn(true);
            }
        } catch (error) {
            setError("Une erreur s'est produite. Veuillez réessayer.");
            console.error(error);
        }
    };

    if (redirectSignIn) {
        return <Navigate to="/sign-in" />;
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
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
                <input type="password" placeholder="Enter at least 16 characters including at least one uppercase letter, one digit, and one special character" className="form-control custom-input mb-5" id="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <button type="submit" className="form-control btn btn-purple text-white">
                {location.pathname === "/sign-in" ? "Sign In" : "Sign Up"}
            </button>
        </form>
    );
}
