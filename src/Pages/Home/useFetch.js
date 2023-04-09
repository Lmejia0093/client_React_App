import { useEffect, useState } from "react";

const inicialForm = {
    Equipo: "",
    id:null,
    cantidad:null,
    fecha:'',
   
  };

export function useFetch (url) {
    const [data, setData] =  useState (inicialForm);

    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => setData(data));
      }, []);

  return {data}
}

