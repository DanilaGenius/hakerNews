import React, {Component} from 'react';
import './content-item-info.css'

export default class ContentItemInfo extends Component {
    render() {
        return (
            <p className="item-info">
                1 day ago &nbsp;<b>|</b>&nbsp; 5 points  &nbsp;<b>|</b>&nbsp; by &nbsp;
                <a href='/' className="info-link">nikName</a>
            </p>
        )
    }
}