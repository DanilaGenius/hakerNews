import React, {Component} from 'react';
import HeaderLogo from "../header-logo/header-logo"
import HeaderSearch from "../header-searh/header-searh"
import HeaderFilter from "../header-filter/header-filter"
import HeaderProfil from "../header-profil/header-profil"
import './header.css';



export default class Header extends Component {
    
    render() {
        return (
            <header className="header">
                <HeaderLogo />
                <HeaderSearch />
                <HeaderFilter />
                <HeaderProfil />
            </header>
        )
    }
}


