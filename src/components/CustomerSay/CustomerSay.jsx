import React from "react";
import "../CustomerSay/CustomerSay.scss";
import SliderComponent from "../Slider/SliderComponent";
import BrandFace from "../../assets/img/BrandFace.png";
const CustomerSay = () => {
  return (
    <div>
      <h2>CustomerSay</h2>

      <div className="ListCardSay">
        <div className="CardSay">
          <div>
            <img src={BrandFace} alt="" />
          </div>
        </div>

        <div className="SilderCard">
          <SliderComponent />
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;
