import React from "react";
import Carousel from "react-bootstrap/Carousel";

import { ImCheckmark, ImCross } from "react-icons/im";

import ImagenesHome from "./ImagenesHome";


const CarouselHome = ({ datos }) => {

  
  return (
    <Carousel variant="dark">
      {datos.length ? (
        datos.map((element) => (
          <Carousel.Item>
           
            <ImagenesHome  />
            <Carousel.Caption>
              <h3>Equipo {element.id}</h3>
              <p>
                {" "}
                La produccion fue de {element.cantidad}{" "}
                {element.cantidad < 100 ? (
                  <ImCross color="red" />
                ) : (
                  <ImCheckmark color="blue" />
                )}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      ) : (
        <h1>no hay datos</h1>
      )}
    </Carousel>
  );
};

export default CarouselHome;
