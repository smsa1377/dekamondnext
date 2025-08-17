import Link from 'next/link';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
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
                    <p>Choose One Of The Options Below.</p>
                </div>

                {/*go to /dashboard*/}
                <div className={styles.ctas}>
                    <Link
                        className={styles.primary}
                        href="dashboard"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className={styles.logo}
                            src="/assets/images/others/vercel.svg"
                            alt="coinersho logomark"
                            width={20}
                            height={20}
                        />
                        Dashboard
                    </Link>
                    {/*go to /auth*/}
                    <Link
                        href="auth"
                        rel="noopener noreferrer"
                        className={styles.secondary}
                    >
                        Login
                    </Link>
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
