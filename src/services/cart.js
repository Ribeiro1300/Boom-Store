import API from "./api";
function createHeaders(token) {
  const config = { headers: { authorization: `Bearer ${token}` } };
  return config;
}

async function getCart({ token }) {
  const config = createHeaders(token);
  return await API.get("/cart", config);
}

async function postProductInCart({ userId, productId, token }) {
  const body = { user: { id: userId }, product: { id: productId } };
  const config = createHeaders(token);
  return await API.post("/cart", body, config);
}

export { getCart, postProductInCart };
