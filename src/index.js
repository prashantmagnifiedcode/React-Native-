import React from 'react';
import ReactDOM from 'react-dom';
import store from './redox/store.jsx'
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
ReactDOM.render(
  <>
  <BrowserRouter>
  <Provider store ={store}>
    <App/>
    </Provider>
  </BrowserRouter>
  </>
  ,

  document.getElementById('root')
);
