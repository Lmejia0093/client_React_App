import Table from 'react-bootstrap/Table';
import { useFetch } from "./useFetch.js";


export default function Homepages() {
  const { data } = useFetch("http://localhost:4000/Home");

//console.log(data)
  return (
    <div>
      
          <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Equipo</th>
              <th>Produccion</th>
            
            </tr>
          </thead>
          <tbody>
          {
          data.length ?
          data.map( element => (
          <tr>
            <td>{element.id}</td>
             <td>{element.Equipo}</td>
              <td>{element.cantidad}</td>
              
                
               
          </tr>)) 
      : <h1>Sin datos</h1>
      
}
         
      </tbody>
    </Table>
    </div>
  );
}
