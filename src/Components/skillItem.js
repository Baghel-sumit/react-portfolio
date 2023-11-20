import React from 'react'

const SkillItem = ({ title, skills }) => {
  return (
    <div className=''>
      <h3 className='text-primary-default text-start mb-5 text-xl font-semibold'>{title}</h3>
      <div className='flex flex-wrap gap-4 ml-1'>
        {skills.map((item)=> (
          <span className='bg-gray-200 text-gray-700 p-4 rounded-lg'>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default SkillItem
