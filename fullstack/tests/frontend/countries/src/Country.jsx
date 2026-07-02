function Country({ country }) {
    const languages = country.languages ? Object.values(country.languages) : [];
    const capital = country.capital ? Object.values(country.capital) : [];
  return (
    <div className="country">
      <div>
        <h2>{country.name.common}</h2>
        <p>Population: {country.population}</p>
        <p>Language: {languages.join(', ')}</p>
        <p>Capital: {capital.join(', ')}</p>
      </div>
      <img className="card_flag" src={country.flags.png} alt={`Flag of ${country.name}`} />
    </div>
  );
}

export default Country;

