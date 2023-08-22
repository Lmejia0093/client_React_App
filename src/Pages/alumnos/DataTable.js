import React from 'react'
import Table from 'react-bootstrap/esm/Table'
export const DataTable = ({data,EliminarRegistros,EditarDato}) => {
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>codigo</th>
        <th>Nombres</th>
        <th>anio</th>
        <th>fecha</th>
      </tr>
    </thead>
    <tbody>
      {
      
      data.length ? (
        data.map((element) => (
          <tr key={element.id}>
            <td>{element.codigo}</td>
            <td>{element.nombre}</td>
            <td>{element.anio}</td>
            <td>{new Date(element.fecha).toLocaleDateString("en-US")}</td>
            <td>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => EditarDato(element)}
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => EliminarRegistros(element)}
                >
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td>sin datos</td>
        </tr>
        
      )}
    </tbody>
  </Table>
  )
}
