import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import darwinbox from '../public/assets/projects/darwinbox.jpeg';
import ecard from '../public/assets/projects/ecard.jpeg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Darwin-Box'
            backgroundImg={darwinbox}
            projectUrl='https://github.com/SohanGajjar/DarwinBox'
            tech='React JS'
          />
          <ProjectItem
            title='E-Card'
            backgroundImg={ecard}
            tech='React JS'
            projectUrl='https://github.com/SohanGajjar/E-Card'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
