import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom"; // Import de Navigate depuis react-router-dom
import { putUpdateUser } from "../components/api/putUpdateUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/pages/style.css';

function UpdateUser() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        file: null
    });
    const [redirect, setRedirect] = useState(false); // État pour gérer la redirection après la mise à jour réussie

    const handleChange = (e) => {
        if (e.target.type === "file") {
            setFormData({ ...formData, file: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await putUpdateUser(formData);
            setRedirect(true); // Déclenche la redirection après une mise à jour réussie
        } catch (error) {
            console.error(error);
        }
    };

    if (redirect) {
        return <Navigate to="/show-user" />; // Utilise Navigate pour rediriger vers "/show_user" après une mise à jour réussie
    }

    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5 card-shadow card-pb-dix">
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h1 className="fw-bold mb-4">Update user</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bolder">Email</label>
                                    <input type="email" placeholder="email@email.fr" className="form-control custom-input" id="email" name="email" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label fw-bolder">Password</label>
                                    <input type="password" placeholder="Password" className="form-control custom-input mb-5" id="password" name="password" value={formData.password} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="fileInput" name="file" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <Link to="/show-user" className="btn">Cancel</Link>
                                    <button className="btn text-white btn-purple" type="submit">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateUser;
