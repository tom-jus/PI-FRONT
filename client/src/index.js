import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from '../src/redux/store';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

// Con esto le decimos a axios que todas las peticiones que haga empiecen con esa URL
// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = 'https://pi-back-production-bee8.up.railway.app';

// Renderizo la app
ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter> 
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
