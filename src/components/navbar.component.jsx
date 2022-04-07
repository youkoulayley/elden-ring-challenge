import React from 'react';
import i18next from "i18next";

const NavbarComponent = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">Elden Ring Challenge Randomizer</a>
                <div className="d-flex">
                    <button className="btn btn-outline-light" onClick={() => i18next.changeLanguage("fr")}><span className="fi fi-fr" /></button>
                    <button className="btn btn-outline-light" onClick={() => i18next.changeLanguage("en")}><span className="fi fi-gb" /></button>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent