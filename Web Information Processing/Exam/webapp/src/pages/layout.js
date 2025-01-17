import React from "react";
import { Link } from "react-router-dom";

export function Navbar() 
{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom box-shadow py-3 mb-3">
            <div className="container-fluid">
            <Link className="navbar-brand" href="#">Web App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Landlord</Link>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/tenant">Tenant</a>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
                </li>
        
    </ul>
    
    </div>
    </div>
</nav>
    );// Has all the links to the pages
}

export function Footer() //just adds a footer to the page
{
    return(
        <footer className="footer">
            <div className="container">
                <span className="text-muted">© 2024 Exam work</span>
            </div>
        </footer>
    );
}