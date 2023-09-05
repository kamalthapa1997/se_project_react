export const baseUrl = "http://localhost:3001";
const token = localStorage.getItem("jwt");

export const processResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export async function getItems() {
  // console.log(`${baseUrl}/items`);
  const res = await fetch(`${baseUrl}/items`, {
    headers: {
      "content-type": "application/json",
    },
  });
  return processResponse(res);
}

export async function postNewItems({ name, weatherType, link }) {
  // console.log("post new items", name, weatherType, link);
  const res = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
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
  // console.log(id);
  const res = await fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return processResponse(res);
}

export async function addCardLike(id) {
  // console.log("remove card like", token);

  const res = await fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
  console.log(res.ok);
  return processResponse(res);
}
export async function removeCardLike(id) {
  console.log("add card like", localStorage.getItem("jwt"));
  const res = await fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
  console.log(res.ok);

  return processResponse(res);
}
