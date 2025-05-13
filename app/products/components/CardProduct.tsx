"use client";
// client component: карточка товара
import React from "react";
import "../styles.css";

const CardProduct = ({ product }: any) => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          <div className="image-wrapper">
            <img
              src={product.image}
              alt=""
              className="image"
            />
          </div>
          <div className="content-wrapper">
            <div className="title">
              <h4>{product.title}</h4>
            </div>
            <div className="price">{product.price}</div>
            <div className="description">
{product.description}
            </div>
            <div className="actions">
              <button id="cart" className="button flip green-solid cart">
                <span className="front">Favorite</span>
                <span className="backside">Added</span>
              </button>
              <button className="button black-simple more">More Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
