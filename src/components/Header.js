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
            <div className="hudud">
                <ul className="nav">
                    <li className="nav-item"><p className="hudud-title text-white nav-link">Hudud</p></li>
                    <li className="nav-item"><a href="" className="nav-link">Toshkent</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Qoraqalpog'iston</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Andijon</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Farg'ona</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Namangan</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Samarqand</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Buxoro</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Xorazm</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Surxondaryo</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Qashqadaryo</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Jizzax</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Sirdaryo</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Toshkent vil.</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Navoiy</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
