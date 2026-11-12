import BarChartComponent from "./components/charts/BarChart";
import LineChartComponent from "./components/charts/LineChart";
import AreaChartComponent from "./components/charts/AreaChart";
import PieChartComponent from "./components/charts/PieChart";
import RadarChartComponent from "./components/charts/RadarChart";
import RadialBarChartComponent from "./components/charts/RadialBarChart";
import ScatterChartComponent from "./components/charts/ScatterChart";
import ComposedChartComponent from "./components/charts/ComposedChart";
import TreemapChartComponent from "./components/charts/TreemapChart";
import FunnelChartComponent from "./components/charts/FunnelChart";
import SankeyChartComponent from "./components/charts/SankeyChart";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl space-y-8">
    
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
              01. Bar Chart
            </h2>
            <BarChartComponent />
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
              02. Line Chart
            </h2>
            <LineChartComponent />
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
              03. Area Chart
            </h2>
            <AreaChartComponent />
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
              04. Pie Chart
            </h2>
            <PieChartComponent />
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
              05. Radar Chart
            </h2>
            <RadarChartComponent />
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
              06. Radial Bar Chart
            </h2>
            <RadialBarChartComponent />
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
              07. Scatter Chart
            </h2>
            <ScatterChartComponent />
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
              08. Composed Chart
            </h2>
            <ComposedChartComponent />
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
              09. Treemap Chart
            </h2>
            <TreemapChartComponent />
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
              10. Funnel Chart
            </h2>
            <FunnelChartComponent />
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
              11. Sankey Chart
            </h2>
            <SankeyChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
