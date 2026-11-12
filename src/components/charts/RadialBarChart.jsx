
import {
  RadialBarChart as RechartsRadialBarChart,
  RadialBar,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Completed", value: 85, fill: "#10b981" },
  { name: "Pending", value: 60, fill: "#f59e0b" },
  { name: "Remaining", value: 30, fill: "#6366f1" },
];

export default function RadialBarChartComponent() {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-5 text-lg font-bold dark:text-white">
        Project Progress
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsRadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="25%"
            outerRadius="90%"
            barSize={14}
            data={data}
          >
            <RadialBar
              dataKey="value"
              background
              cornerRadius={10}
            />
            <Tooltip />
            <Legend
              iconSize={10}
              layout="horizontal"
              verticalAlign="bottom"
            />
          </RechartsRadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
