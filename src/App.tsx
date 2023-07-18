import "./App.css";
import { useEffect, useState } from "react";
import { getProducts, searchProducts } from "./services/products";
import TableRow from "./components/TableRow";
import SearchForm from "./components/SearchForm";

function App() {
  // to store all  products
  const [products, setProducts] = useState<Product[] | undefined>([]);

  const [search, setSearch] = useState("");

  // a state to manage pagination of data
  const [page, setPage] = useState(0);

  const [error, setError] = useState(false);

  // to handle submission of the form
  const submitHandler = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!search) return;

    searchProducts(search)
      .then((res: ResponseTypeProducts) => {
        setProducts(res.products);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });

    setSearch("");
  };

  // to fetch data went the page variable change
  useEffect(
    function () {
      getProducts(page)
        .then((res: ResponseTypeProducts) => {
          setProducts(res.products);
          setError(false);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
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
          <SearchForm
            onChange={(e) => setSearch(e.target.value)}
            search={search}
            submitHandler={submitHandler}
          />
        </nav>
      </header>

      {error && (
        <div className="alert alert-danger" role="alert">
          Something went wrong !
        </div>
      )}

      {products && !error ? (
        products.length >= 1 ? (
          <table className="table table-striped">
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
          <div className="alert alert-danger" role="alert">
            Not Found !
          </div>
        )
      ) : (
        <div className="alert alert-danger" role="alert">
          Sometings went wrong !
        </div>
      )}
      <div className="stack">
        <button
          onClick={() => setPage((prev) => (prev >= 1 ? prev - 1 : prev))}
          type="button"
          className="btn btn-primary"
          disabled={page <= 0}
        >
          Prev
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          type="button"
          className="btn btn-primary"
          disabled={page >= 20}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
