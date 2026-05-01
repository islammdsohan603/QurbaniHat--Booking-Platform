export async function getData() {
  const res = await fetch('http://localhost:3000/animalsData.json');
  const data = await res.json();

  return data;
}
