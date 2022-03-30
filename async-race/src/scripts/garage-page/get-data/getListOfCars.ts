export default async function getCars() {
  const url = 'http://127.0.0.1:3000/garage';

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
}
