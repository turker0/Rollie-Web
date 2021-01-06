import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rollie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Rollie</h1>
        <p className={styles.description}>
          Roll a movie to your watcher oh valley of plenty!
        </p>
        <div className={styles.imgWrapper}>
          {[1, 2, 3].map((item) => (
            <img
              src={"/img" + item + ".png"}
              alt={"Rollie" + item + " Photo"}
            />
          ))}
        </div>
        <p className={styles.description}>
          Find your next favorite among over 1000 iMDB 7+ movies.
        </p>
        <div className={styles.grid}>
          <a
            href="https://github.com/oguzturker8/Rollie"
            className={styles.card}
          >
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Rollie on Github.</p>
          </a>
          <a href="#" className={styles.card}>
            <h3>Download &rarr;</h3>
            <p>Download Rollie on your device.{`\n`} </p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
