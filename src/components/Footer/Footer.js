import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsFillTelephoneFill, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";

import Link from "next/link";
import Logo from "../Logo";
import CopyRight from "./CopyRight";

import styles from "./Footer.module.css";

export default function Footer() {
  const fcbk = process.env.NEXT_PUBLIC_LINK_FACEBOOK;
  const insta = process.env.NEXT_PUBLIC_LINK_INSTAGRAM;

  return (
    <section className={styles.section}>
      <footer className={styles.footer}>
        {/* Colonne gauche : Logo */}
        <div className={styles.left}>
          <Logo />
        </div>

        {/* Colonne droite */}
        <div className={styles.right}>
          {/* Bloc Contact */}
          <div className={styles.contact}>
            <h6>Contact :</h6>
            <ul>
              <li>
                <BsFillTelephoneFill /> 06.62.51.04.62
                <Link href="">
                  <BsWhatsapp className={styles.icon} />
                </Link>
              </li>
              <li>
                <Link href="mailto:animauxlogis@outlook.fr">
                  <AiOutlineMail /> animauxlogis@outlook.fr
                </Link>
              </li>
              <li>
                <GiPositionMarker /> 25E rue principale
              </li>
              <li>&nbsp;&nbsp;&nbsp; 57940 VOLSTROFF</li>
            </ul>
          </div>

          {/* Bloc Liens */}
          <div className={styles.links}>
            <h6>Liens :</h6>
            <ul>
              <li>
                <Link href="/conditions-generales-d-utilisation">C.G.U.</Link>
              </li>
              <li>
                <Link href="/mentions-legales">Mentions légales</Link>
              </li>
              <li>
                <Link href="/tarifs">Tarifs</Link>
              </li>
              <li>
                <Link href="/coups-de-coeur">Coups de cœur</Link>
              </li>
            </ul>

            <ul className={styles.socials}>
              <li>
                <Link
                  href={fcbk}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <BsFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href={insta}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <BsInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <CopyRight />
    </section>
  );
}
