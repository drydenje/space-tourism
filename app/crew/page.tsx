import NavBar from '@/src/components/NavBar';
import FetchGraphQL from '@/data/FetchGraphQL';
// import data from '@/data/crew';


export default async function Home() {
  const { crewCollection } = await FetchGraphQL(query);
  const crew = crewCollection.items;
  // console.log(crew[0]);

  return (
    <div className="bg-crew-desktop cover">
      <NavBar />
      <main className="">
        <h1>02 Meet your crew</h1>
      </main>
    </div>
  )
}

const query = `query {
  crewCollection {
    items {
      name
      role
      bio
    }
  }
}`;