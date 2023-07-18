type Props = { product: Product };

function TableRow({ product }: Props) {
  return (
    <tr>
      <td scope="col">{product.id}</td>
      <td scope="col">{product.title}</td>
      <td scope="col">{product.description}</td>
      <td scope="col">{product.price}</td>
      <td scope="col">{product.discountPercentage}</td>
      <td scope="col">{product.rating}</td>
      <td scope="col">{product.stock}</td>
      <td scope="col">{product.brand}</td>
      <td scope="col">{product.category}</td>
    </tr>
  );
}

export default TableRow;
