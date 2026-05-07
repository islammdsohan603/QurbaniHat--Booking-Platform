export async function getData() {
  const res = await fetch('http://localhost:3000/animalsData.json', {
    cache: 'no-store',
  });
  const data = await res.json();

  return data;
}
