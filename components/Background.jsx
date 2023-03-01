import Image from "next/image";
import React, { useEffect, useState } from "react";

const imagesd = [
  { img: 0, w: 83, h: 89, l: 10, t: 10 },
  { img: 1, w: 82, h: 66, l: 80, t: 10 },
  { img: 2, w: 100, h: 100, l: 10, t: 90 },
  { img: 2, w: 100, h: 100, l: 15, t: 35 },
  { img: 3, w: 103, h: 82, l: 80, t: 90 },
  { img: 0, w: 83, h: 89, l: 90, t: 40 },
  { img: 3, w: 103, h: 82, l: 5, t: 60 },
  { img: 1, w: 82, h: 66, l: 85, t: 70 },
];
const Background = ({ children }) => {
  const [images, setImages] = useState(imagesd);
  useEffect(() => {
    // Verificar si el dispositivo es un celular
    /*if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // código a ejecutar si el dispositivo es un celular
    console.log("Este dispositivo es un celular");
    setImages([ { img: 0, w: 63, h: 69, l: 1, t: 10 },
        { img: 1, w: 62, h: 46, l: 80, t: 10 },
        { img: 2, w: 80, h: 80, l: 1, t: 90 },
        { img: 2, w: 80, h: 80, l: 1, t: 38 },
        { img: 3, w: 83, h: 62, l: 80, t: 90 },
        { img: 0, w: 63, h: 69, l: 90, t: 40 },
        { img: 3, w: 83, h: 62, l: 1, t: 60 },
        { img: 1, w: 62, h: 46, l: 85, t: 60 },]);
  } else {
    // código a ejecutar si el dispositivo no es un celular
    console.log("Este dispositivo no es un celular");
  
  }*/
    if (window.innerWidth < 568) {
      // código a ejecutar si la pantalla es de un celular
      setImages([ { img: 0, w: 63, h: 69, l: 3, t: 10 },
        { img: 1, w: 62, h: 46, l: 86, t: 5 },
        { img: 2, w: 80, h: 80, l: 3, t: 90 },
        { img: 2, w: 80, h: 80, l: 3, t: 38 },
        { img: 3, w: 83, h: 62, l: 80, t: 90 },
        { img: 0, w: 63, h: 69, l: 90, t: 40 },
        { img: 3, w: 83, h: 62, l: 3, t: 60 },
        { img: 1, w: 62, h: 46, l: 85, t: 60 },]);
    }
    if (window.innerWidth < 480) {
        // código a ejecutar si la pantalla es de un celular
        setImages([ { img: 0, w: 43, h: 49, l: 3, t: 10 },
          { img: 1, w: 42, h: 26, l: 86, t: 5 },
          { img: 2, w: 50, h: 50, l: 2, t: 90 },
          { img: 2, w: 60, h: 60, l: 3, t: 38 },
          { img: 3, w: 63, h: 42, l: 80, t: 89 },
          { img: 0, w: 43, h: 49, l: 90, t: 40 },
          { img: 3, w: 63, h: 42, l: 3, t: 54 },
          { img: 1, w: 42, h: 26, l: 85, t: 50 },]);
      }

    return () => {};
  }, []);

  return (
    <div className="background">
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className="bg-item"
            style={{ left: `${image.l}%`, top: `${image.t}%` }}
          >
            <Image
              src={`/assets/img/${image.img}.png`}
              width={image.w}
              height={image.h}
              alt={`logo${index}`}
            />
          </div>
        );
      })}

      {children}
    </div>
  );
};

export default Background;
