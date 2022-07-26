import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import rootReducer from './reducers/index.js';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import {createBrowserHistory} from 'history';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));


const root = ReactDOM.createRoot(document.getElementById('root'));
const history = createBrowserHistory();
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter history={history}>
    <App/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
