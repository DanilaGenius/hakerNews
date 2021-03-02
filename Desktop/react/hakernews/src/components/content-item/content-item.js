import React, {Component} from 'react';
import ContentItemHeader from '../content-item-header/content-item-header'
import ContentItemInfo from '../content-item-info/content-item-info'
import './content-item.css'

export default class ContentItem extends Component {
    render() {
        return (
            <div className="content-item">
                <ContentItemHeader />
                <ContentItemInfo />
            </div>
        )
    }
}