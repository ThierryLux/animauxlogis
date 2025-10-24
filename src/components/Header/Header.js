import Link from "next/link";
import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import styles from "./Header.module.css";
import Logo from "../Logo";
import Navbar from "./NavBar";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Gauche - Logo */}
      <div className={styles.left}><Logo /></div>

      {/* Centre - Navbar */}
      <Navbar />

      {/* Droite - Téléphone au-dessus de Contact */}
      <ul className={styles.right}>
        <li>
          <Link href="tel:0662510462" className={styles.actionBtn}>
            <BsFillTelephoneFill size={18} /> 06.62.51.04.62
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.actionBtn}>
            Contact
          </Link>
        </li>
      </ul>

    </header>
  );
}
