import { useState } from 'react'
import './App.css'
import Summary from './Summary'
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'
import SpendingByCategory from './SpendingByCategory'

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, description: "Salary", amount: 5000, type: "income", category: "salary", date: "2025-01-01" },
    { id: 2, description: "Rent", amount: 1200, type: "expense", category: "housing", date: "2025-01-02" },
    { id: 3, description: "Groceries", amount: 150, type: "expense", category: "food", date: "2025-01-03" },
    { id: 4, description: "Freelance Work", amount: 800, type: "income", category: "salary", date: "2025-01-05" },
    { id: 5, description: "Electric Bill", amount: 95, type: "expense", category: "utilities", date: "2025-01-06" },
    { id: 6, description: "Dinner Out", amount: 65, type: "expense", category: "food", date: "2025-01-07" },
    { id: 7, description: "Gas", amount: 45, type: "expense", category: "transport", date: "2025-01-08" },
    { id: 8, description: "Netflix", amount: 15, type: "expense", category: "entertainment", date: "2025-01-10" },
  ]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleRemoveTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-brand">
            <span className="header-icon">◆</span>
            <h1>Ember</h1>
          </div>
          <p className="header-subtitle">Finance tracker</p>
        </div>
      </header>

      <main className="app-main">
        <Summary transactions={transactions} />
        <div className="app-grid">
          <div className="app-grid-left">
            <SpendingByCategory transactions={transactions} />
          </div>
          <div className="app-grid-right">
            <TransactionForm onAddTransaction={handleAddTransaction} />
          </div>
        </div>
        <TransactionList transactions={transactions} onRemoveTransaction={handleRemoveTransaction} />
      </main>
    </div>
  );
}

export default App
