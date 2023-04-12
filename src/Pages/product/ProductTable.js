
import Table from "react-bootstrap/Table";


export default function ProductTable ({data}) {


  return (
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Nombres</th>
       
      </tr>
    </thead>
    <tbody>
      {data.length ? (
        data.map((element) => (
          <tr key={element.id} >
            <td>{element.id}</td>
            <td>{element.nombre}</td>
           
          </tr>
        ))
      ) : (
        <h1>Sin datos</h1>
      )}
    </tbody>
  </Table>
  )
}

