import React from 'react'

const SkillsCard = (props) => {
  const {id ,icon,  title, text} = props.skill;
  return (
  <article className='pb-10'>
    <span>{icon}</span>
    <h3 className='font-bold mt-4'>{title}</h3>
    <p className='mt-2'>{text}</p>
  </article>
  )
}

export default SkillsCard