
import {
  Sankey,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = {
  nodes: [
    { name: "Website" },
    { name: "Social Media" },
    { name: "Search" },
    { name: "Products" },
    { name: "Cart" },
    { name: "Customers" },
  ],

  links: [
    { source: 0, target: 3, value: 400 },
    { source: 1, target: 3, value: 300 },
    { source: 2, target: 3, value: 200 },
    { source: 3, target: 4, value: 600 },
    { source: 4, target: 5, value: 450 },
  ],
};

export default function SankeyChartComponent() {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-5 text-lg font-bold dark:text-white">
        Customer Flow
      </h2>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <Sankey
            data={data}
            nodePadding={35}
            nodeWidth={15}
            linkCurvature={0.5}
            iterations={32}
            margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Tooltip />
          </Sankey>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
