export async function getData() {
  const res = await fetch(
    'https://my-app-qurbaniweb.vercel.app/animalsData.json',
    { cache: 'no-store' },
  );

  return res.json();
}
