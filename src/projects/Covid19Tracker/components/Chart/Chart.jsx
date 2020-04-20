import React, { useState, useEffect } from 'react';

import './Chart.scss';

import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import app from '../../utils/config.json';

function Chart(props) {
  const [dailyData, setDailyData] = useState([]);
  const { data, country } = props;
  const { confirmed, recovered, deaths } = data;

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  const lineChart = (
    dailyData.length ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            label: 'Infected',
            data: dailyData.map(({ confirmed }) => confirmed),
            borderColor: app.color.infected,
            backgroundColor: app.backgroundColor.infected,
            fill: true,
          }, {
            label: 'Deaths',
            data: dailyData.map(({ deaths }) => deaths),
            borderColor: app.color.deaths,
            backgroundColor: app.backgroundColor.deaths,
            fill: true,
          }]
        }}
      />
    ) : null
  );

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [{
            label: 'People',
            backgroundColor: [
              app.backgroundColor.infected,
              app.backgroundColor.recovered,
              app.backgroundColor.deaths
            ],
            data: [confirmed.value, recovered.value, deaths.value]
          }]
        }}
        options={{
          legend: { display: false },
          title: {
            display: true,
            text: `Current state in ${country}`
          }
        }}
      />
    ) : null
  );

  return (
    <div className="chart-container">
      {country === 'global' ? lineChart : barChart}
    </div>
  );
}

export default Chart;