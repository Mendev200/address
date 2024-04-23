import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ userId }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <Link className="navbar-brand" to={`/home/${userId}`}>
                    <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" className="ms-3" />
                </Link>
                <Link to="/show-user">Show User</Link>
            </nav>
        </div>
    );
}

export default Header;

