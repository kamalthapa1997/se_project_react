// export const baseUrl = "http://localhost:3001";
export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://whattowear.chickenkiller.com"
    : "http://localhost:3001";

//deployed-backend-url is a URL to your deployed back end

export const processResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export async function getItems() {
  const res = await fetch(`${baseUrl}/items`, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${getToken("jwt")}`,
    },
  });
  return processResponse(res);
}

export async function postNewItems({ name, weatherType, link }) {
  // const token = localStorage.getItem("jwt");
  const res = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      authorization: `Bearer ${getToken("jwt")}`,
    },
    body: JSON.stringify({
      name: name,
      weather: weatherType,
      imageUrl: link,
    }),
  });
  return processResponse(res);
}

export async function deleteItems(id) {
  console.log("delete card id", id);
  const token = localStorage.getItem("jwt");
  const res = await fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return processResponse(res);
}

export async function addCardLike(id) {
  console.log(" like card id", id);

  const res = await fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken("jwt")}`,
    },
    body: JSON.stringify({
      id,
    }),
  });

  return processResponse(res);
}

const getToken = (token) => {
  if (token) {
    const currentToken = localStorage.getItem(token);
    return currentToken;
  } else {
    console.error("No token in storage");
    return null;
  }
};

export async function removeCardLike(id) {
  console.log("remove card id", id);

  const res = await fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken("jwt")}`,
    },
    body: JSON.stringify({
      id,
    }),
  });

  return processResponse(res);
}
