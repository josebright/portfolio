import Image from 'next/image'
import Email from 'public/assests/svg/gmail.svg'
import Linkedin from 'public/assests/svg/linkedin.svg'
import Twitter from 'public/assests/svg/twitter.svg'
import Github from 'public/assests/svg/github.svg'

export default function Contact() {
  return (
    <div className='flex mt-10'>
      <div className='bg-gradient-to-r from-[#C12F5C] to-[#4161A7] rounded-full p-0.5'>
        <Image
          src={Email}
          alt="email"
          width={30}
          height={30}
        />
      </div>
      <div className='bg-gradient-to-r from-[#C12F5C] to-[#4161A7] rounded-full p-0.5'>
        <Image
          src={Linkedin}
          alt="linkedin"
          width={30}
          height={30}
        />
      </div>
      <div className='bg-gradient-to-r from-[#C12F5C] to-[#4161A7] rounded-full p-0.5'>
        <Image
          src={Twitter}
          alt="twitter"
          width={30}
          height={30}
        />
      </div>
      <div className='bg-gradient-to-r from-[#C12F5C] to-[#4161A7] rounded-full p-0.5'>
        <Image
          src={Github}
          alt="github"
          width={30}
          height={30}
        />
      </div>
    </div>
  )

}