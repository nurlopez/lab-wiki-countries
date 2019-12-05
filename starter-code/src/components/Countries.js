import React from 'react'
import countries from './../countries.json'

import { Link } from 'react-router-dom'


export const countryList = countries
 

export const Countries = () => {
    return (
      <div>
        <h2>Countries:</h2>
        {countryList.map(country => {
          return (
            <div key={country.cca3} className="country">
              
              <Link to= {`/${country.cca3}`} >
              <p className ="text-left">{country.flag}{country.name.official}</p>
              </Link>
        
            </div>
          );
        })}
      </div>
    );
  };
  
