"use client";
// client component: карточка товара
import React from "react";
import "../styles.css";

const CardProduct = ({ product }: any) => {
  return (
    <>
      {product.title}
    </>
  );
};

export default CardProduct;
