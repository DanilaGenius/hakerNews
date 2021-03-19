import React from 'react';
import "./window-singup.css"
import store from '../../store'
import {singUp} from '../../redux/actions'
import users from "../../users"

export default class WindowSingup extends React.Component {
    constructor() {
        super()
        this.state = {
            massage: '',
            color: '',
        } 
    }

    newUser = (arrUsers) => {
        const login = document.querySelector('#login').value
        const password = document.querySelector('#password').value
        const email = document.querySelector('#email').value
        const id = Math.floor(Math.random()*1000)
        const allLogin = arrUsers.map(e =>  e.login)
        const allEmail = arrUsers.map(e =>  e.email)

        if (login === '' ||
            password === '' ||
            email === '') {
                this.setState({massage: "error, wrong data", color: 'red'})
            } else if (
                allLogin.includes(login)
            ) {
                this.setState({massage: "this login is already in use", color: 'yellow'})
            } else if (allEmail.includes(email)) {
                this.setState({massage: "this email is already in use", color: 'yellow'})
            } else {
                const newUser = {
                    id: id,
                    login: login,
                    password: password,
                    email: email,
                }
                arrUsers.push(newUser)
                this.setState({massage: "registration successful", color: 'green'})
            }  
    }

    render() {
        const { dispatch } = store

        return (
            <div className="windowSingUp">
                <div className="window">  
                    <div className='close' onClick={() => dispatch(singUp(false))}></div>
                    <div className="textError" style={{color: this.state.color}}>{this.state.massage}</div>
                    <form className="form" name="form" action="/">
                        Login:
                        <input className="form__input" id="login" key="login" type="text"></input>
                        Password:
                        <input className="form__input" id="password" key="password" type="password"></input>
                        Email:
                        <input className="form__input" id="email" key="email" type="email"></input>
                        <input className="form__button" 
                        id="button" key="button" type="button" 
                        onClick={() => this.newUser(users)}>
                        </input>
                    </form>
                </div>
            </div>
        )
    }
}



