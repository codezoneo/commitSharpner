import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList() {
  // Example data for multiple expenses
  const expenses = [
    { title: 'Shopping', amount: 100, date: new Date(2022, 5, 15), locationOfExpenditure: 'Mall' },
    { title: 'Dining', amount: 50, date: new Date(2022, 5, 16), locationOfExpenditure: 'Restaurant' },
    // Add more expenses as needed
  ];

  return (
    <div>
      {/* Loop through expenses array and render ExpenseItem components */}
      {expenses.map((expense, index) => (
        <ExpenseItem key={index} {...expense} />
      ))}
    </div>
  );
}

export default ExpenseList;
