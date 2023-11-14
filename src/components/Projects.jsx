import React from 'react';
import SectionTitle from './SectionTitle';
import {projects} from '../data';
import { FaGithubSquare } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id='projects' className='bg-white'>
        <div className='align-element'>
            <SectionTitle text={'web creations'}></SectionTitle>
            <div className='projects-container mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3 '>
              {
                projects.map((project)=> {
                  const {id, img, github, text, title, url} = project;
                  return (
                    <article key={id} >
                          <img src={img} alt="project_img" className='h-30 w-30' />
                          <p>{text}</p>
                          <div className='icons'>
                           <a href={github}>{<FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-emerald-500 duration-300'/>}</a>
                          </div>
                    </article>
                  )
                })
              }
            </div>
        </div>
    </section>
  )
}

export default Projects