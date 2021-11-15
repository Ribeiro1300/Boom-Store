import API from "./api";

async function postSignUp({
  name,
  email,
  cpf,
  address,
  password,
  confirmPassword,
}) {
  const body = { name, email, cpf, address, password, confirmPassword };
  return API.post("/signup", body);
}

export { postSignUp };
