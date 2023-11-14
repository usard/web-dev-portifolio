import React from 'react';
import AboutImg from '../assets/about.svg'
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section id='about' className='bg-white'>
        <div className='align-element grid  md:grid-cols-2 items-center gap-16'>
            <img src={AboutImg} alt="about_img" className='w-full h-64' />
            <article>
                <SectionTitle  text='code and coffee'></SectionTitle>
                <p className='pt-6 text-slate-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum recusandae dicta temporibus saepe neque. Nam, illum alias. Fugiat provident at blanditiis quasi iure, debitis .</p>
            </article>
        </div>
    </section>
  )
}

export default About