import { Link } from "react-router-dom";
import ContactListCard from "../components/ContactListCard";
import '../css/pages/style.css';

function Home() {

    return (
        <div>
            <div className="d-flex justify-content-between m-3">
                <Link to="/add-contact" className="btn-purple text-white text-decoration btn">Add new contact</Link>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="scroll-horizontal">
                <ContactListCard />
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
