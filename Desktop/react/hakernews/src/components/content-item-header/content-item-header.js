import React, {Component} from 'react';
import './content-item-header.css'

export default class ContentItemHeader extends Component {
    render() {
        const {title} = this.props
        return (
            <div className="item-header">
                <a href='/' className="header-link">
                    {title}   
                </a>
            </div>
        )
    }
}