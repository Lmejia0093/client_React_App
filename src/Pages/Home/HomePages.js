import Table from "react-bootstrap/Table";
import CarouselHome from "../../Components/CarouselHome.js";
import { useFetch } from "../../Helper/useFetch.js";
import {BsFileEarmarkBarGraph} from 'react-icons/bs'

export default function Homepages() {
  const { data } = useFetch("http://localhost:4000/productos");

  //console.log(data)
  return (
    <div>
      <CarouselHome datos={data} />
      <h1>Home</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>Produccion</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            data.map((element) => (
              <tr>
                <td>{element.id}</td>
                <td>{element.Equipo}</td>
                <td >{element.cantidad} <BsFileEarmarkBarGraph  color="blue" /> </td>
              </tr>
            ))
          ) : (
            <h1>Sin datos</h1>
          )}
        </tbody>
      </Table>
    </div>
  );
}
