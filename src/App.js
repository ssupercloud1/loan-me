// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [term, setTerm] = useState('');
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  const calculateRepayments = (e) => {
    e.preventDefault();
    const monthlyInterestRate = (interestRate / 12) / 100;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -(term * 12)));
    setMonthlyRepayment(monthlyPayment);
    setTotalRepayment(monthlyPayment * term * 12);
  };

  const resetForm = () => {
    setLoanAmount('');
    setInterestRate('');
    setTerm('');
    setMonthlyRepayment(0);
    setTotalRepayment(0);
  };

  return (
    <div className="App">
      <nav style={{backgroundColor: "white", color: "navy"}}>
        <a href="https://www.financingfix.com" target="_blank" rel="noopener noreferrer">Home</a>
      </nav>
      <div className="ribbon">
        <h1>LoanMe</h1>
        <p>Determine how much money you can borrow.</p>
      </div>
      <div className="calculator">
        <p>Find the best loan repayment terms for you by entering an amount, interest rate, and borrowing period. All borrowing rates used in this tool are indicative.</p>
        <form onSubmit={calculateRepayments}>
          <label htmlFor="loanAmount">Loan Amount (KES)</label>
          <input type="number" id="loanAmount" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} placeholder="Enter amount e.g. 100000" required />
          <label htmlFor="interestRate">Annual Interest Rate (%)</label>
          <input type="number" id="interestRate" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder="Enter Rate e.g. 17" required />
          <label htmlFor="term">Term (Years)</label>
          <input type="number" id="term" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Enter loan term e.g. 5" required />
          <button type="submit">Calculate</button>
          <button type="button" onClick={resetForm}>Reset</button>
        </form>
        <div className="repayments">
          <p>Monthly Repayment (KES): <strong>{monthlyRepayment.toFixed(2)}</strong></p>
          <p>Total Repayment (KES): <strong>{totalRepayment.toFixed(2)}</strong></p>
        </div>
        <p className="disclaimer">Disclaimer: This calculator is made available to you as a self-help tool for your independent use. The repayment results in every case are an approximate guide only.</p>
      </div>
      <footer style={{backgroundColor: "navy", color: "white"}}>© 2023 FinancingFIX. Email: info@financingfix.com</footer>
    </div>
  );
}

export default App;
