import React from "react";
import DataForm from "../components/DataForm";
import { useParams } from "react-router-dom";

function UpdateContact() {
    // Récupérer l'ID du contact à partir des paramètres d'URL
    const { contactId } = useParams();

    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5 card-shadow card-pb-dix">
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h1 className="fw-bold mb-4">Update contact</h1>
                            {/* Passer l'ID du contact à DataForm */}
                            <DataForm contactId={contactId} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateContact;
