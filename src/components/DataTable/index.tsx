import axios from "axios";
import Pagination from "components/Pagination";

import { useEffect, useState } from "react";
import { SalePage } from "types/Sales";
import { formatLocalDate } from "utils/format";

import { BASE_URL_V1 } from "utils/requests";


const DataTable = () => {

  const [activePage, setActivePage] = useState(0);

  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalPages: 0,
    totalElements: 0
  });

  useEffect(() => {
    axios.get(`${BASE_URL_V1}/sales?page=${activePage}&size=20&sort=date,desc`)
      .then((response) => {
        setPage(response.data as SalePage)
      });
  }, [activePage]); /* o useEffect fica observando quando a pagina mudar, para chamar a API novamente com a pagina ATIVA */

  // Mudando a paginação de forma dinamica
  const changePage = (index: number) => {
    setActivePage(index);
  }

  return (
    <>
      <Pagination page={page} onPageChange={changePage} />
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Data</th>
              <th>Vendedor</th>
              <th>Clientes visitados</th>
              <th>Negócios fechados</th>
              <th>Valor</th>
            </tr>
          </thead>

          <tbody>
            {/* Montando a iteração dos Itens da Lista */}
            {page.content?.map(item => (
              <tr key={item.id}>
                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                <td>{item.seller.name}</td>
                <td>{item.visited}</td>
                <td>{item.deals}</td>
                <td>{item.amount.toFixed(2)}</td>
              </tr>
            )
            )}
          </tbody>

        </table>
      </div>
    </>
  );
};

export default DataTable;
