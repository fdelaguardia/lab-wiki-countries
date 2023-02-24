
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CountryDetails({ alpha3Code, name, borders = [] }) {

    const [countryData, setCountryData] = useState([])

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
        .then(response => {
            setCountryData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    })

  return (
    <div className="col-7">
    <h1>{name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{countryData.capital} </td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryData.area}
              <sup>2</sup>
            </td>
          </tr>
          {borders.length > 0 && (
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {borders.map((border) => (
                    <li key={border}>
                      <Link to={`/${border}`}>{border}</Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;