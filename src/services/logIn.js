import API from "./api";

async function postLogIn({ email, password }) {
  const body = { email, password };
  return await API.post("/login", body);
}

export { postLogIn };
