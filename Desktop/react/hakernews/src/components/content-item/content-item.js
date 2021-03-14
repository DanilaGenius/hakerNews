import React from 'react';
import ContentItemHeader from '../content-item-header/content-item-header'
import ContentItemInfo from '../content-item-info/content-item-info'
import './content-item.css'
import { useSelector } from 'react-redux';


export default function ContentItem()  {
        const server = useSelector(state => state.contentList)
        const filterPosition = useSelector(state => state.filterPosition)
        const searchValue = useSelector(state => state.searchValue)
        let db;

        if (filterPosition === 'new') {
            db = server.sort((a,b) => a.dataInMin - b.dataInMin)
        } else if (filterPosition === 'popular') {
            db = server.sort((a,b) => b.points - a.points)
        } else if (filterPosition === 'liked') {
            db = server.filter(elem => elem.like)
        } else {
            db = server
        }

        return (
            db.map( (elem) => {
                const {id, title, data, autor, points, autorId, like} = elem
                const liked = like ? "content-item like" : "content-item"
                if (title.indexOf(searchValue) !== -1) {
                    return (
                        <div key={id} className={liked}>
                        <ContentItemHeader title={title}/>
                        <ContentItemInfo data={data} autor={autor} points={points} autorId={autorId}/>
                        </div>
                    )
                } else {return null}
                
            })
        )
}