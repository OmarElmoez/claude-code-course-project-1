import { useMemo } from 'react';
import { formatCurrency } from './utils/format';

function Summary({ transactions }) {
  const { totalIncome, totalExpenses, balance } = useMemo(() => {
    const totals = transactions.reduce(
      (acc, t) => {
        if (t.type === 'income') {
          acc.income += t.amount;
        } else {
          acc.expenses += t.amount;
        }
        return acc;
      },
      { income: 0, expenses: 0 }
    );
    return {
      totalIncome: totals.income,
      totalExpenses: totals.expenses,
      balance: totals.income - totals.expenses,
    };
  }, [transactions]);

  return (
    <div className="summary">
      <div className="summary-card">
        <h3>Income</h3>
        <p className="income-amount">{formatCurrency(totalIncome)}</p>
      </div>
      <div className="summary-card">
        <h3>Expenses</h3>
        <p className="expense-amount">{formatCurrency(totalExpenses)}</p>
      </div>
      <div className="summary-card">
        <h3>Balance</h3>
        <p className="balance-amount">{formatCurrency(balance)}</p>
      </div>
    </div>
  );
}

export default Summary;
