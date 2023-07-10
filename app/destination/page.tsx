import DestinationPicker from '@/components/DestinationPicker';

// type Destination = {
//   name: string;
//   images: {
//     png: string;
//     webp: string;
//   };
//   description: string;
//   distance: string;
//   travel: string;
// }

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <main className="">
      <h1>01 Pick your destination</h1>
      <DestinationPicker destinations={data} />
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