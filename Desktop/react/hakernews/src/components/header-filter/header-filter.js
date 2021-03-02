import React, {Component} from 'react';
import "./header-filter.css"

export default class HeaderFilter extends Component {
    render() {
        return (
            <div className="headerFilter">
                <div className="filter"></div>
                <div className="filterWindow">
                </div>
            </div>
        )
    }
}