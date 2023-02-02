import Image from 'next/image'

export default function About() {
    const fName: string = "Uchenna";
    return (
        <div>
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
            <div>
                <Image
                    src=" "
                    alt=""
                    width={500}
                    height={500}
                />
            </div>
        </div>
    )
}