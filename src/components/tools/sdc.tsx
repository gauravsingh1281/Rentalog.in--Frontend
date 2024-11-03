import React, { useState } from 'react';
import './sdc.css';

const SDC = () => {
  const [rentAmount, setRentAmount] = useState<number>(0);
  const [depositMultiplier, setDepositMultiplier] = useState<number>(1);
  const [securityDeposit, setSecurityDeposit] = useState<number | null>(null);

  const calculateDeposit = () => {
    const deposit = rentAmount * depositMultiplier;
    setSecurityDeposit(deposit);
  };

  return (
    <div className="sdc-container">
      <h2 className="sdc-title">Security Deposit Calculator</h2>
      <form className="sdc-form">
        <div className="sdc-field">
          <label htmlFor="rentAmount">Monthly Rent Amount ($):</label>
          <input
            type="number"
            id="rentAmount"
            value={rentAmount}
            onChange={(e) => setRentAmount(Number(e.target.value))}
          />
        </div>
        
        <div className="sdc-field">
          <label htmlFor="depositMultiplier">Deposit Multiplier:</label>
          <input
            type="number"
            id="depositMultiplier"
            value={depositMultiplier}
            onChange={(e) => setDepositMultiplier(Number(e.target.value))}
          />
        </div>
        
        <button type="button" className="sdc-button" onClick={calculateDeposit}>
          Calculate Deposit
        </button>
      </form>
      
      {securityDeposit !== null && (
        <div className="sdc-result">
          <p>Required Security Deposit: ${securityDeposit.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default SDC;
