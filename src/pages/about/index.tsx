import Image from 'next/image'
import Coinforbarter from 'public/assests/images/coinforbarter.png'

export default function About() {
  const fName: string = "Uchenna";
  return (
    <div className='grid grid-cols-2 h-screen px-20 content-center'>
      <div>
        <h2>Hello,</h2>
        <h1>I am { fName },</h1>
        <h2></h2>
        <p>
                    
          A highly motivated and enthusiastic graduate with a BSc in Mathematics and an MSc in Software Engineering. Possessing over three years of experience in the field of software engineering.
          I love to solve problems, and I am keen on improving my abilities and acquiring knowledge in the applications of mathematics and problem-solving techniques in technological engineering.

        </p>
        <p>
          I enjoy continuous personal development.
        </p>
      </div>
      <div>
        <Image
          src={Coinforbarter}
          alt=""
          width={700}
          height={500}
        />
      </div>
    </div>
  )
}