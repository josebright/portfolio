import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import About from './about';
import NavBar from '@/components/navbar';
import Projects from './projects';


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
      <main>
        <div className='bg-gradient-to-r from-[#C12F5C] via-[#4161A7] to-[#1A1D20] m-0 w-screen h-screen fixed'>
        </div>
        <div className='relative w-36 top-3 ml-[2%] bg-[#1A1D20] text-[#DEE1E4] font-bold rounded-t-lg text-center'><a href='#'>UBU&apos;s Portfolio</a></div>
        <div className='relative w-[98%] h-[95vh] mx-auto top-3 bg-[#1A1D20] text-[#DEE1E4] rounded-l-lg overflow-y-scroll scrollbar'>
          <NavBar />
          <About />
          <Projects />
        </div>
      </main>
    </div>
  )
}
