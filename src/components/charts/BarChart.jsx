
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 7000 },
  { month: "Jun", sales: 6000 },
];

export default function BarChartComponent() {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-5 text-lg font-bold dark:text-white">
        Monthly Sales
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="sales"
              fill="#6366f1"
              radius={[6, 6, 0, 0]}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
