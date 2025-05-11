type Props = {
  params: {
    id: string;
  };
};

export default async function Product({ params }: Props) {
  // asynchronous access of `params.id`.
  const { id } = await params
  return <h1>Product ID: {id}</h1>
}
