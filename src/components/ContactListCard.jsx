import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete";
import { getContactList } from "../components/api/getContactList";

const ContactListCard = () => {
    const [contacts, setContacts] = useState([]); // État pour stocker les contacts

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const contactsData = await getContactList(); // Utilisation de la fonction getContactList pour récupérer les contacts depuis l'API
                setContacts(contactsData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchContacts(); // Appeler fetchContacts une fois que le composant est monté
    }, []); // Utilisez une dépendance vide pour ne l'appeler qu'une seule fois

    return (
        // Affiche chaque contact dans la liste
        <div className="scroll-horizontal">
            {contacts.map((contact) => (
                <div key={contact.id} className="">
                    <div className="d-flex flex-column align-items-center ms-4">
                        <img src={`/images/${contact.avatar}`} alt="Avatar" className="mb-4 rounded-circle" style={{ width: '150px' }} />
                        <h5 className="card-title fw-bold">{contact.fullName}</h5>
                        <p className="card-text">{contact.professionalTitle}</p>
                        <div className="card p-4 mt-3 mx-auto">
                            <ul className="list-group list-group-flush mb-5">
                                <li className="card-text list-group-item my-3">Tel: {contact.phoneNumber}</li>
                                <li className="card-text list-group-item my-3">Email: {contact.email}</li>
                                <li className="card-text list-group-item my-3">Address: {contact.address}</li>
                            </ul>
                            <div className="d-flex justify-content-end">
                                <Link to={`/update-contact/${contact.id}`} className="btn btn-primary me-4">Update</Link>
                                <Delete contactId={contact.id} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactListCard;
