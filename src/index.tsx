import React from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './scss/slider.scss';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setupStore } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const store = setupStore();

ReactDOM.render(
   <Router>
      <Provider store={store}>
         <App />
      </Provider>
   </Router>,
   document.getElementById('root')
);

reportWebVitals();
