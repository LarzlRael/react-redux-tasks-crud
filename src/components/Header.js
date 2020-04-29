import React from 'react';
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="navbar navbad-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1>
                    <Link to={'/'} className="text-light">
                        Crud -React,Redux REST API & AXIOS
                    </Link>
                </h1>
            </div>
            <Link to={"/productos/nuevo"}
                className="btn btn-danger nuevo-post d-block d-md-inline-block"
            >Agregar producto &#43; </Link>
        </div>
    );
}

export default Header;