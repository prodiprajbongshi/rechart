
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 3500 },
  { month: "Mar", revenue: 3000 },
  { month: "Apr", revenue: 5000 },
  { month: "May", revenue: 6500 },
  { month: "Jun", revenue: 8000 },
];

export default function AreaChartComponent() {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-5 text-lg font-bold dark:text-white">
        Revenue Overview
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsAreaChart data={data}>
            <defs>
              <linearGradient id="revenueColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#6366f1"
              strokeWidth={3}
              fill="url(#revenueColor)"
            />
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
