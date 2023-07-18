import React from 'react';
import './ViewTransaction.css';

const ViewTransaction = () => {
  // Placeholder transaction data
  const transactions = [
    {
      id: 1,
      hash: '0x123456789abcdef',
      from: '0x987654321fedcba',
      to: '0xabcdef123456789',
      value: 0.5,
      timestamp: '2022-01-01',
    },
    {
      id: 2,
      hash: '0xfedcba987654321',
      from: '0xabcdef123456789',
      to: '0x123456789abcdef',
      value: 1.2,
      timestamp: '2022-02-02',
    },
    {
      id: 3,
      hash: '0x987654321abcdef',
      from: '0x123456789abcdef',
      to: '0xfedcba987654321',
      value: 0.8,
      timestamp: '2022-03-03',
    },
  ];

  return (
    <div className="view-transaction">
      <h2>Transaction History</h2>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Hash</th>
            <th>From</th>
            <th>To</th>
            <th>Value</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.hash}</td>
              <td>{transaction.from}</td>
              <td>{transaction.to}</td>
              <td>{transaction.value}</td>
              <td>{transaction.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTransaction;
