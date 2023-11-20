import React from 'react';

const SkillItem = ({ skill, isComma }) => {
  return (
    <span className='capitalize'>
      {skill}{isComma ? ', ' : '.'}
    </span>
  )
}

const Experience = ({ title, logoPath, link, timeline, workList }) => {
  return (
    <div className="max-w-xs md:max-w-xl">
      <a href={link} target='_blank' rel="noreferrer">
        <div className='flex justify-start items-center gap-4'>
          <img src={logoPath} alt="company_logo" className='w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] rounded-[50%]' />
          <div>
            <div className='text-lg md:text-2xl font-semibold mb-1'>{title}</div>
            <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>
              {timeline.from + ' - ' + timeline.to + ' • ' + timeline.period}
            </div>
          </div>
        </div>
      </a>
      <ol className="relative border-s border-gray-400 dark:border-gray-700 mt-8 ml-8">                  
        {workList.map((item, index)=> (
          <li className="mb-10 ms-4" key={index}>
            <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-[0.390rem] border border-white dark:border-gray-700 dark:bg-gray-700"></div>
            <h3 className="text-lg mb-1 font-semibold text-gray-900 dark:text-white">{item.roleName}</h3>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.timeline.from + ' - ' + item.timeline.to + ' • ' + item.timeline.period}
            </time>
            <p className='mb-2 text-base font-normal text-gray-500 dark:text-gray-400'>
              {item.location + ' • ' + item.companyType}
            </p>
            <div className='mb-1 text-base font-normal text-gray-500 dark:text-gray-400'>
              Skills:
              {' '}
              {item.skills.map((skillItem, index)=> (
                <SkillItem skill={skillItem} isComma={index !== item.skills.length - 1} />
              ))}
            </div>
            <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Description: {item.description}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Experience
