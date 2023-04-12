import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CrearTarea } from "./ApiAdmin.js"; 


const inicialForm = {
  nombre: "",
  clave: "",
 
};

export default function LoginForm() {
  const [Data, setData] = useState(inicialForm);

  const handleChange = (e) => {
  
    setData({ ...Data,
       [e.target.name]: e.target.value });

       
  };
const EnviarDatos = (e) => {
  e.preventDefault()

    CrearTarea(Data.nombre,Data.clave)

    
   
    handleReset();

 
    


 
}

const handleReset = (e) => {
  setData(inicialForm)
}
  return (
    <>
 
    <Form onSubmit={EnviarDatos}>
     
      <Row className="mb-1">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
          required
            name="nombre"
            type="text"
            placeholder="Ingresa tu usuario"
            onChange={handleChange}
            value={Data.nombre}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Clave</Form.Label>
          <Form.Control
          required
            name="clave"
            type="text"
            placeholder="Ingresa tu clave"
            onChange={handleChange}
            value={Data.clave}
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    
     
    </Form>


</>
  );
}
