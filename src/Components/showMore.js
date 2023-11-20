import React, { useState } from 'react';

const ShowMore = ({ className, text, moreText, disabled }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <div className={`${className}`}>
      <div>{text}</div>
      <div className={`${isShowMore ? 'hidden' : ''}`}>{moreText}</div>
      {disabled ? null : <div className='text-blue-600 dark:text-gray-400 cursor-pointer inline-block' onClick={()=> setIsShowMore((prev)=> !prev)}>{isShowMore ? '...read more.' : 'read less.'}</div>}
    </div>
  )
}

export default ShowMore
