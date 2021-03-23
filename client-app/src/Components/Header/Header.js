import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">Characters Logo</Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link to="/add" href="#" className="nav-link">Add new</Link>
                                    </li>
                                    
                                    <li class="nav-item">
                                    </li>
                                </ul>
                                <form class="d-flex justify-content-end">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        
    )
}

export default Header;