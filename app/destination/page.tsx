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

  return (
    <div>
      <h1 className="uppercase"><span className="grey">01</span> Pick your destination</h1>
      { data && 
        <DestinationPicker destinations={data} />
      }
    </div>
  )
}
