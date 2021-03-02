import React, {Component} from 'react';
import ListPagesNumber from '../list-pages-number/list-pages-number'
import "./list-pages.css"

export default class ListPages extends Component {
    render() {
        return (
            <ul className="listPages">            
                <ListPagesNumber />
            </ul>
        )
    }
}