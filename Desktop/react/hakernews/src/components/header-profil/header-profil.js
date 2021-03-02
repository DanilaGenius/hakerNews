import React, {Component} from 'react';
import "./header-profil.css"

export default class HeaderProfil extends Component {
    render() {
        return (
            <div className="headerProfil">
                <p className="login">Log in</p>
                <p className="singup">Sing up</p>
            </div>
        )
    }
}