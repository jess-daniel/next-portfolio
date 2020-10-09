import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Daniel - Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Portfolio</h1>
        {/* about me */}

        {/* tech */}

        {/* Projects */}
      </main>

      <footer className={styles.footer}>
        <p>Copyright 2020</p>
      </footer>
    </div>
  );
}

// NOTE create an api for projects but use serverless functions?
