import axios from "axios";
 // Fake Store API has a limited collection of 20 products
const BASE_URL = "https://fakestoreapi.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

async function request(path, options = {}) {
  try {
    const response = await api.request({ url: path, ...options });
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message || "API request failed";
    throw new Error(message);
  }
}

export async function getProducts(category = "All Products") {
  const path =
    category === "All Products"
      ? "/products"
      : `/products/category/${encodeURIComponent(category)}`;
  return request(path);
}

export async function getCategories() {
  return request("/products/categories");
}

export async function getProduct(productId) {
  return request(`/products/${productId}`);
}

export async function loginUser({ username, password }) {
  return request("/auth/login", {
    method: "POST",
    data: { username, password },
  });
}

export async function registerUser(userData) {
  return request("/users", {
    method: "POST",
    data: userData,
  });
}