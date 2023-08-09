import Link from "next/link";
import Image from "next/image";
import FetchGraphQL from "@/src/data/FetchGraphQL";
import Logo from "@/assets/shared/logo.svg";

export default async function NavBar() {
  const { sharedCollection } = await FetchGraphQL(query);
  const images = sharedCollection.items.reduce(
    (obj, item) => ({
      ...obj,
      [item.name]: item.image,
    }),
    {}
  );

  console.log("images:", images);

  return (
    <nav
      className="grid-in-nav flex flex-row items-center justify-between p-4 text-sm 
       pr-0"
    >
      <Image className="w-48 h-48" src={Logo} alt="Space tourism logo" />
      <hr className="w-[20%]" />
      <ul className="flex flex-row justify-around backdrop-blur-3xl tracking-widest items-center w-[55%] h-[60px]">
        {[
          ["00", "Home", "/"],
          ["01", "Destination", "/destination"],
          ["02", "Crew", "/crew"],
          ["03", "Technology", "/technology"],
        ].map(([num, title, url]) => (
          <li
            className="my-0 mx-0 uppercase font-sansCondensed text-base font-normal"
            key={title}
          >
            <Link href={url}>
              <span className="my-0 mx-2 font-bold">{num}</span>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const query = `query {
  sharedCollection {
    items {
      name
      image {
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
  }
}`;
