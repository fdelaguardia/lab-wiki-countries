import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="container row col-5">
      {countries.map((eachCountry) => (
        <div key={eachCountry.alpha3Code}>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="flag" />
          <Link to={`/${eachCountry.alpha3Code}`} className="list-group-item list-group-item-action">
            {eachCountry.name.common}
          </Link>
        </div>
      ))}
    </div>
  );
};
export default CountriesList;