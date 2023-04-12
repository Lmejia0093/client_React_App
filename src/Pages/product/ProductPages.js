import { useFetch } from "../../Helper/useFetch.js";
import ProductSelect from "./ProductSelect.js";
import ProductTable from "./ProductTable.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Productpages() {
  const { data } = useFetch("http://localhost:4000/Categoria");

  //console.log(data)
  return (
    <div>
      <h1>Categorias</h1>
      <Row>
        <Col>
          <ProductSelect data={data} />
        </Col>
        <Row>
          {" "}
          <Col className="mt-5">
            <ProductTable data={data} />
          </Col>
        </Row>
      </Row>
    </div>
  );
}
