import { useState, useEffect } from "react";

import { EliminarAlumnoCodigo, UpdateAlumno, CrearAlumno } from "./api.js";
import { DataTable } from "./DataTable.js";


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
      .then((datos) => setData(datos));
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
      // FechaActual(),
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
      datosEditar.fecha,
      datosEditar.anio
    );

    //console.log(datosEditar.nombre)
    MostrarDatos();
  };

  const handleChange = (e) => {
    setDatosEditar({ ...datosEditar, [e.target.name]: e.target.value });
    console.log(datosEditar.fecha);
  };

  const EliminarRegistros = (element) => {
    EliminarAlumnoCodigo(element.codigo);
    MostrarDatos();
  };

  const FechaActual = () => {
    const fechas = new Date(datosEditar.fecha).toLocaleDateString("en-US");
    fechas.split("T", ":");
    return fechas;
  };

  return (
    <>
      <form className="form-inline" onSubmit={IngresarRegistro}>
        <label className="sr-only" htmlFor="inlineFormInputName2">
          id
        </label>

        {bottonEditar ? (
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            id="inlineFormInputName3"
            placeholder="ingresar nombre"
            value={datosEditar.codigo}
            onChange={handleChange}
            name="codigo"
            disabled
          />
        ) : (
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            id="inlineFormInputName3"
            placeholder="ingresar nombre"
            value={datosEditar.codigo}
            onChange={handleChange}
            name="codigo"
          />
        )}
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

        {bottonEditar ? (
          <label className="sr-only" htmlFor="inlineFormInputName2">
            Fecha de Modificacion
          </label>
        ) : (
          <label className="sr-only" htmlFor="inlineFormInputName2">
            Fecha de Registro
          </label>
        )}

        <input
          type="date"
          className="form-control mb-2 mr-sm-2"
          id="inlineFormInputName3"
          placeholder="Fecha de ingreso"
          value={
            //
            bottonEditar ? FechaActual() : datosEditar.FechaActual
            //  datosEditar.fecha
          }
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
       <DataTable data={data} EliminarRegistros={EliminarRegistros} EditarDato={EditarDato} />
     
    </>
  );
}
