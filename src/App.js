
import { Route,Routes } from "react-router";
import NavbarMain from "./Components/NavbarMain";
import TaskForm from "./Pages/TaskForm";
import  TasksPage  from "./Pages/TasksPage";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Homepages from "./Pages/Home/HomePages";
import Productpages from "./Pages/product/ProductPages";




function App() {
  return (
    <>
    <NavbarMain />
    <Container>
      <Row className="mt-5">
       
        <Col> <Routes>
        <Route path="/" element={< Homepages />}  />
        <Route path="/Tareas" element={< TasksPage />}  />
        <Route path="/Nueva" element={< TaskForm />}  />
        <Route path="/product/detalle" element={<Productpages />} />
    
      </Routes></Col>
      </Row>
    </Container>
     
     
    </>
  );
}

export default App;
