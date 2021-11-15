import API from "./api";

async function postSignUp({ name, email, cpf, address, password }) {
  const body = { name, email, cpf, address, password };
  return API.post("/signup", body);
}

export { postSignUp };
