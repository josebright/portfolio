import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import About from './about';



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
        <div className='grid grid-cols-2 m-0 w-screen h-screen fixed'>
          <div className='h-screen bg-[#8E347E]'></div>
          <div className='h-screen bg-[#191919]'></div>
        </div>
        <div className='relative w-36 top-3 ml-[3%] bg-[#1A1D20] text-[#DEE1E4] rounded-t-lg text-center'>Bright&apos;s Portfolio</div>
        <div className='relative w-[98%] h-[95vh] mx-auto top-3 bg-[#1A1D20] text-[#DEE1E4] rounded-md overflow-y-auto'>
          <About />
        </div>
      </main>
    </div>
  )
}
