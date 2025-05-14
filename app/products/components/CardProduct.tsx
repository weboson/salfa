"use client";
// client component: карточка товара
import React from "react";
import "../styles.css";
import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";
import { LuTrash2 } from "react-icons/lu";
import { CgDetailsMore } from "react-icons/cg";

const CardProduct = ({ product }: any) => {
  const isFavorite = true;

  const handleFavoriteClick = () => {
    if (isFavorite) {
      // if (product.isFavorite) {
      // dispatch(removeFavorite(product));
      return true;
    } else {
      // dispatch(addFavorite(product));
      return false;
    }
  };

  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          <Link href={`/products/${product.id}`}>
            <div className="image-wrapper">
              <img src={product.image} alt="" className="image" />
            </div>
            <div className="card_title">
              <h4>{product.title}</h4>
            </div>
            <div className="price">
              <p>{product.price} руб.</p>
            </div>
          </Link>

          <div className="action_button">
            <button
              style={
                isFavorite
                  ? { color: "rgb(255, 0, 68)" }
                  : { color: "inherit" }
              }
              type="button"
              aria-label="Добавить в избранное"
              onClick={handleFavoriteClick}
            >
              <MdFavoriteBorder className="card_icon" />
            </button>
            <button type="button" aria-label="Удалить продукт">
              <LuTrash2 className="card_icon" />
            </button>
            <button type="button" aria-label="Подробнее">
              <CgDetailsMore className="card_icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
