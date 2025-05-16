import { IProduct } from "@/app/types/types";
import { getData } from "../../service/getData";


// для генерации статического экспорта
export async function generateStaticParams() {
  // получить ВСЕ продукты (объекты)
  const { products } = await getData.getAllProducts(); 

 
  // нужно присвоить [id] == product.id
  return products.map((product: IProduct) => ({
    id: '' + product.id, // string
  }))
}

export default function EditProduct() {
  return <h1>Edit product</h1>;
}
