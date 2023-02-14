import Image from 'next/image'
import Email from 'public/assests/svg/gmail.svg'
import Linkedin from 'public/assests/svg/linkedin.svg'
import Twitter from 'public/assests/svg/twitter.svg'
import Github from 'public/assests/svg/github.svg'

export default function Contact() {
  return (
    <>
      <div>
        <Image
          src={Email}
          alt="email"
          width={500}
          height={500}
        />
      </div>
      <div>
        <Image
          src={Linkedin}
          alt="linkedin"
          width={500}
          height={500}
        />
      </div>
      <div>
        <Image
          src={Twitter}
          alt="twitter"
          width={500}
          height={500}
        />
      </div>
      <div>
        <Image
          src={Github}
          alt="github"
          width={500}
          height={500}
        />
      </div>
    </>
  )

}