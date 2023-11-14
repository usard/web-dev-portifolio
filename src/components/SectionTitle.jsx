import React from 'react'

const SectionTitle = ({text}) => {
  return (
    <div className='border-b border-slate-300 pb-5'>
      <h2 className='tracking-wider mt-8 font-bold capitalize text-2xl border-3border-b-indigo-500'>{text}</h2>
    </div>
  )
}

export default SectionTitle;