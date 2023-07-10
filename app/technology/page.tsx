
export default async function Home() {
  // const data = await getData();
  // console.log(data);

  return (
    <main className="">
      <h1>02 Space launch 101</h1>
    </main>
  )
}

async function getData() {
  const res = await fetch('http://localhost:3000/destinations.json');

  if(!res.ok) {
    throw new Error('Failed to fetch destination data');
  }

  return res.json();
}