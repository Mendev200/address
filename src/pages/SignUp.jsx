import React from "react";
import { Link } from "react-router-dom";
import SignForm from "../components/SignForm";

function SignUp() {

    return (
        <div className="container-fluid mt-3">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card card-shadow">
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h1 className="text-center fw-bold mb-4">Sign up</h1>
                            <SignForm />
                            <p className="mt-3 text-center">Already have an account? <Link to="/sign-in" className="text-purple text-decoration">Log In</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
