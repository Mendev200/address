import React from "react";
import { Link } from "react-router-dom";
import SignForm from "../components/SignForm";

function SignIn() {

    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5 card-shadow">
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h1 className="text-center fw-bold mb-4">Sign In</h1>
                            <SignForm />
                            <p className="mt-3 text-center">Already have an account? <Link to="/sign-up" className="text-purple text-decoration">Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
