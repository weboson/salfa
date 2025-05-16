

export const getData = {
  // список продуктов
  async getAllProducts() {
    const response = await fetch("https://fakestoreapi.in/api/products");
    return response.json();
  },
  async getOneProduct(id: string) {
    const response = await fetch(`https://fakestoreapi.in/api/products/${id}`);
    return response.json();
  },
}