
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<CountriesList countries={countries} />} />
        
        {countries.map((eachCountry) => (
         <Route key={eachCountry.alpha3Code} path={`/${eachCountry.alpha3Code}`} element={<CountryDetails {...eachCountry} />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;