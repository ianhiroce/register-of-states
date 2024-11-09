import "./Table.css"
import DataTable from "datatables.net-dt"

export function Table() {

  const table = new DataTable('#myTable')
  
  return (
    <>
    <table id="myTable" className="table-content">
    <thead>
        <tr>
            <th>Código</th>
            <th>UF</th>
            <th>Nome</th>
            <th>Região</th>
            <th>Data de Extinção</th>
            <th>Ação</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>01</td>
            <td>SP</td>
            <td>São Paulo</td>
            <td>Leste</td>
            <td>01/02/2001</td>
            <td className="action-icons">
              <button>🗑️</button>
              <button>✏️</button>
            </td>
        </tr>
    </tbody>
</table>
    </>
  )
}