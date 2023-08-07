import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { EliminarAlumnoCodigo, UpdateAlumno, CrearAlumno } from "./api.js";

const inicialForm = {
  codigo: "",
  nombre: "",
  anio: "",
  fecha: "",
};

export default function AlumnosTable() {
  const [data, setData] = useState({});
  const [datosEditar, setDatosEditar] = useState(inicialForm);
  const [bottonEditar, setbottonEditar] = useState(false);

  useEffect(() => {
    MostrarDatos();
  }, []);

  function MostrarDatos() {
    fetch("http://localhost:4000/alumnos", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  const EditarDato = (element) => {
    setbottonEditar(true);
    setDatosEditar(element);
  };

  const GuardarCambios = () => {
    UpdateAlumno(
      datosEditar.codigo,
      datosEditar.nombre,
      datosEditar.fecha,
      datosEditar.anio
    );
    MostrarDatos();
  };

  const LimpiarDatos = () => {
    setbottonEditar(false);
    setDatosEditar(inicialForm);
  };

  const IngresarRegistro = (e) => {
    e.preventDefault();
    CrearAlumno(
      datosEditar.codigo,
      datosEditar.nombre,
      new Date().toLocaleDateString('en-US'),
      datosEditar.anio
    );
  
    //console.log(datosEditar.nombre)
    MostrarDatos();
  };

  const handleChange = (e) => {
    setDatosEditar({ ...datosEditar, [e.target.name]: e.target.value });
  };

  const EliminarRegistros = (element) => {
    EliminarAlumnoCodigo(element.codigo);
    MostrarDatos();
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
          placeholder="0000"
          value={datosEditar.codigo}
          onChange={handleChange}
          name="codigo"
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

        <label className="sr-only" htmlFor="inlineFormInputName2">
          anio
        </label>
        <input
          type="number"
          className="form-control mb-2 mr-sm-2"
          id="inlineFormInputName3"
          placeholder="ingresar cantidad de anios"
          value={datosEditar.anio}
          onChange={handleChange}
          name="anio"
        />

        <label className="sr-only" htmlFor="inlineFormInputName2">
          Fecha
        </label>
        <input
          type="date"
          className="form-control mb-2 mr-sm-2"
          id="inlineFormInputName3"
          placeholder="Fecha de ingreso"
          value={datosEditar.fecha}
          onChange={handleChange}
          name="fecha"
        />

        {bottonEditar ? (
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-warning"
              onClick={GuardarCambios}
            >
              Guardar Cambio
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={LimpiarDatos}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <button type="submit" className="btn btn-success mb-2">
            Registrar
          </button>
        )}
      </form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>codigo</th>
            <th>Nombres</th>
            <th>anio</th>
            <th>fecha</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            data.map((element) => (
              <tr key={element.codigo}>
                <td>{element.codigo}</td>
                <td>{element.nombre}</td>
                <td>{element.anio}</td>
                <td>{new Date(element.fecha).toLocaleDateString("en-US")}</td>
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
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => EliminarRegistros(element)}
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>sin datos</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}
