"use client"
import Link from 'next/link';
import Image from "next/image";
import styles from "./app.module.css";
import {useAuth} from "@/hooks/useAuth";
import {RiDashboardFill} from "react-icons/ri";

export default function Home() {
    const {user} = useAuth();

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                {/*logo*/}
                <div>
                    <Image
                        className={styles.logo}
                        src="/assets/images/logo/coinersho.webp"
                        alt="coinersho.com logo"
                        width={100}
                        height={100}
                        priority
                    />
                </div>
                <div>
                    <p>Welcome To Coinersho.</p>
                </div>

                <div className={styles.ctas}>
                    {user ?
                        // go to /dashboard
                        <Link
                            className={styles.primary}
                            href="dashboard"
                            rel="noopener noreferrer"
                        >
                            <RiDashboardFill title="dashboard"/>
                            Dashboard
                        </Link> :
                        // go to /auth
                        <Link
                            href="auth"
                            rel="noopener noreferrer"
                            className={styles.secondary}
                        >
                            Login
                        </Link>}
                </div>
            </main>
            <footer className={styles.footer}>
                {/*<a*/}
                {/*  href=""*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*>*/}
                {/*  <Image*/}
                {/*    aria-hidden*/}
                {/*    src="/assets/images/others/file.svg"*/}
                {/*    alt="File icon"*/}
                {/*    width={16}*/}
                {/*    height={16}*/}
                {/*  />*/}
                {/*  Learn*/}
                {/*</a>*/}
                {/*<a*/}
                {/*  href=""*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*>*/}
                {/*  <Image*/}
                {/*    aria-hidden*/}
                {/*    src="/assets/images/others/window.svg"*/}
                {/*    alt="Window icon"*/}
                {/*    width={16}*/}
                {/*    height={16}*/}
                {/*  />*/}
                {/*  Examples*/}
                {/*</a>*/}
                {/*Go To dekamondnext Project in GitHub*/}
                <Link
                    href="https://github.com/smsa1377/dekamondnext"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/assets/images/others/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go To Project In GitHub →
                </Link>
            </footer>
        </div>
    );
}
