import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header.js';
import ControlledCarousel from './components/main/Slide.js';
import TheCard from './components/main/Card' ;
import Pagination from './components/main/Pagination'
import FooterPage from './components/footer/FooterPage'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>

      <Header />
      <ControlledCarousel /><br></br>
      < TheCard/><br></br>
      < TheCard /> <br></br>
     < Pagination/><br></br>
     <FooterPage />
     
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister(); 
 