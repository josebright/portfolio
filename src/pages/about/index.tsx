import Image from 'next/image'
import Coinforbarter from 'public/assests/images/coinforbarter.png'

export default function About() {
    const fName: string = "Uchenna";
    return (
        <div>
            <div>
                <h2>Hello,</h2>
                <h1>I amm { fName },</h1>
                <h2></h2>
                <p>
                    I am a mathematics graduate with over three years of software engineering expertise who is extremely self motivated and eager. 
                    I love to solve problems, and I am keen to improve my abilities and acquire knowledge in the
                    applications of mathematics and problem-solving techniques in technological engineering.
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