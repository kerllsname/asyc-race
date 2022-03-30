/* eslint-disable @typescript-eslint/comma-dangle */
export default async function startReq(id: number) {
  const response = await fetch(
    `http://127.0.0.1:3000/engine?id=${id}&status=started`,
    {
      method: 'PATCH',
    }
  );

  const result = await response.json();

  return result;
}
