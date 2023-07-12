import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/assets/shared/logo.svg";

const NavBar = () => {
  return (
    <nav className="flex flex-row items-center justify-between p-4 text-sm">
      <Image className="" src={Logo} alt="Space tourism logo" />
      <ul className="flex flex-row justify-end backdrop-blur">
        {[
          ["00", "Home", "/"],
          ["01", "Destination", "/destination"],
          ["02", "Crew", "/crew"],
          ["03", "Technology", "/technology"],
        ].map(([num, title, url]) => (
          <li className="my-0 mx-2 uppercase" key={title}>
            <Link href={url}>
              <span className="my-0 mx-2">{num}</span>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
