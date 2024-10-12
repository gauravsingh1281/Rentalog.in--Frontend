import React, { useState } from 'react';
import Navbar from '../Header-section/Navbar';

const RentCalculation = () => {
  const [rentAmount, setRentAmount] = useState('');
  const [numTenants, setNumTenants] = useState('');
  const [totalRent, setTotalRent] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');
    // Validate input
    if (!rentAmount || !numTenants) {
      setError('Please enter both rent amount and number of tenants.');
      return;
    }
    if (rentAmount <= 0 || numTenants <= 0) {
      setError('Both rent amount and number of tenants must be greater than zero.');
      return;
    }
    const total = parseFloat(rentAmount) * parseInt(numTenants);
    setTotalRent(total);
  };

  const handleReset = () => {
    setRentAmount('');
    setNumTenants('');
    setTotalRent(null);
    setError('');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "lightgray" }}>
       <Navbar/>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-300 relative overflow-hidden">
          <h1 className="text-3xl font-bold mb-4 text-center">Rent Calculation</h1>
          
          <div className="mb-4 w-full max-w-md">
            <label className="block mb-2">Monthly Rent Amount ($):</label>
            <input
              type="number"
              value={rentAmount}
              onChange={(e) => setRentAmount(e.target.value)}
              className="border border-gray-400 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500 transition duration-200"
              placeholder="Enter rent amount"
            />
          </div>
          
          <div className="mb-4 w-full max-w-md">
            <label className="block mb-2">Number of Tenants:</label>
            <input
              type="number"
              value={numTenants}
              onChange={(e) => setNumTenants(e.target.value)}
              className="border border-gray-400 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500 transition duration-200"
              placeholder="Enter number of tenants"
            />
          </div>
          
          <div className="flex justify-between mb-2">
            <button
              onClick={handleCalculate}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 w-full mr-2"
            >
              Calculate Total Rent
            </button>
            <button
              onClick={handleReset}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-200 w-full"
            >
              Reset
            </button>
          </div>

          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          {totalRent !== null && (
            <h2 className="mt-4 text-xl text-center">
              Total Rent for {numTenants} tenant(s): <span className="font-bold">${totalRent}</span>
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default RentCalculation;
