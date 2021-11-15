import API from "./api";
function createHeaders(token) {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  return config;
}

async function getCart({ userId, token }) {
  const body = { userId };
  const config = createHeaders(token);
  return await API.get("/cart", body, config);
}

export { getCart };
