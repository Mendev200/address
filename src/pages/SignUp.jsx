import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/pages/style.css';

function SignUp() {
    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5 card-shadow card-pb">
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h1 className="text-center fw-bold mb-4">Sign up</h1>
                            <form>
                                <div className="row mb-3">
                                    <div className="col-6 col-md-4">
                                        <label htmlFor="firstName" className="form-label fw-bolder">First Name</label>
                                        <input type="text" placeholder="Enter first name" className="form-control custom-input" id="firstName" />
                                    </div>
                                    <div className="col-sm-6 col-md-8">
                                        <label htmlFor="lastName" className="form-label fw-bolder">Last Name</label>
                                        <input type="text" placeholder="Enter last name" className="form-control custom-input w-100" id="lastName" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bolder">Email</label>
                                    <input type="email" placeholder="example.email@gmail.com" className="form-control custom-input" id="email" aria-describedby="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label fw-bolder">Password</label>
                                    <input type="password" placeholder="Enter at least8+ characters" className="form-control custom-input mb-5" id="password" />
                                </div>
                                <button type="submit" className="form-control btn btn-purple text-white">Sign Up</button>
                                <p className="mt-3 text-center">Already have an account? <Link to="/sign-in" className="text-purple  text-decoration">Log In</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
