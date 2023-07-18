import makeRequest from "../utils/makeRequest";

export async function getProducts(page: number) {
  return makeRequest(`/products?limit=10&skip=${5 * page}`, { method: "GET" })
    .then((res:ResponseTypeProducts) => res)
    .catch((err) => err);
}
