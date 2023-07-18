import { useEffect, useState } from "react";
import "./App.css";
import { getProducts } from "./services/products";
import TableRow from "./components/TableRow";
import SearchForm from "./components/SearchForm";

function App() {
  // to store all  products
  const [products, setProducts] = useState<Product[] | undefined>([]);

  // a state to manage pagination of data
  const [page, setPage] = useState(0);

  // to fetch data went the page variable change
  useEffect(
    function () {
      getProducts(page)
        .then((res: ResponseTypeProducts) => {
          setProducts(res.products);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [page]
  );

  console.log("P : ", products);

  return (
    <div className="container">
      <header className="header">
        <h1>Adaa Test</h1>
        <nav>
          <SearchForm />
        </nav>
      </header>
      {products ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Descriprtion</th>
              <th scope="col">Price</th>
              <th scope="col">DiscountPercentage</th>
              <th scope="col">Rating</th>
              <th scope="col">Stock</th>
              <th scope="col">Brand</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return <TableRow product={product} />;
            })}
          </tbody>
        </table>
      ) : (
        <h2>Data Loading or Not Found!</h2>
      )}
      <div className="stack">
        <button
          onClick={() => setPage((prev) => prev + 1)}
          type="button"
          className="btn btn-primary"
        >
          Prev
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          type="button"
          className="btn btn-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
