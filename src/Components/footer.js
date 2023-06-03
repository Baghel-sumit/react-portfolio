import React from 'react';

const Footer = (props) => {
  return (
    <>
      <footer className="w-full text-center mt-40 bg-white dark:bg-primary-gray">

        {/*  Contact Section */}
        <section id="contact" className="flex flex-col gap-12 justify-center items-center py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-default">
              {props.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-5 md:gap-10">
              {props.socialImages.map((item, index)=>(
                <a href={item.link} key={item+index} className="contact-link bg-blue-500" target='_blank' rel="noreferrer">
                  <img src={item.path} alt={item.alt}/>
                </a>
              ))}
          </div>
        </section>
        <h2 className="pb-10">
          &copy; {props.bottomText}
        </h2>
      </footer>
    </>
  )
}

export default Footer
