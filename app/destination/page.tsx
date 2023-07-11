import DestinationPicker from '@/components/DestinationPicker';
import data from '@/data/destinations';

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

export default function Home() {
  // const data = await getData();
  // console.log(data[0].images);

  return (
    <div>
      <h1>01 Pick your destination</h1>
      { data && 
        <DestinationPicker destinations={data} />
      }
    </div>
  )
}

// async function getData() {
//   const res = await fetch('http://localhost:3000/destinations.json');

//   if(!res.ok) {
//     throw new Error('Failed to fetch destination data');
//   }

//   return res.json();
// }