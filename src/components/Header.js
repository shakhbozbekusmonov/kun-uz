import React from 'react';
import '../sass/header.scss';
import {LANGUAGE} from "../tools/contants";
import {Link} from "react-router-dom";
import {getLanguage, getText} from "../locales";

const Header = () => {
    const changeLanguage = (e)=> {
        localStorage.setItem(LANGUAGE, e.target.value);
        document.location.reload(true);
        let loc = "http://localhost:3000/";
        window.location.replace(loc + e.target.value);
    }

    return (
        <nav className='header'>
            <div className="navbar">
                <Link to="/uz" className="navbar-brand">
                    <img src="/images/logo.svg" alt="Kun-uz"/>
                </Link>

                <ul className="nav">
                    <li className="nav-item"><Link to="/uzbekistan" className="nav-link">{getText("uzbek")}</Link></li>
                    <li className="nav-item"><Link to="/jahon" className="nav-link">{getText("global")}</Link></li>
                    <li className="nav-item"><Link to="/texnalogiya" className="nav-link">{getText("tech")}</Link></li>
                    <li className="nav-item"><Link to="/sport" className="nav-link">{getText("sport")}</Link></li>
                    <li className="nav-item"><Link to="/biznes" className="nav-link">{getText("business")}</Link></li>
                    <li className="nav-item"><Link to="/songi-yangiliklar" className="nav-link">{getText("last")}</Link></li>
                </ul>

                <div>
                    <select onChange={changeLanguage} className='form-control'>
                        <option value="uz" selected={getLanguage() === "uz"}>Uzbek</option>
                        <option value="ru" selected={getLanguage() === "ru"}>Russian</option>
                        <option value="en" selected={getLanguage() === "en"}>English</option>
                    </select>
                </div>
            </div>
        </nav>
    );
};

export default Header;
