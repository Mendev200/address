import React from "react";
import DataForm from "../components/DataForm";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/pages/style.css';

function UpdateUser() {
    const { userId } = useParams();
    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5 card-shadow card-pb-dix">
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h1 className="fw-bold mb-4">Update user</h1>
                            <DataForm userId={userId} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateUser;
