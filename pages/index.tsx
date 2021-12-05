import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  console.log('coming 2022?')
  return (
    <div className={styles.container}>
      <Head>
        <title>pnw.builders</title>
        <meta name="description" content="maybe something" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ⛰️ pnw.builders ⛰️
        </h1>
      </main>

      {/* <footer className={styles.footer}>
        maybe something
      </footer> */}
    </div>
  )
}

export default Home
