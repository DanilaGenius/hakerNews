import React from 'react';
import './window-login.css'
import store from '../../store'
import {singIn, accLogin} from '../../redux/actions'
import users from "../../users"


export default class WindowLogin extends React.Component {
    constructor() {
        super()
        this.state = {
            massage: '',
            color: '',
        } 
        this.users = users
        
    }

    login = (arrUsers) => {
        const { dispatch } = store
        const login = document.querySelector('#login').value
        const password = document.querySelector('#password').value
        
        const user = arrUsers.filter(e => e.login === login && e.password === password)
        
        if (user.length >= 1) {
            this.setState({massage: "you are logged", color: 'green'})
            dispatch(accLogin(user[0]))
            dispatch(singIn(false))
        } else {
            this.setState({massage: "invalid login or password", color: 'red'})
        }

    }

    render() {
        const { dispatch } = store
        return (
            <div className="WindowLogin">
                <div className="window">
                    <div className='close' onClick={() => dispatch(singIn(false))}></div>
                    <div className="textError" style={{color: this.state.color}}>{this.state.massage}</div>
                    <form className="form" name="form" action="/">
                        Login:
                        <input className="form__input" id="login" key="login" type="text"></input>
                        Password:
                        <input className="form__input" id="password" key="password" type="password"></input>
                        <input className="form__button" id="button" key="button" type="button"
                        onClick={() => {this.login(this.users)}}></input>
                    </form>
                </div>
            </div>
        )
    }
}

