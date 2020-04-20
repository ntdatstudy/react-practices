import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country !== 'global') {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {

  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map(dataDaily => ({
      confirmed: dataDaily.confirmed.total,
      deaths: dataDaily.deaths.total,
      date: dataDaily.reportDate
    }));

    return modifiedData;
  } catch (error) {

  }
}

export const getCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`)

    return countries.map(country => ({
      name: country.name,
      iso2: country.iso2
    }));
  } catch (error) {

  }
}