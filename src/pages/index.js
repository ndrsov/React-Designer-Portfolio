import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../../public/dev-ed-wave.png';
import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';

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
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-20 overflow-hidden'>
            <Image
              src={deved}
              alt='3D portrait'
              priority='true'
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-base py-5 leading-8 text-gray-800'>
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className='text-teal-500'> agencies</span> consulted for
              <span className='text-teal-500'> startups</span> and collaborated
              with talendted people to create digital products for both business
              and consumer use.
            </p>
            <p className='text-base py-5 leading-8 text-gray-800'>
              I offer a wide range of services, including brand design,
              programming and teaching
            </p>
          </div>
          <div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image
                src={design}
                alt='design service icon'
                width={100}
                height={100}
                style={{ margin: '0 auto' }}
              />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Beautiful Designs
              </h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Adobe XD</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image
                src={code}
                alt='code service icon'
                width={100}
                height={100}
                style={{ margin: '0 auto' }}
              />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Beautiful Designs
              </h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Adobe XD</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image
                src={consulting}
                alt='consulting service icon'
                width={100}
                height={100}
                style={{ margin: '0 auto' }}
              />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Beautiful Designs
              </h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Adobe XD</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
