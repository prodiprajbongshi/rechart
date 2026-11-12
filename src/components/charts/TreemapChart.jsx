
import {
  Treemap,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Electronics", size: 450, fill: "#6366f1" },
  { name: "Clothing", size: 300, fill: "#06b6d4" },
  { name: "Furniture", size: 200, fill: "#10b981" },
  { name: "Books", size: 150, fill: "#f59e0b" },
  { name: "Accessories", size: 100, fill: "#ec4899" },
];

export default function TreemapChartComponent() {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-5 text-lg font-bold dark:text-white">
        Product Categories
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <Treemap
            data={data}
            dataKey="size"
            nameKey="name"
            stroke="#fff"
            fill="#6366f1"
            aspectRatio={4 / 3}
          >
            <Tooltip />
          </Treemap>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
