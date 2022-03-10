// In a production environment, this could be hardcoded, but it probably wouldn't be.
const baseURL = 'https://mc-dev-5.herokuapp.com/'

export const get = async (path) => {
  const res = await fetch(`${baseURL}${path}`);
  return await res.json();
}

export const post = async (path, data) => {
  const res = await fetch(`${baseURL}${path}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return await res.json()
}

export const del = async (path, data) => {
  const res = await fetch(`${baseURL}${path}`, {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return res.ok
}