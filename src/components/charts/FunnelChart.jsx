
import {
  FunnelChart as RechartsFunnelChart,
  Funnel,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Visitors", value: 10000, fill: "#6366f1" },
  { name: "Leads", value: 7000, fill: "#06b6d4" },
  { name: "Interested", value: 4500, fill: "#10b981" },
  { name: "Customers", value: 2500, fill: "#f59e0b" },
  { name: "Sales", value: 1200, fill: "#ef4444" },
];

export default function FunnelChartComponent() {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-5 text-lg font-bold dark:text-white">
        Sales Conversion Funnel
      </h2>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsFunnelChart>
            <Tooltip />

            <Funnel
              dataKey="value"
              data={data}
              isAnimationActive
            >
              <LabelList
                position="right"
                dataKey="name"
                fill="#64748b"
                stroke="none"
              />
            </Funnel>
          </RechartsFunnelChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
