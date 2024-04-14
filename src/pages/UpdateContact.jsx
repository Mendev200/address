import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/pages/style.css';

function UpdateContact() {
    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5 card-shadow card-pb-dix">
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h1 className="fw-bold mb-4">Update contact</h1>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label fw-bolder">Phone number</label>
                                    <input type="tel" placeholder="phone number" className="form-control custom-input w-100" id="phoneNumber" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bolder">Email</label>
                                    <input type="email" placeholder="email" className="form-control custom-input" id="email" aria-describedby="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="adresse" className="form-label fw-bolder">Adresse</label>
                                    <input type="text" placeholder="adresse" className="form-control custom-input mb-5" id="adresse" />
                                </div>
                                <div className="mb-3">
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="fileInput" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button className="btn" type="button">Cancel</button>
                                    <button className="btn text-white btn-purple" type="button">Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateContact;