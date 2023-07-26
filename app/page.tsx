import Link from 'next/link';
import NavBar from "@/src/components/NavBar/NavBar";


export default function Home() {
  return (
    <div className="grid h-screen bg-home-desktop bg-cover bg-right bg-no-repeat">
      <NavBar />
      
      <div className="flex justify-around items-end mb-28">
        <main className="max-w-[450px]">
          <h1 className="text-3xl uppercase font-sansCondensed">So, you want to travel to <span className="font-serif text-[150px] block my-16">Space</span></h1>
          <p className="font-sans text-lg">Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>
        </main>
    
        <aside className="">
          <div className="w-[274px] h-[274px] flex text-center items-center bg-white place-content-center rounded-full">
            <Link href="./destination" className="text-black font-serif text-[32px] uppercase">Explore</Link>
          </div>
        </aside>
      </div>
    </div>
  )
}
