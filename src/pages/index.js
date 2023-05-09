import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../../public/dev-ed-wave.png';

export default function Home() {
  return (
    <div>
      <title>React Designer Portfolio</title>
      <main className='bg-white px-10 '>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons '>@ndrsov</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2x' />
              </li>
              <li>
                <a
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                  href='#'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>
              Andres Soria
            </h2>
            <h3 className='text-2xl py-2'>Developer and Designer.</h3>
            <p className='text-base py-5 leading-8 text-gray-800'>
              Self-taught full-stack developer providing freelance services for
              your programming and design content needs.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div>
            <Image src={deved} alt='3D portrait' />
          </div>
        </section>
      </main>
    </div>
  );
}
