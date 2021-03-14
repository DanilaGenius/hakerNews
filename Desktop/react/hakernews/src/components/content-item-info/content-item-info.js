import React, {Component} from 'react';
import './content-item-info.css'

export default class ContentItemInfo extends Component {
    render() {
        const {data, autor, points, autorId} = this.props
        return (
            <p className="item-info">
                {data} &nbsp;<b>|</b>&nbsp; {points} points  &nbsp;<b>|</b>&nbsp; by &nbsp;
                <a href={'/' + autorId} className="info-link">{autor}</a>
            </p>
        )
    }
}