export const appData = {
  navData: {
    title: "Sumit Dev",
    menuItems: ['home', 'about', 'work', 'portfolio','contact'],
    mobileMenuImg: '/images/icons/icon-',
    toggleThemeImg: '/images/icons/icon-'
  },
  mainData: {
    homeSection: {
      imgPath: '/images/people.jpg'
    },
    aboutSection: {
      describe: {
        imgPath: '/images/people.jpg',
        title: "Hi, I'm Sumit Dev",
        texts: [
          'Hello this is Sumit Baghel, currently i am pursuing Bachelor of computer applications from DR. Bhimrao University Agra, i love to learn emerging technologies those can evolve the future.',
          'If you are hiring, i am here to work in an environment which encourages me to succeed and grow professionally where i can utilize skills and knowledge appropriately.'
        ]
      },
      mySkills: {
        title: "My Skills",
        skillItems: [
          {
            imgPath: '/images/skills/html.png',
            dataText: 'Experience > 1 year',
            alt: 'html'
          },
          {
            imgPath: '/images/skills/css.png',
            dataText: 'Experience > 1 year',
            alt: 'css'
          },
          {
            imgPath: '/images/skills/javascript.png',
            dataText: 'Experience > 1 year',
            alt: 'javascript'
          },
          {
            imgPath: '/images/skills/reactjs.png',
            dataText: 'Experience > 6 months',
            alt: 'react'
          },
          {
            imgPath: '/images/skills/tailwindcss.png',
            dataText: 'Experience > 1 year',
            alt: 'tailwindcss'
          },
          {
            imgPath: '/images/skills/express.png',
            dataText: 'Experience > 6 months',
            alt: 'express'
          },
          {
            imgPath: '/images/skills/mongodb.png',
            dataText: 'Experience > 6 months',
            alt: 'mongodb'
          },
          {
            imgPath: '/images/skills/mongoose.png',
            dataText: 'Experience > 6 months',
            alt: 'mongoose'
          },
        ]
      }
    },
    workSection: {
      title: 'Work Experience',
      organizations: [
        {
          title: 'Growpital Fin. Tech. Company | MERN Developer',
          timeLine: 'May 2023 - Present',
          workList: [
            'Working with more than 10 members of team.',
            "Creating new features and fixing bugs of company's website.",
            'Working with AWS database dynamoDB, cognito, s3 bucket and more.',
            'Working with serverless technology.'
          ]
        },
        {
          title: 'Deepthought Edu. Tech. Ventures | Frontend Developer',
          timeLine: 'September 2022 - April 2023',
          workList: [
            'Worked with more than 5 members of team.',
            "Built an admin panel to manage users and employees of the company.",
            "Worked with AWS database dynamoDB, AWS cognito for users' authentication and authorization.",
            'Built frontend using React.JS frontend library.'
          ]
        }
      ]
    },
    portfolioSection: {
      title: 'My Portfolio',
      githubImg: '/images/icons/github.svg',
      websiteImg: '/images/icons/web.svg',
      portfolios: [
        {
          title: 'Portfolio 1',
          imgPath: '/images/random-portfolio.jpg',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum libero ducimus quis enim harum tempore officia minus eum ea cupiditate maiores reprehenderit omnis, soluta excepturi quaerat ab itaque. Placeat, quibusdam?',
          websiteLink: 'https://www.portfolio1.com',
          githubLink: 'https://www.github.com/portfolio1'
        },
        {
          title: 'Portfolio 2',
          imgPath: '/images/random-portfolio.jpg',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum libero ducimus quis enim harum tempore officia minus eum ea cupiditate maiores reprehenderit omnis, soluta excepturi quaerat ab itaque. Placeat, quibusdam?',
          websiteLink: 'https://www.portfolio2.com',
          githubLink: 'https://www.github.com/portfolio2'
        },
        {
          title: 'Portfolio 3',
          imgPath: '/images/random-portfolio.jpg',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum libero ducimus quis enim harum tempore officia minus eum ea cupiditate maiores reprehenderit omnis, soluta excepturi quaerat ab itaque. Placeat, quibusdam?',
          websiteLink: 'https://www.portfolio3.com',
          githubLink: 'https://www.github.com/portfolio3'
        },
      ]
    }
  },
  footerData: {
    title: 'Contact',
    socialImages: [
      {
        path: '/images/icons/icon-facebook.svg',
        alt: 'facebook',
        link: 'https://www.facebook.com'
      },
      {
        path: '/images/icons/icon-instagram.svg',
        alt: 'instagram',
        link: 'https://www.instagram.com'
      },
      {
        path: '/images/icons/icon-telegram.svg',
        alt: 'telegram',
        link: 'https://www.telegram.com'
      },
      {
        path: '/images/icons/icon-twitter.svg',
        alt: 'twitter',
        link: 'https://www.twitter.com'
      },
      {
        path: '/images/icons/icon-whatsapp.svg',
        alt: 'whatsapp',
        link: 'https://web.whatsapp.com/'
      }
    ],
    bottomText: "Copyright 2022 - Sumit Dev"
  },
};