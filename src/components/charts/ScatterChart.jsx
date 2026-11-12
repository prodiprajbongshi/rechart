
import {
  ScatterChart as RechartsScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ZAxis,
} from "recharts";

const data = [
  { price: 100, sales: 240, size: 100 },
  { price: 200, sales: 450, size: 150 },
  { price: 300, sales: 300, size: 120 },
  { price: 400, sales: 650, size: 180 },
  { price: 500, sales: 800, size: 200 },
  { price: 600, sales: 550, size: 160 },
];

export default function ScatterChartComponent() {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-5 text-lg font-bold dark:text-white">
        Price vs Sales
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              dataKey="price"
              name="Price"
              unit="$"
            />
            <YAxis
              type="number"
              dataKey="sales"
              name="Sales"
            />
            <ZAxis dataKey="size" range={[60, 200]} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />

            <Scatter
              name="Products"
              data={data}
              fill="#6366f1"
            />
          </RechartsScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
