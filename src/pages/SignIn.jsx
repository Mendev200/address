import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/pages/style.css';

function SignIn() {
    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-8">
                    <div className="card mt-5 card-shadow card-pb">
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h1 className="text-center fw-bold">Sign in</h1>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bolder">Email</label>
                                    <input type="email" placeholder="Enter your email" className="form-control custom-input" id="email" aria-describedby="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label fw-bolder">Password</label>
                                    <input type="password" placeholder="Enter your password" className="form-control custom-input" id="password" />
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
