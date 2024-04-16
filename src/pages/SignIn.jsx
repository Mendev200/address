import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { postSignIn } from "../components/api/postSignIn";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/pages/style.css';

function SignIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await postSignIn(formData);
            if (!response.error) {
                setRedirect(true);
            } else {
                setError(response.error);
            }
        } catch (error) {
            setError("An error occurred. Please try again later.");
        }
    };

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
                            {error && <p className="text-danger text-center">{error}</p>}
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
