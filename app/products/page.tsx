import { Metadata } from "next";
import CardProduct from "./components/CardProduct"; // client component

async function getData() {
  const response = await fetch("https://fakestoreapi.in/api/products");
  return response.json();
}

export const metadata: Metadata = {
  title: "Продукты",
  description: "Страница списка продуктов",
};

export default async function Products() {
  const { products } = await getData();
  return (
    <>
      <div className="wrapper_list">
        <h1>Список продуктов:</h1>
        <ul>
          {products.map((item: any) => (
            <li key={item.id}>
              <CardProduct product={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
