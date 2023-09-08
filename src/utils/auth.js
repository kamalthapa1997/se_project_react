import { baseUrl, processResponse } from "./Api";

export async function registerNewUser({ email, password, name, avatar }) {
  const res = await fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      name: name,
      password: password,
      avatar: avatar,
    }),
  });
  return processResponse(res);
}
export async function userSignIn({ email, password }) {
  const response = await fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  return processResponse(response);
}
export async function checkTokenValidity(token) {
  const res = await fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return processResponse(res);
}

export async function gettingUserItems(token) {
  const res = await fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return processResponse(res);
}

export async function profileUpdate(name, avatar) {
  const res = await fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      name: name,
      avatar: avatar,
    }),
  });
  return processResponse(res);
}
