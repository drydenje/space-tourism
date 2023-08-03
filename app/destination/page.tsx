import DestinationPicker from '@/components/DestinationPicker';
import NavBar from '@/src/components/NavBar/NavBar';
import FetchGraphQL from '@/data/FetchGraphQL';
// import data from '@/data/destinations';


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
  const { destinationsCollection } = await FetchGraphQL(query);
  const destinations = destinationsCollection.items;
  // console.log(destinations);

  return (
    <div className="h-screen w-screen bg-no-repeat 
      bg-destination-mobile
      md:bg-destination-tablet
      lg:bg-destination-desktop">
      <NavBar />
      <main>
        <h1 className="uppercase"><span className="grey">01</span> Pick your destination</h1>
        { destinations && 
          <DestinationPicker destinations={destinations} />
        }
      </main>
    </div>
  )
}

const query = `query {
  destinationsCollection {
    items {
      name
      imagesCollection {
				items {
				  title
				  description
				  contentType
				  fileName
				  size
				  url
				  width
				  height
				}
      }
      description
      distance
      travel
    }
  }
}
`
