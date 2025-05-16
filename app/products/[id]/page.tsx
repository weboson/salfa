import { Metadata } from "next";
import Image from "next/image";
// fetch
import { getData } from "../service/getData";
import { IProduct } from "@/app/types/types";

// type Props = {
//   params: {
//     id: string;
//   };
// };

// НОВЫЙ КОД
type Props = {
  params: Promise<{
    id: string;
  }>;
};  

// для генерации статического экспорта
export async function generateStaticParams() {
  // получить ВСЕ продукты (объекты)
  const { products } = await getData.getAllProducts(); 

 
  // нужно присвоить [id] == product.id
  return products.map((product: IProduct) => ({
    id: '' + product.id, // string
  }))
}

// dinamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Продукт №${id}`,
    description: `Описание продукта ${id}`,
  };
}

export default async function Product({ params }: {params: Promise<{ id: string }>}) {
  // asynchronous access of `params.id`.
  const { id } = await params;

  const { product } = await getData.getOneProduct(id);

  return (
    <>
      <div>
        <div className="title_product">
          <h3>Название</h3>
          {product.title}
          <h3>Brand</h3>
          {product.brand}
          <h3>model</h3>
          {product.model}
        </div>
        <div className="image_product">
          {/* <img style={{width: "400px"}}src={product.image} alt="" /> */}
          <Image src={product.image} alt={product.title} className="image" width={400}/>
        </div>
        <div className="description_product">
          <h3>Описание</h3>
          {product.description}
        </div>
        <div className="price_product">
          <h3>Цена</h3>
          {product.price}
        </div>
        <div className="color_product">
          <h3>Цвет</h3>
          {product.color}
        </div>
      </div>
    </>
  );
}
