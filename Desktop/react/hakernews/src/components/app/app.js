import React, {Component} from 'react';
import Header from '../header/header'
import Content from '../content/content';
import ListPages from '../list-pages/list-pages'
import Footer from '../footer/footer'
import './app.css'
// 320


export default class App extends Component {
    render() {
       return (
        <div className="app">
            <Header />
            <Content />
            <ListPages />
            <Footer />
        </div>
       )
    }
}