import React from 'react';
import "./window-singup.css"
import store from '../../store'
import {singUp} from '../../redux/actions'
export default class WindowSingup extends React.Component {
    
    render() {
        const { dispatch } = store
    // const error = <div className="textError">Ошибка</div>

        return (
            <div className="windowSingUp">
                <div className="window">  
                    <div className='close' onClick={() => dispatch(singUp(false))}></div>
                    <form className="form" name="form" action="/">
                        Login:
                        <input className="form__input" id="login" key="login" type="text"></input>
                        Password:
                        <input className="form__input" id="password" key="password" type="password"></input>
                        Email:
                        <input className="form__input" id="email" key="email" type="email"></input>
                        <input className="form__button" id="button" key="button" type="button"></input>
                    </form>
                </div>
            </div>
        )
    }
}

const newUser = () => {
    const login = document.querySelector('#login')
    const password = document.querySelector('#password')
    const email = document.querySelector('#email')


}

