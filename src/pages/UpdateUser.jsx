import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/pages/style.css';

function UpdateUser ()
{
    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5 card-shadow card-pb-dix">
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h1 className="fw-bold mb-4">Update user</h1>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bolder">Email</label>
                                    <input type="email" placeholder="email@email.fr" className="form-control custom-input" id="email" aria-describedby="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label fw-bolder">Password</label>
                                    <input type="password" placeholder="Password" className="form-control custom-input mb-5" id="password" />
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

export default UpdateUser;