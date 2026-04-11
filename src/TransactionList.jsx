import { useState, useMemo } from 'react';
import { CATEGORIES } from './constants';
import { formatCurrency, formatCategory } from './utils/format';

function TransactionList({ transactions, onRemoveTransaction }) {
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      if (filterType !== "all" && t.type !== filterType) return false;
      if (filterCategory !== "all" && t.category !== filterCategory) return false;
      return true;
    });
  }, [transactions, filterType, filterCategory]);

  const handleDelete = (id, description) => {
    if (window.confirm(`Are you sure you want to delete "${description}"?`)) {
      onRemoveTransaction(id);
    }
  };

  return (
    <div className="transactions">
      <h2>Transactions</h2>
      <div className="filters">
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="all">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="all">All Categories</option>
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{formatCategory(cat)}</option>
          ))}
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map(t => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.description}</td>
              <td>{formatCategory(t.category)}</td>
              <td className={t.type === "income" ? "income-amount" : "expense-amount"}>
                {t.type === "income" ? "+" : "-"}{formatCurrency(t.amount)}
              </td>
              <td>
                <button
                  onClick={() => handleDelete(t.id, t.description)}
                  className="delete-btn"
                  aria-label={`Delete ${t.description}`}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
