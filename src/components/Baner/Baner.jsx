import React, { useState } from "react";
import "./Baner.scss";
import ImgComponent from "../../imgs/ImgComponent";
import banerimg from "../../imgs/banerimg.png";
import superoy from "../../imgs/superoy.jpg";
import moonstrar from "../../imgs/moonstrar.jpg";
import AirStrike from "../../imgs/AirStrike.jpg";

function Baner() {
  let arrSlider = [
    <ImgComponent src={banerimg} />,
    <ImgComponent src={superoy} />,
    <ImgComponent src={moonstrar} />,
    <ImgComponent src={AirStrike} />,
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (arrSlider.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (arrSlider.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {arrSlider.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button
        style={{ fontSize: "50px", fontWeight: 600 }}
        id="goLeft"
        onClick={goLeft}
      >
        &#12298;
        
      </button>
      <button
        style={{ fontSize: "50px", fontWeight: 600 }}
        id="goRight"
        onClick={goRight}
      >
        &#12299;
      </button>
    </div>
  );
}

export default Baner;
