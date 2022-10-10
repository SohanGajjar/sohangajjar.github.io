import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpeg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-8 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 p-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I specialise in developing mobile responsive front-end UI apps that communicate with APIs and other backend technologies. I&apos;m enthusiastic about learning new technology and recognise that there are other ways to do a task. Though I am most comfortable designing front-end applications with HTML, CSS, Javascript, and React, I am a quick learner who can quickly take up new tech stacks as needed. Being a great developer, in my opinion, is about selecting the greatest tool for the job rather than employing a specific language.
          </p>
          <p className='py-2 text-gray-600'>
          In the year 2020, I began developing websites. I have two years of expertise developing various web applications and have also worked professionally in the field.  I enjoy competitive coding in my leisure time.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
