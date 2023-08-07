

export function Borrarid(id) {
  const url = "http://localhost:4000/tasks";
  fetch(`${url}/${id}`, {
    method: "DELETE",
  });
}

export function CrearTarea(tarea, Descripcion) {
  const url = "http://localhost:4000/tasks";

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
