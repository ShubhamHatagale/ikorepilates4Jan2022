
import React, { lazy, Suspense } from 'react';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import { ThemeProvider } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

const Routes = lazy(() => import("./Routes"))


function App() {

  const theme = {

  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<h1>loading...</h1>} >
          <Routes />
        </Suspense>
      </ThemeProvider>
    </div>


  );
}

export default App;
