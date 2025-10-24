import Link from "next/link";
import { BsHouseDoorFill } from "react-icons/bs";
import styles from "./Breadcrumb.module.css";

export default function BreadCrumb({ slug }) {
    return (
        <nav className={styles.breadcrumb}>
            <ol>
                <li>
                    <Link href="/" className={styles.home}><BsHouseDoorFill size={16} /></Link>
                </li>
                <li className={styles.separator}>/</li>
                <li className={styles.current}>{slug}</li>
            </ol>
        </nav>
    );
};
