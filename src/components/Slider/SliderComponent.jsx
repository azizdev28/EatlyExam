import React from "react";
import ReactSlider from "react-slick"; // Slider nomli komponentga ReactSlider deb nom beramiz
import { FaRegStar } from "react-icons/fa";
import "../Slider/Slider.scss";

function SliderComponent() {
  // Slider nomli funksiyani SliderComponent deb o'zgartiramiz
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="sliderContainer">
      <ReactSlider {...settings}>
        {" "}
        {/* Slider nomli komponentga o'zgartirilgan nom beriladi */}
        <div>
          <p>
            “ Online invoice payment helps companies save time, are faster and
            save maximum effort for the clients and save maximum effort. Online
            invoice payment helps companies save time ”
          </p>
          <span>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </span>
        </div>
        <div>
          <p>
            “ Online invoice payment helps companies save time, are faster and
            save maximum effort for the clients and save maximum effort. Online
            invoice payment helps companies save time ”
          </p>
          <span>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </span>
        </div>
      </ReactSlider>
    </div>
  );
}

export default SliderComponent; // Funksiyani SliderComponent deb nomlamoq
