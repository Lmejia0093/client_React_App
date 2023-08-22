import React from 'react'

export const DataForm = ({IngresarRegistro,bottonEditar,datosEditar,handleChange,FechaActual,GuardarCambios,LimpiarDatos}) => {
  return (
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
  )
}
