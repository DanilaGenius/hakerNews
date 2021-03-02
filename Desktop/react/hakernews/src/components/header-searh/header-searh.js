import React, {Component} from 'react';
import "./header-searh.css"

export default class HeaderSearch extends Component {
    render() {
        return (
            <div className='headerSearch'>
                <form >
                    <input className="search" type="search" id="search" name="search"></input>
                    <div className='clear'></div>
                </form>
                    <div className='button'></div>
            </div>
        )
    }
}