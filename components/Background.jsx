import Image from "next/image";
import React from "react";

const images = [
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
  return (
    <div className="background">
      {images.map((image, index) => {
        return (
          <div
            className="bg-item"
            style={{ left: `${image.l}%`, top: `${image.t}%` }}
          >
            <Image
              src={`/assets/img/${image.img}.png`}
              width={image.w}
              height={image.h}
              alt=""
            />
          </div>
        );
      })}

      {children}
    </div>
  );
};

export default Background;
