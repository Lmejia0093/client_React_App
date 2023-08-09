
import Swal from 'sweetalert2'

export function EliminarAlumnoCodigo(codigo) {
  const url = "http://localhost:4000/alumnos";
  fetch(`${url}/${codigo}`, {
    method: "DELETE",
  });
}



export function UpdateAlumno(codigo,nombre,fecha,anio) {
  const url = "http://localhost:4000/alumnos";

  fetch(`${url}/${codigo}`, {
    headers: { "Content-Type": "application/json" },
    method: "PUT",
    body: JSON.stringify({
    
      codigo: codigo,
      nombre: nombre,
      fecha:fecha,
      anio:anio,
    }),
  })
    .then((res) => {
      return console.log("Dato actualizado", res.status);
    }).then(()=>{
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title:`se actualizo el Nombre: ${nombre} con exito`,
        showConfirmButton: false,
        timer: 1500
      })
    })
   // .catch((error) =>console.error("error", error));
     .catch((error)=> {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
       
      })
     })
  // .then(res => console.log(res.status));
}

export function CrearAlumno(codigo,nombre,fecha,anio) {
  const url = "http://localhost:4000/alumnos";

 

  fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      codigo: codigo,
      nombre: nombre,
      fecha:fecha,
      anio:anio,
      
    }),
  })
    .then((res) => {
      return console.log("Dato Ingresado", res.status);
    }).then(()=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title:`se Ingreso con exito ${nombre}`,
        showConfirmButton: false,
        timer: 1500
      })
    })
   .catch((error)=> {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: `Error al Ingresar: ${nombre}`,
        text: `Intente mas tarde el error es ${error.message}`,
        timer: 2000
      })
     })  
 // .catch((error) =>console.error("error", error));
  // .then(res => console.log(res.status));
}
