import Link from "next/link";
import styles from "./NavBar.modules.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {[
          ["Home", "/"],
          ["Destination", "/destination"],
          ["Crew", "/crew"],
          ["Technology", "/technology"],
        ].map(([title, url]) => (
          <li key={title}>
            <Link href={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
