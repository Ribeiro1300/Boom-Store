import API from "./api";

async function postLogIn({ email, password }) {
  const body = { email, password };
  return API.post("/signup", body);
}

export { postLogIn };
