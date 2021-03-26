import React from 'react';
import {useSelector} from 'react-redux'
import store from '../../../store'
import {accLogin} from '../../../redux/actions'
import users from '../../../users'


function ChangePass() {
    const id = useSelector(state => state.user.id)
    const user = users.find(e => e.id === id)
    const {dispatch} = store
    

    function changePassword() {
        const newPassword = document.querySelector('#newPass').value 
        const oldPassword = document.querySelector('#oldPass').value 

        if (oldPassword === user.password) {
            user.password = newPassword
            dispatch(accLogin(''))
            console.log(store.getState())
            
        }
    }

    return (
        <form>
            <input id="oldPass" type="password"></input>
            <input id="newPass" type="password"></input>
            <input type="button" onClick={() => changePassword('1')}></input>
        </form>
    )
}




export default ChangePass 