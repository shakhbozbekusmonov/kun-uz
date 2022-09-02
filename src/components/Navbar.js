import React from 'react';
import {LANGUAGE} from "../tools/contants";

const Navbar = () => {
    const changeLanguage = (e)=> {
        localStorage.setItem(LANGUAGE, e.target.value);
        document.location.reload(true);
        let loc = "http://localhost:3000/";
        window.location.replace(loc + e.target.value);
    }

    const getLanguage = () => {
        return localStorage.getItem(LANGUAGE);
    };
    return (
        <div>
            <select onChange={changeLanguage}>
                <option value="uz" selected={getLanguage() === "uz"}>UZ</option>
                <option value="ru" selected={getLanguage() === "ru"}>RU</option>
                <option value="en" selected={getLanguage() === "en"}>EN</option>
            </select>
        </div>
    );
};

export default Navbar;
