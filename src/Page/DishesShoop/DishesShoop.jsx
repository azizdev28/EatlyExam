import React from "react";
import "../DishesShoop/DishesShoop.scss";
import oneSt from "../../assets/img/First.png";
const DishesShoop = () => {
  return (
    <div className="container">
      <div>
        <div className="DishesShoopCards">
          <div className="DishesShoopCard">
            <div className="shoopCardSave">
              <img src={oneSt} alt="" />
              <div>
                <h3>Chicken Hell</h3>
                <p>$12.99</p>
              </div>
            </div>
            <div className="ShoopCaunt">
              <span>
                <button>-</button>
                <h3>03</h3>
                <button>+</button>
              </span>
              <p>$38.97</p>
            </div>
          </div>
          <div className="DishesShoopCard">
            <div className="shoopCardSave">
              <img src={oneSt} alt="" />
              <div>
                <h3>Chicken Hell</h3>
                <p>$12.99</p>
              </div>
            </div>
            <div className="ShoopCaunt">
              <span>
                <button>-</button>
                <h3>03</h3>
                <button>+</button>
              </span>
              <p>$38.97</p>
            </div>
          </div>
        </div>

        <div className="ProductPrice">
          <ul>
            <li>
              <h3>Subtotal</h3>
              <p>$58.96</p>
            </li>
            <li>
              <h3>Delivery</h3>
              <p>$3.59</p>
            </li>
            <span>
              <h2>Total</h2>
              <p>$62.55</p>
            </span>
            <button>Review Payment</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DishesShoop;
