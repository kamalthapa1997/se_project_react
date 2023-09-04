export const baseUrl = "http://localhost:3001";

export const processResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export async function getItems() {
  console.log(`${baseUrl}/items`);
  const res = await fetch(`${baseUrl}/items`);
  return processResponse(res);
}

export async function postNewItems({ name, weatherType, link }) {
  console.log("post new items", name, weatherType, link);
  const res = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
  console.log(id);
  const res = await fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  });
  return processResponse(res);
}
