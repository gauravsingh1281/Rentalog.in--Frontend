import React, { useState } from 'react';
import './RentCalculator.css';

const RentCalculator = () => {
  const [baseRent, setBaseRent] = useState('');
  const [powerBill, setPowerBill] = useState('');
  const [waterBill, setWaterBill] = useState('');
  const [otherFees, setOtherFees] = useState('');
  const [totalRent, setTotalRent] = useState(null);
  const [showSummary, setShowSummary] = useState(false);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value || 0);
  };

  const calculateTotalRent = () => {
    const rent = parseFloat(baseRent) || 0;
    const power = parseFloat(powerBill) || 0;
    const water = parseFloat(waterBill) || 0;
    const other = parseFloat(otherFees) || 0;
    const total = rent + power + water + other;
    
    setTotalRent(total);
    setShowSummary(true); 
  };

  const resetForm = () => {
    setBaseRent("");
    setPowerBill("");
    setWaterBill("");
    setOtherFees("");
    setTotalRent(null);
    setShowSummary(false);
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

{showSummary && (
  <>
    <div className="summary-card">
      <h2>🏠 Rent Summary</h2>
      <p><strong>Base Rent:</strong> {formatCurrency(baseRent)}</p>
      <p><strong>Power Bill:</strong> {formatCurrency(powerBill)}</p>
      <p><strong>Water Bill:</strong> {formatCurrency(waterBill)}</p>
      <p><strong>Other Fees:</strong> {formatCurrency(otherFees)}</p>
      <hr />
      <h3>Total Monthly Rent: {formatCurrency(totalRent)}</h3>
    </div>

    <button onClick={resetForm} className="reset-btn">
      Reset
    </button>
  </>
)}


    </div>
  );
};

export default RentCalculator;
