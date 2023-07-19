const baseUrl =
  "https://my-json-server.typicode.com/kamalthapa1997/se_project_react";

export const processResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export function getItems() {
  return fetch(`${baseUrl}/items`).then(processResponse);
}

export function postNewItems({ name, weatherType, link }) {
  console.log(name, weatherType, link);
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      weather: weatherType,
      imageUrl: link,
    }),
  }).then(processResponse);
}

export function deleteItems(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(processResponse);
}
