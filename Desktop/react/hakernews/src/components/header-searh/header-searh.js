import React from 'react';
import "./header-searh.css"
import store from '../../store'
import {search} from '../../redux/actions'
const {dispatch} = store


export default function HeaderSearch() {
    return (
        <div className='headerSearch'>
            <form >
                <input className="search" type="search" id="search" name="search"></input>
                <div className='clear' id="clear" onClick={clearSearch}></div>
            </form>
                <div className='button' onClick={inputSearch}></div>
        </div>
    )
}

function clearSearch() {
    document.querySelector('#search').value = ''
    dispatch(search(''))
}

function inputSearch() {
    let value = document.querySelector('#search').value
    dispatch(search(value))
}

