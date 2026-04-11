import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#ffc658', '#d0ed57'];

function SpendingByCategory({ transactions }) {
  const data = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      const existing = acc.find(item => item.name === t.category);
      if (existing) {
        existing.value += t.amount;
      } else {
        acc.push({ name: t.category, value: t.amount });
      }
      return acc;
    }, []);

  const formattedData = data.map(item => ({
    ...item,
    value: Number(item.value.toFixed(2))
  }));

  if (formattedData.length === 0) {
    return (
      <div className="spending-chart">
        <h2>Spending by Category</h2>
        <p>No expense data to display</p>
      </div>
    );
  }

  return (
    <div className="spending-chart">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6b6b6b' }} axisLine={{ stroke: '#e5e5e5' }} tickLine={{ stroke: '#e5e5e5' }} />
          <YAxis tick={{ fontSize: 12, fill: '#6b6b6b' }} axisLine={{ stroke: '#e5e5e5' }} tickLine={{ stroke: '#e5e5e5' }} tickFormatter={(value) => `$${value}`} />
          <Tooltip
            contentStyle={{
              borderRadius: '8px',
              border: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              fontSize: '13px'
            }}
            formatter={(value) => [`$${value}`, 'Amount']}
          />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          <Bar dataKey="value" fill="#2563eb" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingByCategory;
