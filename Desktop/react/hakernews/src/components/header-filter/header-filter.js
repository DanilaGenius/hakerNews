import React, {Component} from 'react';
import HeaderFilterWindow from '../header-filter-window/header-filter-window'
import "./header-filter.css"
import store from '../../store'
import filterWindow from '../../redux/actions'


class HeaderFilter extends Component {
    render() {
        const {dispatch} = store
        return (
            <div className="headerFilter">
                <div className="filter" onClick={() => dispatch(filterWindow(store.getState()))}></div>
                <HeaderFilterWindow />
            </div>
        )
    }
}

export default HeaderFilter


