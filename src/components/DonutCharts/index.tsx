import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSum } from "types/Sales";
import { BASE_URL_V1 } from "utils/requests";

type ChartData = {
  labels: string[];
  series: number[];
}

const DonutChart = () => {

  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    series: []
  });

  useEffect(() => {
    axios.get(`${BASE_URL_V1}/sales/amount-by-seller`)
      .then((response) => {
        const data = response.data as SaleSum[]; // fazendo CAST do response da API para meu tipo de objeto
        const myLabels = data.map(sale => sale.sellerName);
        const mySeries = data.map(sale => sale.sum);

        setChartData({ labels: myLabels, series: mySeries })
      });
  }, []);

  const options = { legend: { show: true } };

  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
};

export default DonutChart;
