import React, { useState } from 'react';
import './RentCalculator.css';

const RentCalculator = () => {
  const [baseRent, setBaseRent] = useState('');
  const [powerBill, setPowerBill] = useState('');
  const [waterBill, setWaterBill] = useState('');
  const [otherFees, setOtherFees] = useState('');
  const [totalRent, setTotalRent] = useState(null);

  const calculateTotalRent = () => {
    const rent = parseFloat(baseRent) || 0;
    const power = parseFloat(powerBill) || 0;
    const water = parseFloat(waterBill) || 0;
    const other = parseFloat(otherFees) || 0;
    const total = rent + power + water + other;
    setTotalRent(total);
  };

  return (

    <div id="RentCalculator" className="rent-calculator">
      <h1>Monthly Rent Calculator</h1>
      <div className="input-group">
        <label>Base Rent ($):</label>
        <input
          type="number"
          value={baseRent}
          onChange={(e) => setBaseRent(e.target.value)}
          placeholder="Enter base rent amount"
        />
      </div>
      <div className="input-group">
        <label>Power Bill ($):</label>
        <input
          type="number"
          value={powerBill}
          onChange={(e) => setPowerBill(e.target.value)}
          placeholder="Enter power bill amount"
        />
      </div>
      <div className="input-group">
        <label>Water Bill ($):</label>
        <input
          type="number"
          value={waterBill}
          onChange={(e) => setWaterBill(e.target.value)}
          placeholder="Enter water bill amount"
        />
      </div>
      <div className="input-group">
        <label>Other Fees ($):</label>
        <input
          type="number"
          value={otherFees}
          onChange={(e) => setOtherFees(e.target.value)}
          placeholder="Enter other fees"
        />
      </div>
      <button onClick={calculateTotalRent} className="calculate-btn">
        Calculate Total Rent
      </button>
      {totalRent !== null && (
        <div className="result">
          <h2>Total Monthly Rent: ${totalRent.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default RentCalculator;