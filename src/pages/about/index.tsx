import Image from 'next/image';
import Target from 'public/assests/images/target.jpeg';

export default function About() {
  const fName: string = "Uchenna";
  const linkedInUrl = "https://www.linkedin.com/in/josebright";
  const nigeriaMapUrl = "https://www.google.com/maps/place/Nigeria";

  return (
    <div id='about' className='flex flex-col md:flex-row h-screen px-4 md:px-20 items-center space-y-6 md:space-y-0 md:space-x-10'>
      <div className='m-auto md:w-7/12 space-y-4'>
        <h2>Hello,</h2>
        <h1>I am <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">{fName}</a> from <a href={nigeriaMapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-600">Nigeria</a>,</h1>
        <p>
          A highly motivated and enthusiastic graduate with a BSc in Mathematics and an MSc in Software Engineering. Possessing over three years of experience in the field of software engineering.
          I love to solve problems, and I am keen on improving my abilities and acquiring knowledge in the applications of mathematics and problem-solving techniques in technological engineering.
        </p>
        <p>
          Talks about {' '}
          <strong>#microservices</strong>, {' '}
          <strong>#clouddeployment</strong>, {' '}
          <strong>#agilemethodology</strong>, {' '}
          <strong>#softwarearchitecture</strong>, and {' '}
          <strong>#requirementsengineering</strong>.
        </p>
      </div>
      <div className='md:w-5/12 hidden md:block'>
        <Image
          src={Target}
          alt="Uchenna's Career"
          className="rounded-full"
          width={700}
          height={500}
        />
      </div>
    </div>
  );
}