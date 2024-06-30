"use client";
import styles from "@/layout/Header.module.css";
import { useSession } from "next-auth/react";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
function Header() {
  const { data } = useSession();
  
 
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href={"/"}>صفحه اصلی</Link>
          </li>
          
        </ul>
      </div>
      {data ? (
        <div className={styles.login}>
          <Link href={"/dashboard"}>
            <FaUserAlt />
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href={"/signin"}>
            <FiLogIn />
            <span>ورود</span>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
