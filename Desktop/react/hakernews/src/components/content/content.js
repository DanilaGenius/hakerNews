import React, {Component} from 'react';
import ContentItem from "../content-item/content-item"
import './content.css'


export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <ContentItem />
            </div>
        )
    }
}