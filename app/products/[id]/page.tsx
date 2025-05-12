import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

// dinamic Metadata
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id } = await params
 
  return {
    title: `Продукт №${id}`,
    description: `Описание продукта ${id}`,
  }
}


export default async function Product({ params }: Props) {
  // asynchronous access of `params.id`.
  const { id } = await params
  return <h1>Product ID: {id}</h1>
}
