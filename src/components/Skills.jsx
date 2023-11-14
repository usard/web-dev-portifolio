import React from 'react'
import { skills } from '../data'
import SkillsCard from './SkillsCard'
import SectionTitle from './SectionTitle'

const Skills = () => {
  return (
    <section className='align-element py-20'>
      <SectionTitle text={'tech stack'}></SectionTitle>
      <div id='skills' className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {
          skills.map((skill)=> {
            return <SkillsCard skill = {skill}>skill</SkillsCard>
          })
        }
      </div>
    </section>
  )
}

export default Skills;