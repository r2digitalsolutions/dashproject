export const api = async (url: string, method: string, body: any) => {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Something went wrong');
  }
};