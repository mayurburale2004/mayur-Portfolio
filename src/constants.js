// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';

import cssLogo from './assets/tech_logo/css.png';


import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';






import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';


import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';


import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';


import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import HopsLogo from './assets/tech_logo/hops.png';
import mcLogo from './assets/tech_logo/mc.png';
import render from './assets/tech_logo/render.png';
import LeetCode from './assets/tech_logo/LeetCode.png';
import GeeksForGeeks from './assets/tech_logo/GeeksForGeeks.png';
import HackerRank from './assets/tech_logo/HackerRank.png';
// import netlifyLogo from './assets/tech_logo/netlify.png';
 import vercelLogo from './assets/tech_logo/vercel.png';

// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import cognifyz from './assets/company_logo/cognifyz.png';
import Codtech from './assets/company_logo/Codtech.jpg';
import edunet from './assets/company_logo/edunet-partners.png';

// // Education Section Logo's

  import p from './assets/education_logo/p.png';
import sscLogo from './assets/education_logo/ssc_logo.png';




// import vpsLogo from './assets/education_logo/vps_logo.png';

// // Project Section Logo's


 import Weather from './assets/work_logo/Weather.png';
import Traventure from './assets/work_logo/Traventure.png';
import Hospital from './assets/work_logo/Hospital.png';
import Netflix from './assets/work_logo/Netflix.png';
import InvestoX from './assets/work_logo/investoX.png';

//Certificate
import Ai_certificatev from './assets/Certificate/AI Certificate.png'
import AI_Webinar from './assets/Certificate/AI_Webinar.jpg'
import DSA from './assets/Certificate/DSA.jpg'

import Hackathon  from './assets/Certificate/Hackathon.jpg'

import IIT_WEB from './assets/Certificate/IIT (1).jpg'
import IIT_Webinar from './assets/Certificate/IIT_Webinar.jpg'
import inter from './assets/Certificate/inter.jpg'
import Java_int from './assets/Certificate/java intrn.png'

import Marn_intern from './assets/Certificate/Marn_Intern.jpg'

import Mern_Certi from './assets/Certificate/Mern_Stack.png'
import Rreaserrch from './assets/Certificate/ReaserchPaper.jpg'
import NPTl from './assets/Certificate/NPTL_JAVA.jpg'

