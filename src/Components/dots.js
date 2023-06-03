import React from 'react';

const Dot = () => (
  <div className="bg-primary-default/60 h-3 w-4"/>
);

const DotsComponent = () => {
  const uiDots = [0,1,2,3,4,5,6];
  return (
    <>
      <div className="hidden md:flex items-center justify-between gap-3 w-full">
        {uiDots.map((item, index)=> (
          <Dot key={item+index}/>
        ))}
        <div className="bg-gradient-to-r from-primary-default/60 to-primary-default/0 flex-grow h-3"/>
      </div> 
    </>
  )
};

export default DotsComponent
