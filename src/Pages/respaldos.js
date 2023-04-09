useEffect(() => {
    fetch("http://localhost:4000/tasks")
      // Exito
      .then((response) => response.json()) // convertir a json
      .then((json) => setData(json)); //imprimir los datos en la consola
  }, []);