import React, { useState } from 'react';
import './RentCalculator.css';

const RentCalculator = () => {
  const [baseRent, setBaseRent] = useState(20000);
  const [powerBill, setPowerBill] = useState(300);
  const [waterBill, setWaterBill] = useState(50);
  const [otherFees, setOtherFees] = useState(500);
  const [totalRent, setTotalRent] = useState(null);

  const calculateTotalRent = () => {
    const total = baseRent + powerBill + waterBill + otherFees;
    setTotalRent(total);
  };

  return (
    <div id="RentCalculator" className="rent-calculator">
      <div className='left'>
      <h1>Monthly Rent <span>Calculator</span></h1>
      <p className="description">Adjust the sliders below to input your rent, utilities, and other fees. The total rent will be calculated automatically!</p>
      </div>


      <div className='right'>
      <div className="input-group">
        <label className="slider-label">Base Rent: <span>$ {baseRent}</span></label>
        <input
          type="range"
          min="1000"
          max="50000"
          step="50"
          value={baseRent}
          onChange={(e) => setBaseRent(parseInt(e.target.value, 10))}
          className="slider"
          style={{ background: `linear-gradient(to right, #1abc9c ${(baseRent - 1000) / 490}%, #e0e0e0 ${(baseRent - 1000) / 490}%)` }}
        />
      </div>

      <div className="input-group">
        <label className="slider-label">Power Bill : <span>$ {powerBill}</span></label>
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          value={powerBill}
          onChange={(e) => setPowerBill(parseInt(e.target.value, 10))}
          className="slider"
          style={{ background: `linear-gradient(to right, #1abc9c ${powerBill / 5}%, #e0e0e0 ${powerBill / 5}%)` }}
        />
      </div>

      <div className="input-group">
        <label className="slider-label">Water Bill : <span>$ {waterBill}</span></label>
        <input
          type="range"
          min="0"
          max="200"
          step="10"
          value={waterBill}
          onChange={(e) => setWaterBill(parseInt(e.target.value, 10))}
          className="slider"
          style={{ background: `linear-gradient(to right, #1abc9c ${waterBill / 2}%, #e0e0e0 ${waterBill / 2}%)` }}
        />
      </div>

      <div className="input-group">
        <label className="slider-label">Other Fees : <span>$ {otherFees}</span></label>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={otherFees}
          onChange={(e) => setOtherFees(parseInt(e.target.value, 10))}
          className="slider"
          style={{ background: `linear-gradient(to right, #1abc9c ${otherFees / 10}%, #e0e0e0 ${otherFees / 10}%)` }}
        />
      </div>

      <button onClick={calculateTotalRent} className="calculate-btn">
        Calculate Total Rent
      </button>

      {totalRent !== null && (
        <div className="result">
          <h2>Total Monthly Rent:  <span>${totalRent.toFixed(2)}</span></h2>
        </div>
      )}
      </div>
    </div>
  );
};

export default RentCalculator;
