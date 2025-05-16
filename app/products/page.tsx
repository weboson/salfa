import { Metadata } from "next";
import CardProduct from "./components/CardProduct"; // client component
import FilterForm from "./components/FilterForm";
// fetch
import { getData } from "./service/getData";



export const metadata: Metadata = {
  title: "Продукты",
  description: "Страница списка продуктов",
};

export default async function Products() {

  const { products } = await getData.getAllProducts();

  // if(filter) {

  //   const favoriteProducts = products.filter((item) => (
  //     arrFavoriteId.includes(item.id)
  //   ))
  // }

  return (
    <>
      <div className="wrapper_list">
        <h1>Список продуктов:</h1>
        <div className="wrapper_filter">
          <FilterForm />
        </div>
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