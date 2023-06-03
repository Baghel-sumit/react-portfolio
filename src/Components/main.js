import React from 'react'
import DotsComponent from './dots'

const MainComponent = (props) => {
    const { homeSection, aboutSection, portfolioSection, workSection } = props;
  return (
    <main className='container'>

      {/* Home section */}
      <section id="home" className="home-section">
        <div className="order-2 md:order-1 mt-10">
            <h1 className="text-5xl md:text-7xl font-bold">
                Hi,
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mt-2">
                I am <span className="text-primary">Sumit Dev</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold opacity-70 my-10 capitalize">
                MERN stack developer
            </h3>
            <a href="#portfolio" className="btn-primary">
                See my work
            </a>
        </div>
        <div className="container-hero-image">
            <img 
            className="w-full h-full object-cover opacity-90 object-center"
            src={homeSection.imgPath} 
            alt="profile"/>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="py-32">
        {/* Describe */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          <div className="rounded-full w-48 md:w-64 h-48 md:h-64 overflow-hidden bg-primary-default">
              <img 
              className="w-full h-full object-cover opacity-90"
              src={aboutSection.describe.imgPath} 
              alt="profile"/>
          </div>
          <div className="w-full md:w-1/2 text-base md:text-lg text-center md:text-left">
              <h2 className="text-primary font-bold text-2xl md:text-3xl mb-3">
                  {aboutSection.describe.title}
              </h2>
              {aboutSection.describe.texts.map((text, index)=> (
                <p className="mb-3 opacity-80" key={text+index}> {text} </p>
              ))}
          </div>
        </div>

        {/* My Skills */}
        <div className="mt-32 text-center">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-14">
              {aboutSection.mySkills.title}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-24 md:gap-12">
            {aboutSection.mySkills.skillItems.map((skill, index)=>(
                <div className="skill" key={skill+index} data-text={skill.dataText}>
                    <img src={skill.imgPath} alt={skill.alt}/>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dots */}
      <DotsComponent/>

      {/* work experience */}
      <section id="work" className='pt-32'>
        <h2 className='work-heading'>
            {workSection.title}
        </h2>
        <div className="work-container">
            {workSection.organizations.map((item, index)=> (
                <div className="working-org" key={item+index}>
                    <div className="work-top">
                        <h4 className='text-xl md:text-lg'>{item.title}</h4>
                        <em className='italic'>{item.timeLine}</em>
                    </div>
                    <ul className="work-list">
                        {item.workList.map((work, index)=>(
                            <li className='mb-1' key={work+index}>{work}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="pt-32">
          <h2 className="portfolio-heading">
              {portfolioSection.title}
          </h2>
          <ul className="w-full md:w-5/6 space-y-10 py-5">
              {/* Portfolio List */}
              {portfolioSection.portfolios.map((item, index)=> (
                <li className="portfolio-card" key={item+index}>
                    <div className="w-full md:w-1/3 h-60">
                        <img 
                        className="h-full w-full object-cover"
                        src={item.imgPath} 
                        alt="portfolio"/>
                    </div>
                    <div className="w-full md:w-2/3 p-5">
                        <h2 className="text-3xl font-bold mb-3">
                            {item.title}
                        </h2>
                        <p>
                            {item.description}
                        </p>
                        <div className="mt-8 font-semibold text-white flex items-center gap-2">
                            <a href={item.githubLink} className="portfolio-link bg-primary-default" target='_blank' rel="noreferrer">
                                <img className="w-5 h-5" src={portfolioSection.githubImg} alt="github"/>
                                github
                            </a>
                            <a href={item.websiteLink} className="portfolio-link bg-primary-gray dark:bg-primary-black" target='_blank' rel="noreferrer">
                                <img className="h-5 w-5" src={portfolioSection.websiteImg} alt="website"/>
                                website
                            </a>
                        </div>
                    </div>
                </li>
              ))}
          </ul>
      </section>
    </main>
  )
}

export default MainComponent
