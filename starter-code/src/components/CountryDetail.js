import React from 'react';

import { countryList } from './Countries'; // countryList array with projects which we'll get with the countryId
import { Link } from 'react-router-dom';



const getCountryId = (id) => {
const result = countryList.find( (country) => country.cca3 === id)
// // takes original array, first occurence that returns true, stops. findAll => filter.  
    return result; 
}

export default function CountryDetail(props) {
    console.log('hola props',props);
  
    const { countryId } = props.match.params;
    const selectedCountry = getCountryId(countryId);
  
    // const borderCountry = selectedCountry.borders.forEach (countryId)

    return (
      <div>
        
        <h1>{selectedCountry.name.official}</h1>
        <table>
        <tr>
            <th> Capital </th>
            <td> {selectedCountry.capital}   </td>
        </tr>

        <tr>
            <th> Área</th>
            <td>  {selectedCountry.area} km2  </td>
        </tr>

        <tr>
            <th>Borders</th>
            <td><ul>
                  { selectedCountry.borders &&
                    selectedCountry.borders.map(cca3 => {
                      return (
                        <li key={cca3}>
                          <Link to={"/" + cca3}>
                            {
                                countryList.find(country => country.cca3 === cca3)
                                .name.common
                            }
                          </Link>
                        </li>
                      );
                    })
                  }
                </ul></td>
        </tr>

        </table>

  

        <Link to="/">Back</Link>

        {/* alternative option to go back instead of rediridct or router : 
         <button onClick={ () => props.history.push('/') } >DASHBOARD</button> */}
      </div>
    );
  }
  
