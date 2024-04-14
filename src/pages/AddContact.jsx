import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom"; // Import de Navigate depuis react-router-dom
import { postAddContact } from "../components/api/postAddContact";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/pages/style.css';

function AddContact() {
    const [formData, setFormData] = useState({
        phoneNumber: "",
        email: "",
        address: "",
        file: null
    });
    const [redirect, setRedirect] = useState(false); // État pour gérer la redirection après l'ajout réussi

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
            await postAddContact(formData);
            setRedirect(true); // Déclenche la redirection après un ajout réussi
        } catch (error) {
            console.error(error);
        }
    };

    if (redirect) {
        return <Navigate to="/home" />; // Utilise Navigate pour rediriger vers "/home" après un ajout réussi
    }

    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5 card-shadow card-pb-dix">
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h1 className="fw-bold mb-4">Add contact</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label fw-bolder">Phone number</label>
                                    <input type="tel" placeholder="phone number" className="form-control custom-input w-100" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bolder">Email</label>
                                    <input type="email" placeholder="email" className="form-control custom-input" id="email" name="email" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label fw-bolder">Address</label>
                                    <input type="text" placeholder="address" className="form-control custom-input mb-5" id="address" name="address" value={formData.address} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="fileInput" name="file" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <Link to="/home" className="btn">Cancel</Link>
                                    <button className="btn text-white btn-purple" type="submit">Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddContact;
