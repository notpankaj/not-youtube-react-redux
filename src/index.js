import React from 'react';
import reactDom from 'react-dom';
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import "./_base.scss"
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

reactDom.render(
    <Provider store={store} >
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root')
)