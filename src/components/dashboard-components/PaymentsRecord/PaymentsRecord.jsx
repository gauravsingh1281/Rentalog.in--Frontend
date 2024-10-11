import { useState } from 'react'
import logo from "../../../assets/Images/logo.png"


const initialPayments = [
  { id: 1, date: '2023-06-01', amount: 1000, description: 'Rent payment' },
  { id: 2, date: '2023-06-15', amount: 50, description: 'Utility bill' },
  { id: 3, date: '2023-07-01', amount: 1000, description: 'Rent payment' },
]

export default function PaymentsRecord() {
  const [payments, setPayments] = useState(initialPayments)
  const [newPayment, setNewPayment] = useState({
    date: '',
    amount: 0,
    description: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewPayment(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const payment = {
      id: payments.length + 1,
      ...newPayment,
      amount: Number(newPayment.amount),
    }
    setPayments(prev => [...prev, payment])
    setNewPayment({ date: '', amount: 0, description: '' })
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
      <div className="px-4 bg-textWhite w-fit rounded-xl absolute top-0 left-0 m-[1.5rem]">
              <img
                className="self-start w-40"
                src={logo}
                alt="Rentalog-logo"
              />
            </div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Payments Record</h1>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="px-6 py-4 bg-[#1abc9c] text-white">
            <h2 className="text-xl font-semibold">Add New Payment</h2>
          </div>
          <form onSubmit={handleSubmit} className="px-6 py-4 space-y-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={newPayment.date}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1abc9c] focus:border-[#1abc9c]"
              />
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={newPayment.amount}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1abc9c] focus:border-[#1abc9c]"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                value={newPayment.description}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1abc9c] focus:border-[#1abc9c]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1abc9c] text-white py-2 px-4 rounded-md hover:bg-[#16a085] transition-colors"
            >
              Add Payment
            </button>
          </form>
        </div>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-[#cd4347] text-white">
            <h2 className="text-xl font-semibold">Payment History</h2>
          </div>
          <ul className="divide-y divide-gray-200">
            {payments.map(payment => (
              <li key={payment.id} className="px-6 py-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold">{payment.description}</p>
                  <p className="text-sm text-gray-500">{payment.date}</p>
                </div>
                <span className="font-semibold">${payment.amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
