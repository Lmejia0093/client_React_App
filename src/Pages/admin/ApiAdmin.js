

export function Borrarid(id) {
  const url = "http://localhost:4000/Usuarios";
  fetch(`${url}/${id}`, {
    method: "DELETE",
  });
}

export function CrearTarea(nombre, clave) {
  const url = "http://localhost:4000/Usuarios";

  fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      nombre: nombre,
      clave: clave,
    }),
  })
  //  .then((res) => {
  //   return console.log(res.ok);
  //  })
  //  .catch((error) => console.error("error", error));

  // .then(res => console.log(res.status));
}
