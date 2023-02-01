import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const profile: string = "Uchenna's Profile";
  const fName: string = "Uchenna";

  return (
    <div className={styles.main}>
      <Head>
        <title>{ profile }</title>
        <meta name="description" content="Uchenna Bright Ugwumadu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div>
          <h2>Hello,</h2>
          <h1>I'm { fName },</h1>
          <h2></h2>
          <p>
            I'm a mathematics graduate with over three years of software engineering expertise who is extremely self motivated and eager. 
            I love to solve problems, and I'm keen to improve my abilities and acquire knowledge in the
            applications of mathematics and problem-solving techniques in technological engineering.
          </p>
          <p>
            I enjoy continuous personal development.
          </p>
        </div>
      </main>
    </div>
  )
}
