import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#00ff88', '#ff4757', '#00d4ff', '#a855f7', '#ff9500', '#ffd700', '#ff6b9d'];

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

  if (data.length === 0) {
    return (
      <div className="spending-chart">
        <h2>Spending by Category</h2>
        <p style={{ color: '#6b7280', fontSize: '14px' }}>No expense data to display</p>
      </div>
    );
  }

  return (
    <div className="spending-chart">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2d3a5f" />
          <XAxis dataKey="name" stroke="#a0a0b0" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#a0a0b0" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#16213e',
              border: '1px solid #2d3a5f',
              borderRadius: '4px',
              color: '#fff'
            }}
          />
          <Legend wrapperStyle={{ color: '#a0a0b0' }} />
          <Bar dataKey="value" fill="#00d4ff" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingByCategory;
