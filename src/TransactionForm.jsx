import { useState } from 'react';
import { CATEGORIES } from './constants';
import { formatCategory } from './utils/format';

function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("food");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedDescription = description.trim();
    const parsedAmount = parseFloat(amount);

    if (!trimmedDescription) {
      alert("Please enter a description");
      return;
    }

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Please enter a valid amount greater than 0");
      return;
    }

    if (parsedAmount > 1000000) {
      alert("Amount exceeds maximum allowed value");
      return;
    }

    const newTransaction = {
      id: crypto.randomUUID(),
      description: trimmedDescription,
      amount: parsedAmount,
      type,
      category,
      date: new Date().toISOString().split('T')[0],
    };

    onAddTransaction(newTransaction);
    setDescription("");
    setAmount("");
    setType("expense");
    setCategory("food");
  };

  return (
    <div className="add-transaction">
      <h2>+ New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="description" className="sr-only">Description</label>
        <input
          id="description"
          type="text"
          placeholder="Description (e.g., Groceries)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label htmlFor="amount" className="sr-only">Amount</label>
        <input
          id="amount"
          type="number"
          placeholder="$0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0.01"
          step="0.01"
          required
        />
        <label htmlFor="type" className="sr-only">Type</label>
        <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <label htmlFor="category" className="sr-only">Category</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{formatCategory(cat)}</option>
          ))}
        </select>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
