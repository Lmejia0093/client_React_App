//import { useFetch } from "../../Helper/useFetch.js";
//import ProductSelect from "./ProductSelect.js";
import ProductTable from "./ProductTable.js";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import { useState } from "react";

export default function Productpages() {
 // const { data } = useFetch("http://localhost:4000/Categoria");
 


  
  return (
    <div>
      <h1>Alumnos</h1>
      <Row>
      
        <Row>
          {" "}
          <Col className="mt-5">
            <ProductTable  />
          </Col>
        </Row>
      </Row>
    </div>
  );
}
