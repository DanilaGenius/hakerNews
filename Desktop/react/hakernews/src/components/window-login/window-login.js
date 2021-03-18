import React from 'react';
import './window-login.css'
import store from '../../store'
import {singIn} from '../../redux/actions'
// import users from "../../users"


export default function WindowLogin() {
    const { dispatch } = store
    // const error = <div className="textError">Ошибка</div>

    return (
        <div className="WindowLogin">
            <div className="window">
                <div className='close' onClick={() => dispatch(singIn(false))}></div>
                <form className="form" name="form" action="/">
                    Login:
                    <input className="form__input" id="text" key="text" type="text"></input>
                    Password:
                    <input className="form__input" id="password" key="password" type="password"></input>
                    <input className="form__button" id="button" key="button" type="button"></input>
                </form>
            </div>
        </div>
    )
}

