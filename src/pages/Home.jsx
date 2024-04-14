import React from "react";
import { Link } from "react-router-dom";
import '../css/pages/style.css';

function Home() {
    return (
        <div>
            <div className="d-flex justify-content-between m-5">
                <Link to="/add-contact" className="btn-purple text-white text-decoration btn">Add new contact</Link>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="d-flex flex-column align-items-center">
                <img src={process.env.PUBLIC_URL + '/images/avatar.png'} alt="Logo" className="mb-4 rounded-circle" style={{ width: '150px' }} />
                <h5 className="card-title fw-bold">Full Name</h5>
                <p className="card-text">Professional Title</p>
                <div className="card p-4 mt-3 mx-auto">
                    <ul className="list-group list-group-flush mb-5">
                        <li key="tel" className="card-text list-group-item my-3">Tel: 123-456-7890</li>
                        <li key="email" className="card-text list-group-item my-3">Email: example@example.com</li>
                        <li key="address" className="card-text list-group-item my-3">Address: 123 Street, City, Country</li>
                    </ul>
                    <div className="d-flex justify-content-end">
                        <Link to="/update-user" className="btn btn-primary me-4">Update</Link>
                        <Link className="btn btn-danger">Delete</Link>
                    </div>
                </div>
            </div>
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
