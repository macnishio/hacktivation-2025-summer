import type { NextPage } from 'next';
import Head from 'next/head';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import CounterContract from '../components/CounterContract';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hacktivation 2025 Summer</title>
        <meta
          content="Web3 Application for Hacktivation 2025 Summer"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 className={styles.title}>
            Hacktivation 2025 Summer
          </h1>
          <ConnectButton />
        </div>

        <p className={styles.description}>
          Web3 Application with Counter Smart Contract
        </p>

        <CounterContract />

        <div className={styles.grid}>
          <a className={styles.card} href="https://nextjs.org/docs">
            <h2>Next.js Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            className={styles.card}
            href="https://github.com/vercel/next.js/tree/canary/examples"
          >
            <h2>Next.js Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            className={styles.card}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/macnishio/hacktivation-2025-summer" rel="noopener noreferrer" target="_blank">
          Made with ❤️ for Hacktivation 2025 Summer
        </a>
      </footer>
    </div>
  );
};

export default Home;
