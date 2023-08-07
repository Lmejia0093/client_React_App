
import { Route,Routes } from "react-router";
import NavbarMain from "./Components/NavbarMain";
//import TaskForm from "./Pages/TaskForm";
//import  TasksPage  from "./Pages/TasksPage";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Homepages from "./Pages/Home/HomePages";

import AlumnosPages from "./Pages/alumnos/AlumnosPages";
//import AdminPage from "./Pages/admin/AdminPage";





function App() {
  return (
    <>
    <NavbarMain />
    <Container>
    
       <Row>
        <Col> <Routes>
        <Route path="/" element={<AlumnosPages />} />
       
       
    
      </Routes></Col>
      </Row>
    </Container>
     
     
    </>
  );
}

export default App;
