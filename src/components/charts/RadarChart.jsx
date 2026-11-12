
import {
  RadarChart as RechartsRadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "Design", A: 85, B: 65 },
  { subject: "Development", A: 95, B: 75 },
  { subject: "Marketing", A: 70, B: 90 },
  { subject: "SEO", A: 80, B: 60 },
  { subject: "Support", A: 90, B: 85 },
];

export default function RadarChartComponent() {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-5 text-lg font-bold dark:text-white">
        Performance Analysis
      </h2>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsRadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Team A"
              dataKey="A"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.4}
            />
            <Radar
              name="Team B"
              dataKey="B"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.3}
            />
            <Tooltip />
            <Legend />
          </RechartsRadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