import AINCAT from './assets/Certificate/AINCAT.jpg'
import c_Programming from './assets/Certificate/c_Programming.jpg'



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },

      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
     
    
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
         { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
       { name: 'Hopps- cotch', logo: HopsLogo },

       { name: 'Vercel', logo: vercelLogo },
       { name: 'Render', logo: render },
      
     
    ],
  },
    {
    title: 'DSA Practiced over 250+ problems',
    skills: [
      { name: 'LeetCode', logo: LeetCode },
      { name: 'GeeksFor- Geeks', logo: GeeksForGeeks },
      { name: 'Hacker- Rank', logo: HackerRank },
      
  
     
    ],
  },
];


  
  export const education = [
    {
  id: 0,
  img:p,
  school: "Priyadarshini College of Engineering, Nagpur",
  date: " 2022 –  2026",
  grade: "78.28%",
  desc: "Pursuing a Bachelor's degree in Information Technology (B.Tech) from Priyadarshini College of Engineering, Nagpur. The curriculum includes core subjects such as Software Engineering, Data Structures, Networking, Operating Systems, and Web Development. Gained hands-on experience through academic projects and internships, enhancing technical proficiency and problem-solving abilities.",
  degree: "Bachelor of Technology (B.Tech) in Information Technology",
},

    
    {
      id: 1,
       img: sscLogo,
      school: "Dr. B. R. Ambedkar Vidyalay, Hinganghat",
      date: "2021 - 2022",
      grade: "80%",
    desc: "Completed Class 12 education from Dr. B. R. Ambedkar Vidyalaya, Hinganghat, under the HSC Board with Science stream.",
degree: "HSC (Class XII), Science Stream",

    },
    {
      id: 2,
      img: sscLogo,
      school: "Dr. B. R. Ambedkar Vidyalay, Hinganghat",
      date: "2019 - 2020",
      grade: "79.60%",
      desc: "Completed Class 10 education from Dr. B. R. Ambedkar Vidyalay, Hinganghat, under the SSC Board with a Semi-English medium of instruction.",
degree: "SSC (Class X), Semi-English Medium",

    },
  ];
  

  export const projects = [
    {
  id: 2,
  title: "InvestoX",
  description: "InvestoX is a full-stack stock trading app with Firebase authentication and real-time trade tracking. It features stock search, watchlist management, and a dynamic dashboard built using Chart.js.",
  
  image: InvestoX, // make sure you import or define `InvestoX` as an image path
  tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Bootstrap", "Chart.js"],
  github: "https://github.com/mayurburale2004/InvestoX", // update if different
  webapp: "https://investox.onrender.com", // update with your actual deployment link
}
,
    {
      id: 0,
      title: "Weather App",
      description:"A responsive weather website built with React.js and powered by the OpenWeatherMap API. Enter any city to view current weather conditions including temperature, humidity, and more.",
       image: Weather,
      tags: ["HTML", "CSS", "Material UI", "React JS", "API"],
      github: "https://github.com/mayurburale2004/weather-app",
      webapp: "https://weather-app-olq9.onrender.com/",
    },
    {
      id: 1,
      title: "Traventure",
     description: "Traventure is a full-stack travel platform for exploring, booking, and listing vacation rentals. It features real-time maps via Geoapify and secure OAuth logins for a smooth user experience.",

      
      image: Traventure,
      tags: [ "HTML", "CSS", "JavaScript", "Bootstrap", "EJS", "Node.js", "Express.js","MongoDB",
 "API"],
      github:"https://github.com/mayurburale2004/Traventure",
      webapp: "https://traventure-1.onrender.com/listings",
    },
    {
      id: 2,
      title: "Hospital Management System",
      description:
      "Built a desktop application using Java Swing to manage hospital workflows such as patient registration, room allocation, discharge process and ambulance data. Integrated MySQL for secure, structured and efficient data management. ",
       image: Hospital,
      tags: [" Java", "MySQL"],
      github: "https://github.com/mayurburale2004/Hospital-Management-System-Java-GUI-MySQL-",
      webapp: "https://github.com/mayurburale2004/Hospital-Management-System-Java-GUI-MySQL-",
    },
    {
      id: 3,
      title: "Netflix Clone",
      description:" Created a responsive Netflix homepage clone focusing on layout design, UI components and styling.",
       image: Netflix,
      tags: ["HTML" , "CSS"],
      github: "https://github.com/mayurburale2004/Netflix-Clone-HTML-CSS-",
      webapp: "https://github.com/mayurburale2004/Netflix-Clone-HTML-CSS-",
    },
    
  ];  
   export const Certificate=[
   {
  id: 0,
  title: "MERN Stack Development",
  image:Mern_Certi,
  description: "Successfully completed a comprehensive MERN Stack Development course from Apna College in July 2025. Gained hands-on experience with MongoDB, Express.js, React.js, and Node.js. Built full-stack projects, implemented RESTful APIs, authentication systems, and deployed applications using modern development practices.",
  
},
{
  id: 1,
  title: "Data Structures and Algorithms (DSA) in Java",
  image:DSA,
  description: "Completed an in-depth DSA course using Java, covering core data structures like arrays, linked lists, stacks, queues, trees, heaps, graphs, and algorithms such as sorting, searching, recursion, backtracking, and dynamic programming. Strengthened problem-solving skills by practicing over 250+ coding questions on platforms like LeetCode, GeeksforGeeks (GFG), and HackerRank."

},
{
  id: 2,
  title: "Java Programming - NPTEL Certification",
  image:NPTl,
  description: "Successfully completed the 12-week NPTEL course on Java Programming conducted by IIT Kharagpur. Covered object-oriented programming concepts, exception handling, file I/O, multithreading, collections framework, and GUI development in Java. Earned certification based on weekly assignments and final proctored exam.",

},
{
  id: 3,
  title: "C Programming - Infosys Springboard",
  image:c_Programming,
  description: "Completed a foundational course in C Programming from Infosys Springboard. Gained hands-on experience with variables, loops, conditionals, functions, arrays, pointers, and file handling. Built mini-projects and solved programming challenges to strengthen logical thinking and coding fundamentals.",
 
},
{
  id: 4,
  title: "Research Paper Publication - Hospital Management System",
  image:Rreaserrch,
  description: "Published a research paper titled 'Hospital Management System (HMS)' in the IJSRD - International Journal for Scientific Research & Development. The paper explores digital transformation in healthcare through modules like Electronic Medical Records (EMR), Patient Data Management, Appointment Scheduling, and Medical Billing Automation. Aimed at improving hospital workflows for efficient, smart healthcare delivery.",
 

}
,
{
  id: 5,
  title: "AINCAT 2025 - All India Naukri Campus Aptitude Test",
  image:AINCAT,
  description: "Successfully participated in AINCAT 2025, India’s largest national-level career aptitude test organized by Naukri Campus. Assessed on aptitude, logical reasoning, and problem-solving skills among thousands of participants across the country. Secured an All India Rank (AIR) of 12,876 and gained valuable insights into career preparedness and competitive performance.",
 
},
{
  id: 6,
  title: "Java Hackathon - Priyadarshi College of Engineering",
  image:Hackathon,
  description: "Participated in a Java-focused hackathon organized by the IT Department of Priyadarshi College of Engineering, Nagpur, on August 30, 2024. Collaborated with peers to solve real-world problems under time constraints. Strengthened Java programming skills, enhanced problem-solving strategies, and gained experience in teamwork and agile thinking through hands-on development.",
 
},
{
  id: 7,
  title: "Internship - EY GDS & AICTE (Next Gen Employability Program)",
  image:Marn_intern,
  description: "Completed a six-week internship from February 10 to March 21, 2025, under the Next Gen Employability Program, organized by EY Global Delivery Services (EY GDS) in collaboration with AICTE. Gained hands-on experience in building modern web applications, full-stack development, and working with cutting-edge web technologies. This program strengthened my technical foundation and enhanced my real-world project exposure.",
 
},
{
  id: 8,
  title: "Workshop - Build Your Own Generative AI Model (NxtWave)",
  image:Ai_certificatev,
  description: "Participated in the workshop 'AI for Students: Build Your Own Generative AI Model' conducted by Mr. Abhinav Devaguptapu and hosted by NxtWave. Gained hands-on experience with Generative AI concepts, tools, and techniques. The session provided valuable insights into building and deploying AI models, inspiring deeper exploration into the rapidly evolving AI landscape.",

},
{
  id: 9,
  title: "Java Programming Internship - CODTECH IT SOLUTIONS",
  image:Java_int,
  description: "Successfully completed a Java Programming Internship at CODTECH IT SOLUTIONS from 25th August to 10th October 2024. Gained practical experience working on real-world Java projects, enhanced object-oriented programming skills, and improved debugging, teamwork, and code optimization strategies. This internship strengthened my ability to develop scalable applications and deepened my understanding of core Java concepts.",
  
},
{
  id: 10,
  title: "C/C++ Programming Internship - Cognifyz Technologies",
  image:inter,
  description: "Successfully completed a one-month internship on C/C++ Programming at Cognifyz Technologies. Gained hands-on experience in writing efficient and optimized C/C++ code, implementing data structures, handling file operations, and solving logical programming challenges. The internship helped strengthen core programming concepts and real-world problem-solving skills.",
 
},

{
  id: 11,
  title: "Freedom with AI Masterclass - Avinash Mada",
  image:AI_Webinar,
  description: "Successfully completed the Freedom with AI Masterclass on 8th February 2025, conducted by Avinash Mada. This session offered deep insights into the transformative power of Artificial Intelligence and practical strategies to leverage AI effectively in the modern world. The masterclass boosted my vision and confidence in applying AI to real-world challenges.",
 
},
{
  id: 12,
  title: "Webinar - Elective Your Career Skill for the Future Workforce (IIT Madras)",
  image:IIT_Webinar,
  description: "Participated in the webinar 'Elective Your Career Skill for the Future Workforce' conducted by IIT Madras. The session offered deep insights into emerging career trends, essential future skills, and strategies for aligning with evolving industry demands. This experience helped enhance my career planning and skill-building roadmap.",

},
{
  id: 13,
  title: "Workshop - Placement Preparation (IIT Bombay)",
  image:IIT_WEB,
  description: "Successfully completed a 2-day workshop on Placement Preparation conducted by IIT Bombay. The workshop focused on essential skills for campus placements including resume building, interview strategies, aptitude practice, and communication techniques. It provided valuable guidance for excelling in placement drives and boosting employability.",

}

   ];




