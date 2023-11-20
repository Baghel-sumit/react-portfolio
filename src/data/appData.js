import { getTimePeriod } from "../utils/get-time-period";

export const appData = ()=> {
  return {
    navData: {
      title: "Sumit",
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
          title: "Hi, I'm Sumit",
          texts: [
            {
              text: "I am a highly motivated and skilled professional with a Bachelor's degree in Computer Science, specializing in cutting-edge technologies. My career journey has been immersed in the realm of software development, particularly focusing on the MERN (MongoDB, Express.js, React, Node.js) stack. My academic background",
              moreText: "equipped me with a solid foundation in programming, algorithms, and software engineering principles, laying the groundwork for my transition into the dynamic world of industry-level MERN stack development. With a passion for innovation, I have actively engaged with the latest tools and methodologies in the tech industry. I've garnered practical experience working extensively on projects that involve MERN stack development, demonstrating proficiency in each layer of this technology stack. My roles have allowed me to contribute significantly to the design, development, and deployment of robust web applications, utilizing the capabilities of MongoDB for flexible data handling, Express.js for seamless server-side operations, React for interactive user interfaces, and Node.js for scalable backend solutions. Furthermore, I have honed my expertise in leveraging AWS (Amazon Web Services) to enhance the scalability, security, and performance of the applications I've worked on. My experience with AWS services includes but is not limited to EC2 for scalable computing power, S3 for reliable data storage, Lambda for serverless computing, and RDS for managed databases. Harnessing the power of AWS has been integral in optimizing the infrastructure and ensuring the seamless functioning of the applications I've been involved with. Beyond my professional endeavors, I am an avid advocate of open-source development. I firmly believe in the collaborative nature of the open-source community and have actively contributed to various projects. My contributions span from bug fixes and feature enhancements to initiating new projects that have gained traction within the developer community. This engagement has not only allowed me to give back to the community but has also broadened my skill set and provided exposure to diverse coding practices and project management methodologies. In summary, I am a dedicated and resourceful individual who thrives in dynamic, fast-paced environments. My blend of academic knowledge, industry-level experience in MERN stack development, adeptness with AWS services, and active involvement in the open-source ecosystem reflects my commitment to continuous learning, innovation, and contributing meaningfully to the tech industry's advancements."
            },
            {
              text: 'If you are hiring, i am here to work in an environment which encourages me to succeed and grow professionally where i can utilize skills and knowledge appropriately.'
            }
          ]
        },
        mySkills: {
          title: "My Skills",
          sections: [
            {
              title: 'Frontend',
              skills: ['HTML', 'CSS', 'Tailwind CSS', 'React.js', 'React-redux', 'React-router-dom', 'AWS Cognito client side', 'AWS Amplify']
            },
            {
              title: 'Backend',
              skills: ['Node.js', 'Express.js', 'Serverless Framework', 'Serverless Architecture', 'NPM', 'Mongo DB', 'SQL', 'AWS Dynamodb', 'AWS Lambda', 'AWS Command Line Interface (CLI)', 'AWS Simple Storage Service (S3)']
            },
            {
              title: 'Business',
              skills: ['Team Bonding', 'Team Building', 'Management', 'Teaching']
            },
          ]
        }
      },
      workSection: {
        title: 'Work Experience',
        experienceText: getTimePeriod('october', '2022'),
        organizations: [
          {
            title: 'Growpital by Zetta Farms',
            logoPath: '/images/companies/growpital_logo.jpeg',
            link: 'https://in.linkedin.com/company/growpital',
            timeline: { from: 'May 2023', to: 'Present', period: getTimePeriod('may', '2023') },
            workList: [
              {
                roleName: 'Junior Software Developer',
                roleType: 'Full-time',
                timeline: { from: 'Oct 2023', to: 'present', period: getTimePeriod('october', '2023') },
                location: 'Gurugram, Haryana, India',
                companyType: 'Hybrid',
                skills: [ 'Server Side Javascript', 'Cloud Computing', 'AWS command line interface(CLI)', 'aws s3', 'Amazon Web Services(AWS)', 'AWS Lambda', 'Node.js'],
                description: 'Here i have developed some more skills'
              },
              {
                roleName: 'Software Developer Intern',
                roleType: 'Internship',
                timeline: { from: 'May 2023', to: 'Oct 2023', period: '5 mos' },
                location: 'Gurugram, Haryana, India',
                companyType: 'Remote',
                skills: [ 'User interface design', 'Responsive web design', 'User Experience (UX)', 'Front-End Design', 'Amazon Web Services(AWS)', 'AWS Lambda', 'Node.js', 'React.js', 'React-redux', 'Problem solving'],
                description: 'Here i have developed some more skills'
              }
            ]
          },
          {
            title: 'DeepThought Growth Management System',
            logoPath: '/images/companies/deepthoughtedutech_logo.jpeg',
            link: 'https://www.linkedin.com/company/deepthoughtedutech/',
            timeline: { from: 'Oct 2022', to: 'Apr 2023', period: '7 mos' },
            workList: [
              {
                roleName: 'Frontend Web Developer Intern',
                roleType: 'Internship',
                timeline: { from: 'Oct 2022', to: 'Apr 2023', period: '7 mos' },
                location: 'India',
                companyType: 'Remote',
                skills: [ 'User interface design', 'Responsive web design', 'User Experience (UX)', 'Front-End Design', 'Application Development', 'Cascading Style Sheets (CSS)', 'Wed development', 'Node.js', 'Javascript', 'Web Design', 'Front-End Development', 'React.js'],
                description: 'Here i have developed some more skills'
              }
            ]
          },
        ]
      },
      portfolioSection: {
        title: 'My Projects',
        githubImg: '/images/icons/github.svg',
        websiteImg: '/images/icons/web.svg',
        portfolios: [
          {
            title: 'Tote Web',
            imgPath: '/images/projects/tote_web.png',
            description: 'A MERN stack application to manage the employees of an organization. Built frontend with React.js and React-redux for global state management, and used express.js for server side programming and used Mongo db for collection or document based data-base.',
            websiteLink: 'https://tote-web-frontend.onrender.com/',
            githubLink: 'https://github.com/React-developer-want/tote_web'
          },
          {
            title: 'Wassup Chat',
            imgPath: '/images/projects/wassup_chat.png',
            description: 'A real time chat application with using socket.io library to send and receive socket message. Built frontend with React.js and Redux for state management, and for backend used express.js for server side handlers and socket.io to manage socket communications which make it real time chat.',
            websiteLink: 'https://github.com/Baghel-sumit/wassup-chat',
            githubLink: 'https://github.com/Baghel-sumit/wassup-chat'
          }
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
  }
};