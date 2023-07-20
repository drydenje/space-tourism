import NavBar from '@/src/components/NavBar';
import data from '@/data/crew';


export default async function Home() {
  console.log(data);

  return (
    <div className="bg-crew-desktop cover">
      <NavBar />
      <main className="">
        <h1>02 Meet your crew</h1>
      </main>
    </div>
  )
}
