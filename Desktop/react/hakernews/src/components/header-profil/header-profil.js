import React from 'react';
import "./header-profil.css"
import store from '../../store'
import {singUp, singIn} from '../../redux/actions'

export default function HeaderProfil() {
        const { dispatch } = store

        return (
            <div className="headerProfil">
                <p className="login" onClick={() => dispatch(singIn(true))}>Log in</p>
                <p className="singup" onClick={() => dispatch(singUp(true))}>Sing up</p>
            </div>
        )
}