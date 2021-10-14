import axios from "axios";
import Chart from "react-apexcharts";
import { SaleSum } from "types/sale";
import { BASE_URL } from "utils/requests";

type ChartData = {
  labels: string[];
  series: number[];
}

const DonutChart = () => {

  /*criando uma varial recebendo otipo ChartData */
  let chartData: ChartData = {
    labels: [],
    series: []
  };

  axios.get(`${BASE_URL}/sales/amount-by-seller`)
    .then((response) => {
      const data = response.data as SaleSum[]; // fazendo CAST do response da API para meu tipo de objeto
      const myLabels = data.map(sale => sale.sellerName);
      const mySeries = data.map(sale => sale.sum);

      chartData = { labels: myLabels, series: mySeries }

      console.log(response.data)
      console.log(chartData)
    });


  /*const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ["Anakin", "Barry Allen", "Kal-El", "Logan", "Padmé"],
  };
  */

  const options = {
    legend: { show: true },
  };

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
