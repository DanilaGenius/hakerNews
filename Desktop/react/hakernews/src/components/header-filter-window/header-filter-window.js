import React from 'react';
import "./header-filter-window.css";
import {filterValueChange} from '../../redux/actions'
import { useSelector} from 'react-redux';
import store from '../../store'

function HeaderFilterWindow() {
    const {dispatch} = store
    const filterActive = useSelector(state => state.filterWindow)
    const filterPosition = useSelector(state => state.filterPosition)
    
    const valueFilter = ['new', 'popular', 'liked']
    
    if (filterActive) {
        return (
            <div className="filterWindow">
                <ul className="filterList">
                    {valueFilter.map(value => {
                        const toggle = (filterPosition === value) ? "filterElem filterElem--selected" : "filterElem"
                        return (
                            <li 
                             id={value} key={value}
                             className={toggle}
                             onClick={() => dispatch(filterValueChange(value))}
                             
                             >{value}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    } else {
        return null
    }
}

export default HeaderFilterWindow