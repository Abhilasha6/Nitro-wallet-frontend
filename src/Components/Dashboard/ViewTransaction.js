import React from 'react';
import './ViewTransaction.css';

const ViewTransaction = () => {
  // Placeholder transaction data
  const transactions = [
    {
      id: 1,
      hash: '0x123456789abcdef',
      from: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
      to: '0xabAf751edBfE62448155062a1A6d1a29d6E87545',
      value: 0.5,
      timestamp: '2022-01-01',
    },
    {
      id: 2,
      hash: '0xfedcba987654321',
      from: '0x04ce2019C0C768Abf95987fdDA305672F48b6662',
      to: '0x04d25F04DFD9AaC2d87d360B4E215f4d0019fBd2',
      value: 1.2,
      timestamp: '2022-02-02',
    },
    {
      id: 3,
      hash: '0x987654321abcdef',
      from: '0x0187c4bb411f8D88755954cf0048648EC9C46b1b',
      to: '0x999999cf1046e68e36E1aA2E0E07105eDDD1f08E',
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
