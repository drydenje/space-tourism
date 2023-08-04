import NavBar from '@/src/components/NavBar';
import FetchGraphQL from '@/src/data/FetchGraphQL';

export default async function Home() {
  const { technologyCollection } = await FetchGraphQL(query);
  // console.log('technologyCollection:', technologyCollection)
  const technology = technologyCollection.items;
  // console.log('technology:', technology);
  const images = technology[0].imagesCollection.items;
  // console.log('images:', images)


  return (
    <div className="grid h-screen bg-technology-desktop bg-cover bg-no-repeat">
      <NavBar />
      <main className="">
        <h1>02 Space launch 101</h1>
      </main>
    </div>
  )
}

const query = `query {
  technologyCollection {
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
    }
  }
}`