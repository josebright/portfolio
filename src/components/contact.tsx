import Image from 'next/image';
import Email from 'public/assests/svg/gmail.svg';
import Linkedin from 'public/assests/svg/linkedin.svg';
import Twitter from 'public/assests/svg/twitter.svg';
import Github from 'public/assests/svg/github.svg';
import Gitlab from 'public/assests/svg/gitlab-tile.svg';


export default function Contact() {
  return (
    <div className='flex mt-10'>
      <a href="https://twitter.com/josebryte" target="_blank" rel="noopener noreferrer">
        <div className='bg-gradient-to-r from-[#C12F5C] to-[#4161A7] rounded-full h-9 w-9 p-1 mx-1 cursor-pointer'>
          <Image
            src={Twitter}
            alt="twitter-X"
            width={28}
            height={28}
            style={{margin: 'auto'}}
          />
        </div>
      </a>
      <a href="mailto:uchennaugwumadu8@gmail.com">
        <div className='bg-gradient-to-r from-[#C12F5C] to-[#4161A7] rounded-full h-9 w-9 p-1 mx-1 cursor-pointer'>
          <Image
            src={Email}
            alt="email"
            width={26}
            height={26}
            style={{margin: 'auto'}}
          />
        </div>
      </a>
      <a href="https://gitlab.com/josebright" target="_blank" rel="noopener noreferrer">
        <div className='bg-gradient-to-r from-[#C12F5C] to-[#4161A7] rounded-full h-9 w-9 p-1 mx-1 cursor-pointer'>
          <Image
            src={Gitlab}
            alt="Gitlab"
            width={26}
            height={26}
            style={{margin: 'auto'}}
          />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/josebright" target="_blank" rel="noopener noreferrer">
        <div className='bg-gradient-to-r from-[#C12F5C] to-[#4161A7] rounded-full h-9 w-9 p-1 mx-1 cursor-pointer'>
          <Image
            src={Linkedin}
            alt="linkedin"
            width={30}
            height={30}
            style={{margin: 'auto', }}
          />
        </div>
      </a>
      <a href="https://github.com/josebright" target="_blank" rel="noopener noreferrer">
        <div className='bg-gradient-to-r from-[#C12F5C] to-[#4161A7] rounded-full h-9 w-9 p-1 mx-1 cursor-pointer'>
          <Image
            src={Github}
            alt="github"
            width={28}
            height={28}
            style={{margin: 'auto'}}
          />
        </div>
      </a>
    </div>
  )

}