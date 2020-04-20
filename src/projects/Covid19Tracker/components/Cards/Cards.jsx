import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

import './Cards.scss';

Cards.propTypes = {
  data: PropTypes.object.isRequired
};

function Cards(props) {
  const [recoveredPercent, setRecoveredPercent] = useState('0');
  const [deathsPercent, setDeathsPercent] = useState('0');
  const { confirmed, recovered, deaths } = props.data;
  const lastUpdate = new Date(props.data.lastUpdate).toDateString();

  useEffect(() => {
    if (confirmed) {
      setRecoveredPercent(`${recovered.value * 100 / confirmed.value}%`);
      setDeathsPercent(`${deaths.value * 100 / confirmed.value}%`);
    }
  }, [props]);
  console.log(recoveredPercent);
  return (
    <div className="cards-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 card-container">
            <div className="card infected">
              {!confirmed ? (
                <span className="loading">Loading...</span>
              ) : (
                <>
                  <h1 className="title">Infected</h1>
                  <div className="caption">
                    <p className="number">
                      <CountUp start={0} end={confirmed.value} duration={2} separator="," />
                    </p>
                    <p className="date">{lastUpdate}</p>
                    <p className="content">Number of active cases of COVID-19</p>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col-sm-4 card-container">
            <div className="card recovered">
              {!recovered ? (
                <span className="loading">Loading...</span>
              ) : (
                <>
                  <h1 className="title">Recovered</h1>
                  <div className="caption">
                    <p className="number">
                      <CountUp start={0} end={recovered.value} duration={2} separator="," />
                    </p>
                    <p className="date">{lastUpdate}</p>
                    <p className="content">Number of recoveries from COVID-19</p>
                  </div>
                  <div className="percent">
                    <div className="value" style={{ height: `${recoveredPercent}` }}></div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col-sm-4 card-container">
            <div className="card deaths">
              {!deaths ? (
                <span className="loading">Loading...</span>
              ) : (
                <>
                  <h1 className="title">Deaths</h1>
                  <div className="caption">
                    <p className="number">
                      <CountUp start={0} end={deaths.value} duration={2} separator="," />
                    </p>
                    <p className="date">{lastUpdate}</p>
                    <p className="content">Number of deaths caused by COVID-19</p>
                  </div>
                  <div className="percent">
                    <div className="value" style={{ height: `${deathsPercent}` }}></div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;