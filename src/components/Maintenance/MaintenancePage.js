import styles from "./Maintenance.module.css"
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill, BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

export default function MaintenancePage() {
  const fcbk = process.env.NEXT_PUBLIC_LINK_FACEBOOK;
  const insta = process.env.NEXT_PUBLIC_LINK_INSTAGRAM;
  const mailto = process.env.NEXT_PUBLIC_MAIL;
  const phone = process.env.NEXT_PUBLIC_PHONE;
  const phonelink = process.env.NEXT_PUBLIC_PHONE_LINK;
  const wtsp = process.env.NEXT_PUBLIC_WHATSAPP;
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>🚧 Site en maintenance 🚧</h1>
        <h2 className={styles.siteName}>Anim'aux Logis</h2>

        <div className={styles.contact}>
          <p>
            <AiOutlineMail />{" "}
            <Link href={`mailto:${mailto}`} target="_blank" rel="noopener noreferrer">
              {mailto}
            </Link>
          </p>
          <p>
            <BsFillTelephoneFill />{" "}
            <Link href={phonelink} target="_blank" rel="noopener noreferrer">
              {phone}
            </Link>
          </p>
        </div>

        <div className={styles.socials}>
          <Link href={fcbk} target="_blank" rel="noopener noreferrer">
            <BsFacebook />
          </Link>
          <Link href={insta} target="_blank" rel="noopener noreferrer">
            <BsInstagram />
          </Link>
          <Link href={wtsp} target="_blank" rel="noopener noreferrer">
            <BsWhatsapp />
          </Link>
        </div>
      </div>
    </div>
  );
}
