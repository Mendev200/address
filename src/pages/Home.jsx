import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Delete from "../components/Delete";
import { getContactList } from "../components/api/getContactList"; // Import de la fonction ContactListApi

import '../css/pages/style.css';

function Home() {
    const [contacts, setContacts] = useState([]); // État pour stocker les contacts

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const contactsData = await getContactList(); // Utilisation de la fonction ContactListApi pour récupérer les contacts
                setContacts(contactsData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchContacts(); // Appeler fetchContacts une fois que le composant est monté
    }, []); // Utilisez une dépendance vide pour ne l'appeler qu'une seule fois

    return (
        <div>
            <div className="d-flex justify-content-between m-5">
                <Link to="/add-contact" className="btn-purple text-white text-decoration btn">Add new contact</Link>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            {/* Affiche chaque contact dans la liste */}
            {contacts.map((contact) => (
                <div key={contact.id} className="d-flex flex-column align-items-center">
                    <img src={contact.avatar} alt="Avatar" className="mb-4 rounded-circle" style={{ width: '150px' }} />
                    <h5 className="card-title fw-bold">{contact.fullName}</h5>
                    <p className="card-text">{contact.professionalTitle}</p>
                    <div className="card p-4 mt-3 mx-auto">
                        <ul className="list-group list-group-flush mb-5">
                            <li key="tel" className="card-text list-group-item my-3">Tel: {contact.phoneNumber}</li>
                            <li key="email" className="card-text list-group-item my-3">Email: {contact.email}</li>
                            <li key="address" className="card-text list-group-item my-3">Address: {contact.address}</li>
                        </ul>
                        <div className="d-flex justify-content-end">
                            <Link to={`/update-contact/${contact.id}`} className="btn btn-primary me-4">Update</Link>
                            <Delete />
                        </div>
                    </div>
                </div>
            ))}
            <div className="d-flex justify-content-end me-5">
                <nav aria-label="Page navigation example ">
                    <ul className="pagination">
                        <li className="page-item">
                            <Link className="page-link" to="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                        <li className="page-item">
                            <Link className="page-link" to="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Home;
