import { atom } from "recoil";
import useSWR from "swr";
import useSWRInmutable from "swr";
import { fetchAPI, fetchBFF } from "./api";

const BASE_URL = process.env.BASE_URL;
const eso = process.env.ALGO;
const algo = process.env.NODE_ENV;

console.log(BASE_URL, algo, eso, "Baseee");

export function useMe() {
  const { data, error } = useSWR("/me", fetchAPI);

  return data;
}

export function useProduct(id: string) {
  const { data, error } = useSWRInmutable("/products/" + id, fetchAPI);

  return data;
}

export function useProducts() {
  const { data, error } = useSWRInmutable("/products", fetchAPI);
  return data;
}

export function useDestacados() {
  const { data, error } = useSWR("/api/destacados", fetchBFF);
  return data;
}

export const searchProduct = atom({
  key: "search-product",
  default: "",
});

export function useSearch(
  search: string,
  offset: number = 0,
  limit: number = 10
) {
  const { data, error } = useSWRInmutable(
    "/search?search=" + search + "&offset=" + offset + "&limit=" + limit,
    fetchAPI
  );
  return data;
}

export async function getOrder(id: string, address: string) {
  return fetchAPI("/order?productId=" + id, {
    method: "POST",
    body: {
      address,
      successUrl: BASE_URL + "/thanks ",
    },
  });
}
