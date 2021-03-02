import React, {Component} from 'react';
import './content-item-header.css'

export default class ContentItemHeader extends Component {
    render() {
        return (
            <div className="item-header">
                <a href='/' className="header-link">
                    The Doting Boyfriend   
                </a>
            </div>
        )
    }
}