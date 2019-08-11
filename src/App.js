import React from 'react';
import {BrowserRouter} from 'react-router-dom'

//import component
import MainContent from './components/MainContent';

const App = () => {
  return (
    <BrowserRouter>
        <MainContent />
    </BrowserRouter>
  );
}

export default App;
