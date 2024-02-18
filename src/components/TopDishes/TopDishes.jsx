import React, { useState, useEffect } from "react";
import { FaStar, FaPlusCircle } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import LoadingPage from "../LoadingPage";
import useProductStore from "../../app/store";
import "../TopDishes/TopDishes.scss";
import DishesShoop from "../../Page/DishesShoop/DishesShoop";

const TopDishes = () => {
  const { products, fetchProducts } = useProductStore();
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const productsPerPage = 10;

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const startIndex = pageNumber * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="TopDishes">
      <h2>
        Our Top <span className="SpanHeading">Dishes</span>
      </h2>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="DishesGrid">
        {filteredProducts.length === 0 ? ( // Qidirilgan mahsulotlar ro'yxati bo'sh bo'lsa
          <p>No dishes found.</p>
        ) : (
          filteredProducts.slice(startIndex, endIndex).map((product) => (
            <div className="DishesCard" key={product.id}>
              <img src={product.img} alt="Our Top Dishes" />
              <span>{product.status}</span>
              <h3>{product.name}</h3>
              <p>
                {product.time}
                <FaStar /> {product.star}
              </p>
              <div className="BtnShop">
                <h4>{product.price}</h4>
                <button className="FaPlusCircleBtn">
                  <FaPlusCircle className="FaPlusCircle" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={Math.ceil(filteredProducts.length / productsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default TopDishes;
