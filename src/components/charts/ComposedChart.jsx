
import {
  ComposedChart as RechartsComposedChart,
  Bar,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4000, profit: 2400, expenses: 1800 },
  { month: "Feb", revenue: 5000, profit: 3000, expenses: 2000 },
  { month: "Mar", revenue: 4500, profit: 2700, expenses: 1900 },
  { month: "Apr", revenue: 7000, profit: 4500, expenses: 2500 },
  { month: "May", revenue: 8000, profit: 5200, expenses: 2800 },
  { month: "Jun", revenue: 9000, profit: 6000, expenses: 3000 },
];

export default function ComposedChartComponent() {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-5 text-lg font-bold dark:text-white">
        Business Analytics
      </h2>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Area
              type="monotone"
              dataKey="expenses"
              fill="#f59e0b"
              stroke="#f59e0b"
              fillOpacity={0.15}
            />

            <Bar
              dataKey="revenue"
              fill="#6366f1"
              radius={[5, 5, 0, 0]}
            />

            <Line
              type="monotone"
              dataKey="profit"
              stroke="#10b981"
              strokeWidth={3}
            />
          </RechartsComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
