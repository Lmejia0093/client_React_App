import { useState, useEffect } from "react";

import { EliminarAlumnoCodigo, UpdateAlumno, CrearAlumno } from "./api.js";
import { DataTable } from "./DataTable.js";
import { DataForm } from "./DataForm.js";

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
      <DataForm
        IngresarRegistro={IngresarRegistro}
        bottonEditar={bottonEditar}
        handleChange={handleChange}
        datosEditar={datosEditar}
        FechaActual={FechaActual}
        GuardarCambios={GuardarCambios}
        LimpiarDatos={LimpiarDatos}
      />
      <DataTable
        data={data}
        EliminarRegistros={EliminarRegistros}
        EditarDato={EditarDato}
      />
    </>
  );
}
