import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// import countries from './countries.json'
import CountryDetail from './components/CountryDetail'

import {Countries} from './components/Countries'


function App() {
   
   return (
    <div className="App">
        
        <nav className ="navbar navbar-dark bg-primary">
          WikiCountries
        </nav>
        <Route exact path="/" component={Countries} />
        <Route exact path="/:countryId" component={CountryDetail} />
 
    </div>
  );
}

export default App;
