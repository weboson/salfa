"use client";
// client component: карточка товара
import React from "react";
import "../styles.css";
import Link from "next/link";

const CardProduct = ({ product }: any) => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          <div className="image-wrapper">
            <Link href={`/products/${product.id}`}>
              <img src={product.image} alt="" className="image" />
            </Link>
          </div>
          <div className="content-wrapper">
            <div className="title">
              <h4>{product.title}</h4>
            </div>
            <div className="price">{product.price}</div>
            <div className="description">{product.description}</div>
            <div className="actions">
              <button id="cart" className="button flip green-solid cart">
                <span className="front">Favorite</span>
                <span className="backside">Added</span>
              </button>
              <Link href={`/products/${product.id}`}>
                <img src={product.image} alt="" className="image" />
                <button className="button black-simple more">Подробнее</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
