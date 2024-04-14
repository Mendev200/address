import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom"; // Importez Redirect depuis react-router-dom
import { postSignIn } from "../components/api/postSignIn";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/pages/style.css';

function SignIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [redirect, setRedirect] = useState(false); // État pour gérer la redirection après la connexion réussie

    // Fonction pour mettre à jour les données du formulaire lors de la saisie de l'utilisateur
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Fonction pour gérer la soumission du formulaire d'authentification
    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page par défaut lors de la soumission du formulaire
        try {
            await postSignIn(formData); // Utilise la fonction d'authentification pour envoyer les données du formulaire à l'API
            setRedirect(true); // Déclenche la redirection après une connexion réussie
        } catch (error) {
            console.error(error); // Gestion des erreurs : affiche l'erreur dans la console
        }
    };

    // Si redirect est true, redirige l'utilisateur vers la page d'accueil
    if (redirect) {
        return <Navigate to="/home" />;
    }

    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-8">
                    <div className="card mt-5 card-shadow card-pb">
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h1 className="text-center fw-bold">Sign in</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bolder">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="form-control custom-input"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label fw-bolder">Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="form-control custom-input"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Link to="#" className="text-end d-block text-purple  text-decoration mt-3">Forgot Password?</Link>
                                </div>
                                <button type="submit" className="form-control btn btn-purple text-white">Sign In</button>
                                <p className="mt-3 text-center">Don't have an account? <Link to="/sign-up" className="text-purple  text-decoration">Sign up</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
