//import { useFetch } from "../../Helper/useFetch.js";
//import ProductSelect from "./ProductSelect.js";

//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import AlumnosTable from "./AlumnosTable.js";
//import { useState } from "react";

export default function AlumnosPages() {
 // const { data } = useFetch("http://localhost:4000/Categoria");
 


  
  return (
    <div>
      <h1>Alumnos</h1>
      <Row>
      
        <Row>
        
       
               <AlumnosTable />
          
         
        </Row>
      </Row>
    </div>
  );
}