export const experiences = [
   {
    id: 0,
    img: edunet,
    role: "Full Stack Web Development Intern (MERN)",
    company: "EY Global Delivery Services (EY GDS) & AICTE (via Edunet Foundation)",
    date: "Feb 2025 – Mar 2025",
    desc: "Selected for a 6-week Full Stack Web Development internship organized by Edunet Foundation in collaboration with EY GDS & AICTE under the NextGen Employability Program. Worked on real-world projects using the MERN stack — MongoDB, Express.js, React.js, and Node.js. Built scalable web applications, followed modern development practices, and collaborated with industry mentors to enhance technical and professional skills.",
    skills: [
      "MongoDB",
      "Express.js",
      "ReactJS",
      "Node.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Material UI",
      "Bootstrap",
      "Git",
    ],
  },
  
  {
    id: 1,
    img: Codtech,
    role: "Java Programming Intern",
    company: "Codtech IT Solutions",
    date: "Dec 2023 – Jan 2024",
    desc: "Focused on core Java programming concepts including object-oriented programming (OOP), exception handling, file I/O, and collections framework. Built Java-based applications and solved logical problems using standard Java practices. Improved understanding of backend logic and problem-solving in Java.",
    skills: [
      "Core Java",
      "OOP",
      "Exception Handling",
      "File I/O",
      "Collections Framework",
      "Multithreading",
    ],
  },
  {
    id: 3,
    img: cognifyz,
    role: "C/C++ Programming Intern",
    company: "Cognifyz Technologies",
    date: "Dec 2023 – Jan 2024",
    desc: "Worked on core programming projects involving C and C++. Developed efficient algorithms, optimized existing codebases, and implemented logic-based solutions for various problem statements. Gained hands-on experience in debugging and testing using IDEs and command-line tools.",
    skills: [
      "C",
      "C++",
      "Data Structures",
      "Algorithms",
      "OOPs",
    ],
  },
 
];

