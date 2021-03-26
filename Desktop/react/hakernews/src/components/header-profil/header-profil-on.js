import React from 'react';
import "./header-profil.css"
import store from '../../store'
import {accLogin} from '../../redux/actions'

export default function HeaderProfilOn() {
        const { dispatch } = store
        
        const userInfo = store.getState().user
        const url = '/lk/'+ userInfo.id
        
        return (
            <div className="headerProfil" key='on'>
                    <div>
                        <p>You logined</p>
                        <a href={url}>Your profil</a>
                    </div>
                    <div>
                        <div className="singup" onClick={() => dispatch(accLogin({}))}>log out</div>
                    </div>
                </div>
        )
                  
}