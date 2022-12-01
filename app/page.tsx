import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <header>
                <nav className={styles.navbar}>
                    <div className={styles.navbar_bucket}>
                        <div className={styles.navbar_left}>
                            <button className="logo">LOGO</button>
                            <span className="telnumber">&#x260E; +48 506 038 978</span>
                        </div>
                        <div className={styles.navbar_right}>
                            <ul>
                                <li>
                                    <a href="http://mango-rewal.pl/domki-kempingowe/">Pokoje</a>
                                </li>
                                <li>Mango</li>
                                <li>Galeria</li>
                                <li>Rewal</li>
                                <li>Kontakt</li>
                            </ul>
                            <div>
                                <button className={styles.reservation}>REZERWACJA</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <main className={styles.main2}>
                <div className={styles.landing}>
                    <h1>Dom Gościnny Mango</h1>
                    <div>Rewal</div>
                    <p>Zapraszamy do wypoczynku w Rewalu</p>
                    <a href="https://google.com">O nas</a>
                </div>
                <div className={styles.overview}>
                    <div className={styles.intro}>
                        <div>Vivamus laoreet</div>
                        <p>Lorem, ipsum.</p>
                    </div>
                    <div className={styles.subpages}>
                        <div>Consectetur</div>
                        <div>Malesuada</div>
                        <div>Phasellus</div>
                    </div>
                </div>
            </main>

            {/* <main className={styles.main}>
                <div className={styles.landing}>
                    <h1 className={styles.title}>Dom Gościnny Mango</h1>
                    <h2>Domki Letnie Łokietek</h2>
                    <h3>Zapraszamy do wypoczynku w Rewalu</h3>

                    <p className={styles.description}>
                        Get started by editing <code className={styles.code}>app/page.tsx</code>
                    </p>

                    <div className={styles.grid}>
                        <a href="https://beta.nextjs.org/docs" className={styles.card}>
                            <h2>Documentation &rarr;</h2>
                            <p>Find in-depth information about Next.js 13</p>
                        </a>

                        <a
                            href="https://github.com/vercel/next.js/tree/canary/examples"
                            className={styles.card}
                        >
                            <h2>Examples &rarr;</h2>
                            <p>Explore the Next.js 13 playground.</p>
                        </a>

                        <a
                            href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.card}
                        >
                            <h2>Deploy &rarr;</h2>
                            <p>Deploy your Next.js site to a public URL with Vercel.</p>
                        </a>
                    </div>
                </div>
            </main> */}

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
}
