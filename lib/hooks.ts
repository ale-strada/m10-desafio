import { atom } from "recoil";
import useSWR from "swr";
import useSWRInmutable from "swr";
import { fetchAPI, fetchBFF } from "./api";

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
      successUrl: "https://e-commerce-rho-jet.vercel.app/thanks",
    },
  });
}
