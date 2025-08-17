"use client";
import Link from "next/link";
import styles from "./global-not-found.module.scss";

export default function globalNotFound() {
    return (
        <div className={styles.container}>
            <h1>I looked, it wasn't there. nope, nada, nothing.! 😕</h1>
            <p>Check the address or return to the login page.</p>
            <Link href="auth">
                <button>Return to login</button>
            </Link>
        </div>
    );
}
