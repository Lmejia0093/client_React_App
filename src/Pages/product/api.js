import Swal from 'sweetalert2'

export function EliminarCategoriaID(id) {
  const url = "http://localhost:4000/Categoria";
  fetch(`${url}/${id}`, {
    method: "DELETE",
  });
}

export function CrearTarea(tarea, Descripcion) {
  const url = "http://localhost:4000/categoria";

  fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      title: tarea,
      description: Descripcion,
    }),
  })
    .then((res) => {
      return console.log("Dato Ingresado", res.status);
    }).then(()=>{
      alert("datos ingresados")
    })
    .catch((error) => console.error("error", error));

  // .then(res => console.log(res.status));
}

export function UpdateCategoria(id,nombre) {
  const url = "http://localhost:4000/Categoria";

  fetch(`${url}/${id}`, {
    headers: { "Content-Type": "application/json" },
    method: "PUT",
    body: JSON.stringify({
    
      nombre: nombre,
    }),
  })
    .then((res) => {
      return console.log("Dato actualizado", res.status);
    }).then(()=>{
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title:`se actualizo el Nombre: ${nombre} con exito`,
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch((error) => console.error("error", error));

  // .then(res => console.log(res.status));
}

export function CrearCategoria(nombre) {
  const url = "http://localhost:4000/Categoria";
 
  fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      nombre: nombre,
      
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
    .catch((error) => console.error("error", error));

  // .then(res => console.log(res.status));
}
