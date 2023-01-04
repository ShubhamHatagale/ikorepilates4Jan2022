
import React from 'react';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Routes from './Routes'
import { ThemeProvider } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';


// import Header from './Components/Header';
// import Slidersection from './Components/Slidersection';
// import Aboutsection from './Components/Aboutsection';
// import Ourgoalsection from './Components/Ourgoalsection';
// import Countersection from './Components/Countersection';
// import Servicesection from './Components/Servicesection';
// import Portfoliogallery from './Components/Portfoliogallery';
// import Testimonial from './Components/Testimonial';
// import Calltoactionsection from './Components/Calltoactionsection';
// import Teamsection from './Components/Teamsection';
// import Footersection from './Components/Footersection';
function App() {

  const theme = {

  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>


  );
}

export default App;
