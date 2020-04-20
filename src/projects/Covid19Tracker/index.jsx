import React, { useEffect, useState } from 'react';

import {
  Logo, Cards, Chart, CountryPicker
} from './components';

import './assets/scss/main.scss';

import { fetchData } from './api';

function Covid19Tracker() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('global');

  useEffect(() => {
    async function getData() {
      const data = await fetchData(country);
      setData(data);
    }

    getData();
  }, [country]);

  const handleCountryChange = country => {
    setCountry(country);
  }

  return (
    <div className="covid19tracker-container">
      <Logo />
      <Cards data={data} />
      <CountryPicker onCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default Covid19Tracker;