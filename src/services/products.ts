import makeRequest from "../utils/makeRequest";
/**
 * a function to get  products
 * @param page
 * @param numberOfItem
 * @returns
 */
export async function getProducts(page: number, numberOfItem: number) {
  return makeRequest(`/products?limit=${numberOfItem}&skip=${5 * page}`, {
    method: "GET",
  })
    .then((res: ResponseTypeProducts) => res)
    .catch((err) => err);
}
/**
 * a function which helps to search  products
 * @param search
 * @returns
 */
export async function searchProducts(search: string) {
  return makeRequest(`/products/search?q=${search}`, { method: "GET" })
    .then((res: ResponseTypeProducts) => res)
    .catch((err) => err);
}
