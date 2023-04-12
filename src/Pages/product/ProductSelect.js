import React from "react";
import Form from "react-bootstrap/Form";
//import { useFetch } from "../../Helper/useFetch";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductSelect = ({ data }) => {
  const handlebuscar =(e)=>{
   e.preventDefault();
  
    console.log(e.target.value);
  }
  // const { data } = useFetch("http://localhost:4000/Categoria");
  return (
 

    <form>
      <Row>
        <Col>
         
          <Form.Select onSubmit={handlebuscar}>
            <option>Seleccionar</option>
            {data.length ? (
              data.map((element) => <option key={element.id} name='categoria'  value={element.id} >{element.nombre}</option>)
            ) : (
              <option >No hay datos</option>
            )}
          </Form.Select>
        </Col>
        <Col>
          <button className="btn btn-primary " onClick={handlebuscar}  >Buscar</button>
        </Col>
      </Row>
    </form>

   
  );
};

export default ProductSelect;
