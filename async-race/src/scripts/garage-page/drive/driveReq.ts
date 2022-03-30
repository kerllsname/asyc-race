/* eslint-disable @typescript-eslint/comma-dangle */
export default async function engineWorking(id: number) {
  const response = await fetch(
    `http://127.0.0.1:3000/engine?id=${id}&status=drive`,
    {
      method: 'PATCH',
    }
  );

  if (response.status === 200) {
    const result = await response.json();
    return result.success;
  }

  return false;
}
