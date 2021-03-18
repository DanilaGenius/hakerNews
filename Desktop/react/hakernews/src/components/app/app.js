import React from 'react';
import Header from '../header/header'
import Content from '../content/content';
import ListPages from '../list-pages/list-pages'
import Footer from '../footer/footer'
import WindowSingup from '../window-singup/window-singup'
import WindowLogin from '../window-login/window-login'
import './app.css'
import {useSelector} from 'react-redux'





export default function App() {
        const singIn = useSelector(state => state.singIn)
        const singUp = useSelector(state => state.singUp)
        return (
            <div className="app">
                {(singIn) && <WindowLogin /> }
                {(singUp) && <WindowSingup /> }
                

                <Header />
                <Content />
                <ListPages />
                <Footer />
            </div>
        )
}
