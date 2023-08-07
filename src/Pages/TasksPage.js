import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import {Borrarid} from './api.js'

export default function TasksPage() {
  const [Data, setData] = useState([{
    title: "",
    description: "",
    done:0,
  }]);

  useEffect(() => {
    fetch("http://localhost:4000/tasks")
      // Exito
      .then((response) => response.json()) // convertir a json
      .then((json) => setData(json)); //imprimir los datos en la consola
  }, []);

function Eliminarid(id) {


Borrarid(id)


  
}

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Tarea</th>
          <th>Descripcion</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>

        {
          Data.length ?
          Data.map( element => (
          <tr>
            <td>{element.id}</td>
             <td>{element.title}</td>
              <td>{element.description}</td>
                <td>{element.done}</td>
                <td><button onClick={()=>{Eliminarid(element.id)}} >Borrar</button></td>
               
          </tr>)) 
      : <h1>Sin datos</h1>
      
}
         
      </tbody>
    </Table>
  );
}
