import React from 'react';
import "./header-profil.css"
import store from '../../store'
import {singUp, singIn, accLogin} from '../../redux/actions'
import { useSelector} from 'react-redux';

export default function HeaderProfilOff() {
        const { dispatch } = store
        const toggle = useSelector(state => state.logind)
        const userInfo = useSelector(state => state.user)

        const noLogin = (
                <div className="headerProfil" key='off'>
                    <p className="login" onClick={() => dispatch(singIn(true))}>Log in</p>
                    <p className="singup" onClick={() => dispatch(singUp(true))}>Sing up</p>
                </div>
        )
        const login = (
                <div className="headerProfil" key='on'>
                    <div>
                        <p>You logined</p>
                        <a href={'/'+userInfo.id}>Your profil</a>
                    </div>
                    <div>
                        <div className="singup" onClick={() => dispatch(accLogin({}))}>log out</div>
                    </div>
                </div>
        )

        return (toggle === 'on') ? login : noLogin
                
}