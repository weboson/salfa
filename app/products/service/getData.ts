import { notFound } from "next/navigation";


export const getData = {
  // список продуктов
  async getAllProducts() {
    const response = await fetch("https://fakestoreapi.in/api/products");

    if (response.status === 404) {
      return notFound();
    }

    return response.json();
  },
  async getOneProduct(id: string) {
    const response = await fetch(`https://fakestoreapi.in/api/products/${id}`);

    if (response.status === 404) {
      return notFound();
    }

    return response.json();
  },
}