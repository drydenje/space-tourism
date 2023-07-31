import NavBar from '@/src/components/NavBar';
import FetchGraphQL from '@/data/FetchGraphQL';
// import data from '@/data/crew';


export default async function Home() {
  const data = await FetchGraphQL(query);
  console.log('-----------')
  console.log(data.data.crewCollection);

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