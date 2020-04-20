import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './CountryPicker.scss';

import { getCountries } from '../../api';

CountryPicker.propTypes = {
  onCountryChange: PropTypes.func
};

CountryPicker.defaultProps = {
  onCountryChange: null
}

function CountryPicker(props) {
  const [countries, setCountries] = useState([]);
  const { onCountryChange } = props;

  useEffect(() => {
    const fetchCountries = async () => {
      setCountries(await getCountries());
    }

    fetchCountries();
  }, []);

  const handleCountryChange = e => {
    onCountryChange(e.target.value);
  }

  return (
    <div className="countrypicker-container">
      <select onChange={handleCountryChange}>
        <option value="global">Global</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>{country.name}</option>
        ))}
      </select>
    </div>
  );
}

export default CountryPicker;