import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "types/Sales";
import { round } from "utils/format";
import { BASE_URL_V1 } from "utils/requests";

type SeriesData = {
  name: string;
  data: number[];
}

type ChartData = {
  labels: {
    categories: string[];
  };

  series: SeriesData[];

}

const BarChart = () => {

  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: [],
    },
    series: [
      {
        name: "",
        data: [],
      },
    ],
  });

  useEffect(() => {
    axios.get(`${BASE_URL_V1}/api/v1/sales/success-rate-by-seller`)
      .then((response) => {
        const data = response.data as SaleSuccess[]; // fazendo CAST do response da API para meu tipo de objeto
        const myLabels = data.map(sale => sale.sellerName);
        const mySeries = data.map(sale => round(100.0 * (sale.deals / sale.visited), 1));

        setChartData({
          labels: {
            categories: myLabels,
          },
          series: [
            {
              name: "% Success",
              data: mySeries,
            },
          ],
        })
      });
  }, []);


  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
}

export default BarChart;
