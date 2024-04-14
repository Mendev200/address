import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ShowUser() {
    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5 card-pb-dix">
                        <div className="card-body d-flex justify-content-between">
                            <div className="d-flex align-items-start"> 
                                <img src={process.env.PUBLIC_URL + '/images/icon.png'} alt="icon" className="p-2 bg-warning rounded " style={{width: '48px'}} />
                                <div className="d-flex flex-column ms-3"> 
                                    <h1 className="fs-5 fw-bold text-center">Email</h1>
                                    <p>Password</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column mt-3">
                                    <button className="btn btn-primary mb-2" type="button">Update</button>
                                    <button className="btn text-white btn-danger" type="button">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
}

export default ShowUser;
