import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { postSignUp } from "../components/api/postSignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/pages/style.css';

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [redirect, setRedirect] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convertir l'e-mail en minuscules avant la validation
        const formDataLower = {
            ...formData,
            email: formData.email.toLowerCase()
        };

        try {
            await postSignUp(formDataLower);
            setRedirect(true);
        } catch (error) {
            console.error(error);
        }
    };

    if (redirect) {
        return <Navigate to="/sign-in" />;
    }

    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5 card-shadow card-pb">
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h1 className="text-center fw-bold mb-4">Sign up</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col-6 col-md-4">
                                        <label htmlFor="firstName" className="form-label fw-bolder">First Name</label>
                                        <input type="text" placeholder="Enter first name" className="form-control custom-input" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                                    </div>
                                    <div className="col-sm-6 col-md-8">
                                        <label htmlFor="lastName" className="form-label fw-bolder">Last Name</label>
                                        <input type="text" placeholder="Enter last name" className="form-control custom-input w-100" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bolder">Email</label>
                                    <input type="email" placeholder="example.email@gmail.com" className="form-control custom-input" id="email" name="email" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label fw-bolder">Password</label>
                                    <input type="password" placeholder="Enter at least 8 characters" className="form-control custom-input mb-5" id="password" name="password" value={formData.password} onChange={handleChange} />
                                </div>
                                <button type="submit" className="form-control btn btn-purple text-white">Sign Up</button>
                                <p className="mt-3 text-center">Already have an account? <Link to="/sign-in" className="text-purple text-decoration">Log In</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
