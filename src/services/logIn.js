import API from "./api";

async function postLogIn({ email, password }) {
  const body = { email, password };
  return API.post("/login", body);
}

export { postLogIn };
