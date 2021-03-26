import React from 'react';
import {useSelector} from 'react-redux'
import ChangePass from './ChangePass/ChangePass'
import './personalArea.css'

function PersonalArea() {
    const user = useSelector(state => state.user)
    const logined = useSelector(state => state.logind)
    const {id, login, password, email} = user

    if (logined === 'on') {
        return (
            <div className="lk">
                <p className="lk__text">id: {id}</p>
                <p className="lk__text">login: {login}</p>
                <p className="lk__text">password: {password}</p>
                <p className="lk__text">email: {email}</p>
                <br></br>
                Change password
                <ChangePass />
            </div>  
        )
    } else {
        return (
            <div className="lk">
                <p className="lk__text">Come in personal area</p>
            </div> 
        )
    }
}

export default PersonalArea