import React, { useContext } from "react";
import { baseUrl, processResponse } from "./Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
// const [setLoggedIn] = useContext(CurrentUserContext);
export async function registerNewUser({ email, password, name, avatar }) {
  //   const { setLoggedIn } = useContext(CurrentUserContext);

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

  const data = await response.json();
  console.log("data ko values", data, data.token);
  // localStorage.setItem("token", data.token);
  return data;

  // const userDetails = fetch(`${baseUrl}/users/me`, {
  //   method: "GET",
  //   headers: {
  //     authorization: `Bearer ${data.token}`,
  //   },
  // });
  // const userDetailsInfo = userDetails.json();
  // console.log(userDetailsInfo);
  //   }
  // });
}
export async function checkTokenValidity(token) {
  const res = await fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  console.log(res);
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
  const data = await res.json();
  // console.log("clothing items", data);
  return data;
}
