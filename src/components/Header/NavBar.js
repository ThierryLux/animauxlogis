import Link from "next/link";
import { BsHouseDoorFill } from "react-icons/bs";
import styles from "./NavBar.module.css";


export default function Navbar() {
    return (
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/" className={styles.navIcon}><BsHouseDoorFill size={18} /></Link>
          </li>
          <li>
            <Link href="/sorties-promenades-canines">Promenades</Link>
          </li>
          <li>
            <Link href="/visites-gardes-animales">Visites</Link>
          </li>
          <li>
            <Link href="/qui-suis-je">Qui suis-je ?</Link>
          </li>
          <li>
            <Link href="/secteur-d-intervention">Secteur</Link>
          </li>
          <li>
            <Link href="/tarifs">Tarifs</Link>
          </li>
        </ul>
      </nav>
    );
};
