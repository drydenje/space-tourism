import Link from "next/link";
import Image from "next/image";
// import Logo from "../../../public/assets/shared/logo.svg";
import Logo from "@/assets/shared/logo.svg";

const NavBar = () => {
  return (
    <nav className="grid-in-nav flex flex-row items-center justify-between p-4 text-sm h-32">
      <Image className="" src={Logo} alt="Space tourism logo w-48 h-48" />
      <ul className="flex flex-row justify-end backdrop-blur items-center h-24">
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
};

export default NavBar;
