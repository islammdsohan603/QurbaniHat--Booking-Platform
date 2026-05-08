export async function getData() {
  const res = await fetch(
    'https://qurbani-hat-booking-platform.vercel.app/animalsData.json',
    { cache: 'no-store' },
  );

  return res.json();
}