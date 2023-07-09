import Link from "next/link";
import styles from "./NavBar.modules.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {[
          ["00", "Home", "/"],
          ["01", "Destination", "/destination"],
          ["02", "Crew", "/crew"],
          ["03", "Technology", "/technology"],
        ].map(([num, title, url]) => (
          <li key={title}>
            <Link href={url}>
              <span className="num">{num}</span>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
