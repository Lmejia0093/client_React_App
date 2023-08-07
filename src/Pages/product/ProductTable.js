import { useState,useEffect } from "react";
import Table from "react-bootstrap/Table";
import {CrearCategoria, UpdateCategoria,EliminarCategoriaID} from './api.js'

const inicialForm = {
  id: "",
  nombre: "",
 
};

export default function ProductTable() {
 const [data, setData] = useState({});
  const [datosEditar, setDatosEditar] = useState(inicialForm);
  const [bottonEditar, setbottonEditar] = useState(false);

  useEffect(() => {
  MostrarDatos()
  }, []);

  function MostrarDatos() {
    fetch("http://localhost:4000/Categoria",{
      method:"GET",
    })
      .then((response) => response.json())
      .then((data) => setData(data));
   
  }

  const EditarDato = (element) => {
    setbottonEditar(true);
    setDatosEditar(element);

 
  };

  const GuardarCambios = ()=>{
   UpdateCategoria(datosEditar.id,datosEditar.nombre)
   MostrarDatos()
  };

  const LimpiarDatos = () => {
    setbottonEditar(false);
    setDatosEditar(inicialForm);
  }

  const IngresarRegistro = (e) =>{
     e.preventDefault()
    CrearCategoria(datosEditar.nombre)
    //console.log(datosEditar.nombre)
    MostrarDatos()
  };


  const handleChange = (e) => {
  
    setDatosEditar({ ...datosEditar,
       [e.target.name]: e.target.value });

       
  };

  const EliminarRegistros =(element)=>{
    EliminarCategoriaID(element.id)
    MostrarDatos()
  };

  return (
    <>
      <form className="form-inline" onSubmit={IngresarRegistro}>
      <label className="sr-only" htmlFor="inlineFormInputName2">
          id
        </label>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="id"
          value={datosEditar.id}
          onChange={handleChange}
          name="id"
          disabled
        />
        <label className="sr-only" htmlFor="inlineFormInputName2">
          Nombre
        </label>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          id="inlineFormInputName3"
          placeholder="ingresar nombre"
          value={datosEditar.nombre}
          onChange={handleChange}
          name="nombre"
        />
   
    
   
        {bottonEditar ? (
          <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-warning" onClick={GuardarCambios}>Guardar Cambio</button>
          <button type="button" className="btn btn-danger" onClick={LimpiarDatos}>Cancelar</button>
        
        </div>
         
        ) :  <button type="submit" className="btn btn-success mb-2">
        Registrar
      </button>}
      </form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombres</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            data.map((element) => (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.nombre}</td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => EditarDato(element)}
                    >
                      Editar
                    </button>
                    <button type="button" className="btn btn-danger" onClick={()=>EliminarRegistros(element)}>
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr><td>
              sin datos</td></tr>
          )}
        </tbody>
      </Table>
    </>
  );
}
