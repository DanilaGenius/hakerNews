import React, {Component} from 'react';
import Header from '../header/header'
import Content from '../content/content';
import ListPages from '../list-pages/list-pages'
import Footer from '../footer/footer'
import './app.css'
import { Provider } from 'react-redux'
import store from '../../store'


export default class App extends Component {
    render() {
       return (
        <Provider store={store}>
            <div className="app">
                <Header />
                <Content />
                <ListPages />
                <Footer />
            </div>
        </Provider>
       )
    }
}
