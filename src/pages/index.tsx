import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import About from './about';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const profile: string = "Uchenna's Profile";

  return (
    <div className={styles.main}>
      <Head>
        <title>{ profile }</title>
        <meta name="description" content="Uchenna Bright Ugwumadu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <About />
      </main>
    </div>
  )
}
