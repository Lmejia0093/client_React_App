import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CrearTarea } from "./api"; 
import TasksPage from "./TasksPage";

const inicialForm = {
  tarea: "",
  descripcion: "",
 
};

export default function TaskForm() {
  const [Data, setData] = useState(inicialForm);

  const handleChange = (e) => {
  
    setData({ ...Data,
       [e.target.name]: e.target.value });

       
  };
const EnviarDatos = (e) => {
  e.preventDefault()

    CrearTarea(Data.tarea,Data.descripcion)

    
   
    handleReset();

 
    


 
}

const handleReset = (e) => {
  setData(inicialForm)
}
  return (
    <>
 
    <Form onSubmit={EnviarDatos}>
     
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Tarea</Form.Label>
          <Form.Control
          required
            name="tarea"
            type="text"
            placeholder="Ingresa la tarea"
            onChange={handleChange}
            value={Data.tarea}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
          required
            name="descripcion"
            type="text"
            placeholder="Ingresa la tarea"
            onChange={handleChange}
            value={Data.descripcion}
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    
     
    </Form>

<TasksPage />
</>
  );
}
