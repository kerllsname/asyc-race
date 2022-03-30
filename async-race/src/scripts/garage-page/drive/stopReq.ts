/* eslint-disable @typescript-eslint/comma-dangle */
export default async function stopReq(id: number) {
  const response = await fetch(
    `http://127.0.0.1:3000/engine?id=${id}&status=stopped`,
    {
      method: 'PATCH',
    }
  );

  if (response.status === 200) {
    await response.json();

    return true;
  }

  return false;
}
