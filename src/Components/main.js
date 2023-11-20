import React from 'react'
import DotsComponent from './dots'
import Experience from './experience';
import SkillItem from './skillItem';
import ShowMore from './showMore';

const MainComponent = ({ homeSection, aboutSection, portfolioSection, workSection }) => {
  return (
    <main className='container'>

      {/* Home section */}
      <section id="home" className="home-section">
        <div className="order-2 md:order-1 mt-10">
            <h1 className="text-5xl md:text-7xl font-bold">
                Hi,
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mt-2">
                I am <span className="text-primary">Sumit</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold opacity-70 my-10 capitalize">
                Full Stack Developer
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
          <div className="w-full text-base md:text-lg text-center md:text-left">
              <h2 className="text-primary font-bold text-2xl md:text-3xl mb-3">
                  {aboutSection.describe.title}
              </h2>
              {aboutSection.describe.texts.map((item, index)=> (
                <ShowMore disabled={index !== 0} className="mb-3 opacity-80" text={item.text} moreText={item.moreText} key={item.text+index} />
              ))}
          </div>
        </div>

        {/* My Skills */}
        <div className="mt-32 text-center">
          <h2 className="text-4xl md:text-5xl text-center text-primary-default md:text-center font-bold mb-8 md:mb-12">
              {aboutSection.mySkills.title}
          </h2>
          <div className="flex flex-wrap items-center gap-24 md:gap-12">
            {aboutSection.mySkills.sections.map((item)=> (
                <SkillItem skills={item.skills} title={item.title} />
            ))}
            {/* <img src="/images/skills/side_image.png" alt="" className='md:inline hidden' /> */}
          </div>
        </div>
      </section>

      {/* Dots */}
      <DotsComponent/>

      {/* work experience */}
      <section id="work" className='pt-32'>
        <h2 className='work-heading'>
            {workSection.title + ' - ' + workSection.experienceText}
        </h2>
        <div className="flex flex-wrap justify-between items-start gap-4">
            {workSection.organizations.map((org)=> (
                <Experience link={org.link} logoPath={org.logoPath} timeline={org.timeline} title={org.title} workList={org.workList} />
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
