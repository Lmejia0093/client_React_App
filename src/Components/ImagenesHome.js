import React from "react";

import { useFetch } from "../Helper/useFetch";
const Rutaimagenes = require.context("../assets/img", true);
const ImagenesHome = () => {
  const { data } = useFetch("http://localhost:4000/Home");

  //console.log(data.nombre[1])
  return (
    <div>
      {data.map((element) => (
        <img
          className="d-block w-25"
          src={Rutaimagenes(`./${element.nombre}`)}
        />
      ))}
    </div>
  );
};

export default ImagenesHome;
