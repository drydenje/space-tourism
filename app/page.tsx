import Link from 'next/link';
import NavBar from "@/src/components/NavBar/NavBar";


export default function Home() {
  return (
    <div className="h-screen bg-home-desktop bg-cover bg-right bg-no-repeat">
      <NavBar />
      <main>
        <div>
          <h1 className="text-3xl uppercase font-sansCondensed">So, you want to travel to <span className="font-serif text-[150px] block my-16">Space</span></h1>
          <p className="font-sans text-lg">Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className="h-64 w-64 text-center self-center bg-white place-content-center rounded-full inline-block">
          <Link href="./destination" className="text-black font-serif text-3xl uppercase">Explore</Link>
        </div>
      </main>
    </div>
  )
}
