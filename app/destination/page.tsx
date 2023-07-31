import DestinationPicker from '@/components/DestinationPicker';
import NavBar from '@/src/components/NavBar/NavBar';
import data from '@/data/destinations';

type Destination = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export default function Home() {

  return (
    <div className="h-screen w-screen bg-no-repeat 
      bg-destination-mobile
      md:bg-destination-tablet
      lg:bg-destination-desktop">
      <NavBar />
      <main>
        <h1 className="uppercase"><span className="grey">01</span> Pick your destination</h1>
        { data && 
          <DestinationPicker destinations={data} />
        }
      </main>
    </div>
  )
}
