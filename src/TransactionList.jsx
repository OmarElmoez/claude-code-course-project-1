import { useState } from 'react';

const categories = ["food", "housing", "utilities", "transport", "entertainment", "salary", "other"];

const categoryColors = {
  food: { bg: '#fef3c7', text: '#92400e' },
  housing: { bg: '#dbeafe', text: '#1e40af' },
  utilities: { bg: '#d1fae5', text: '#065f46' },
  transport: { bg: '#fce7f3', text: '#9d174d' },
  entertainment: { bg: '#e0e7ff', text: '#3730a3' },
  salary: { bg: '#d1fae5', text: '#065f46' },
  other: { bg: '#f3f4f6', text: '#374151' },
};

function TransactionList({ transactions, onRemoveTransaction }) {
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  let filteredTransactions = transactions;
  if (filterType !== "all") {
    filteredTransactions = filteredTransactions.filter(t => t.type === filterType);
  }
  if (filterCategory !== "all") {
    filteredTransactions = filteredTransactions.filter(t => t.category === filterCategory);
  }

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
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
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
              <td>
                <span style={{
                  display: 'inline-block',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  background: categoryColors[t.category]?.bg || '#f3f4f6',
                  color: categoryColors[t.category]?.text || '#374151',
                  textTransform: 'capitalize'
                }}>
                  {t.category}
                </span>
              </td>
              <td className={t.type === "income" ? "income-amount" : "expense-amount"}>
                {t.type === "income" ? "+" : "-"}${t.amount.toLocaleString()}
              </td>
              <td>
                <button
                  onClick={() => {
                    if (window.confirm(`Are you sure you want to delete "${t.description}"?`)) {
                      onRemoveTransaction(t.id);
                    }
                  }}
                  className="delete-btn"
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
