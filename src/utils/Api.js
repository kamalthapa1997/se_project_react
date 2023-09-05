export const baseUrl = "http://localhost:3001";
const token = localStorage.getItem("jwt");

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
    },
  });
  return processResponse(res);
}

export async function postNewItems({ name, weatherType, link }) {
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
  const res = await fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return processResponse(res);
}

export async function addCardLike(id) {
  const res = await fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });

  return processResponse(res);
}
export async function removeCardLike(id) {
  const res = await fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });

  return processResponse(res);
}
