import React, { useState } from 'react';
import Select from './Select';

const denominations = [
  { id: 1, name: '$10', value: 10 },
  { id: 2, name: '$50', value: 50 },
  { id: 3, name: '$100', value: 100 }
];

const durations = [
  { name: '7 Days', value: 7 },
  { name: '10 Days', value: 10 },
  { name: '14 Days', value: 14 },
  { name: '20 Days', value: 20 }
];

function Section5() {
  const [value, setValue] = useState('');

  function changeValue(e) {
    setValue(e.target.value);
  }

  return (
    <div className="section5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="title-container">
              <h3 className="primary-title">Apply in Three Easy Steps</h3>
              <h1 className="secondary-title">Easy Application Process For Any Types of Loan</h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <form>
              <div className="search-box">
                <div className="input">
                  <Select
                    placeholder="Select Amount"
                    list={denominations}
                    value="value"
                    text="name"
                  />
                </div>
                <div className="input">
                  <Select
                    placeholder="Duration Month"
                    list={durations}
                    value="value"
                    text="name"
                  />
                </div>
                <div className="input">
                  <input
                    type="text"
                    placeholder="Return Amount"
                    value={value}
                    onChange={changeValue}
                  />
                </div>
                <div className="input">
                  <div className="button">
                    <button>Apply For Loan</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;