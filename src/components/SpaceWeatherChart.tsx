import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface SpaceWeatherChartProps {
  data: {
    startTime: string;
    activityID: string;
  }[];
  title: string;
}

const SpaceWeatherChart: React.FC<SpaceWeatherChartProps> = ({
  data,
  title,
}) => {
  // Prepare data for the chart
  const chartData = {
    labels: data.map((item) => new Date(item.startTime).toLocaleDateString()),
    datasets: [
      {
        label: title,

        data: data.map(() => Math.random() * 100),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md mt-12 w-2/3 mx-auto shadow-2xl shadow-cyan-800">
      <h2 className="text-2xl font-bold">{title} Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default SpaceWeatherChart;