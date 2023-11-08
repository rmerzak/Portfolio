import {
    backend,
    creator,
    web,
    javascript,
    reactjs,
    software,
    tailwind,
    git,
    docker,
    awb,
    carrent,
    jobit,
    tripguide,
    unchain,
    webmastry,
    apt,
    angular,
    uml,
    oracle,
    sql,
    springBoot,
    java,
    batch,
    skills,
    cplus,
    c,
    attijari,
    inception,
    irc,
    trans,
    zk,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Engineer",
      icon: software,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "IT Consultant",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cplus,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "SpringBoot",
      icon: springBoot,
    },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "docker",
      icon: docker,
    },

    {
      name: "Uml",
      icon: uml,
    },
    {
      name: "Oracle",
      icon: oracle,
    },
    {
      name: "Mysql",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company_name: "Webmastry",
      icon: webmastry,
      iconBg: "#383E56",
      date: "Jun 2021 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design.",
        ],
    },
    {
      title: "Blockchain Developer Intern",
      company_name: "Unchain",
      icon: unchain,
      iconBg: "#E6DEDD",
      date: "Jul 2022 - Sep 2022",
      points: [
        "Create and sign transactions and their visual representations for the public.",
        "Estimate the costs of ZKP (Zero-Knowledge Proof) transfers and maintain a client.",
        "Develop smart contracts with Solidity and optimize them.",
        "Write circuits with Circom, generate proofs, and verify them using snark.js.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Apitech",
      icon: apt,
      iconBg: "#383E56",
      date: "Oct 2022 - Jan 2023",
      points: [
        "Setting up telephone bridges on the Jitsi video conferencing solution.",
        "Developing a user portal for the Voxify project.",
        "Performing 'Create, read, update, and delete' operations on users, organizations, and phone channels.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer Intern",
      company_name: "attijariwafa bank",
      icon: awb,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Sep 2023",
      points: [
        "Development of a bank account statement calculation engine.",
        "Development of an innovative platform for efficient financial data consultation and analysis.",
        "Thoroughly test and validate the solution to ensure its compliance with the company's requirements in terms of accuracy and speed.",
        "Develop and implement a suitable database system to store the results of interest calculations.",
        "Active participation in agile meetings and a commitment to respecting the agile methodology."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Skills Center",
      description:
        "Skill Center is a cutting-edge platform revolutionizing the way sports enthusiasts connect, organize, and enjoy sports events, whether it's tennis, football, or other sports. It offers a one-stop solution for managing events, finding fellow enthusiasts, and accessing training resources.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: skills,
      source_code_link: "https://github.com/",
    },
    {
      name: "Attijari Account Statement ",
      description:
        "Attijari Account Statement redefines precision and efficiency in banking by automating interest calculations for account statements. It empowers financial professionals with automated calculations based on balance, duration, and rates.",
      tags: [
        {
          name: "SpringBatch",
          color: "blue-text-gradient",
        },
        {
          name: "SpringBoot",
          color: "pink-text-gradient",
        },
        {
          name:"Oracle",
          color:"orange-text-gradient",
        },
        {
          name: "react",
          color: "purple-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
      ],
      image: attijari,
      source_code_link: "https://github.com/",
    },
    {
      name: "Inception",
      description:
        "Inception is a project that establishes a Docker-based infrastructure within a virtual machine. It entails running services in dedicated containers, crafting custom Docker images using Alpine or Debian, and orchestrating components like NGINX, WordPress, MariaDB containers, and data storage volumes all interconnected via a Docker network.",
      tags: [
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
        {
          name: "MariaDB",
          color: "green-text-gradient",
        },
        {
          name: "WordPress",
          color: "pink-text-gradient",
        },
      ],
      image: inception,
      source_code_link: "https://github.com/",
    },
    {
      name: "Internet Relay Chat",
      description:
        "ft_irc is a group project that involves creating an IRC server from scratch using C++. The server adheres to RFC 2812 specifications, making it compatible with existing IRC clients.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "C",
          color: "green-text-gradient",
        },
        {
          name: "networking",
          color: "pink-text-gradient",
        },
      ],
      image: irc,
      source_code_link: "https://github.com/",
    },
    {
      name: "ft_transcendence",
      description:
        "A Single Page App where authenticated users engage in real-time 'Pong' competitions, with the added capabilities of chatting with friends, joining channels, monitoring game statistics, and much more.",
      tags: [
        {
          name: "AngularJs",
          color: "blue-text-gradient",
        },
        {
          name: "NestJs",
          color: "green-text-gradient",
        },
        {
          name: "Websockets",
          color: "pink-text-gradient",
        },
        {
          name: "2FA",
          color: "orange-text-gradient",
        },
      ],
      image: trans,
      source_code_link: "https://github.com/",
    },
    {
      name: "Zksudoku",
      description:
        "zkSudoku is an innovative platform that enables users to engage in zero-knowledge Sudoku games by connecting their Metamask wallet, all while preserving their privacy. With zkSudoku, you can start playing without disclosing any personal data.",
      tags: [
        {
          name: "Solidity",
          color: "blue-text-gradient",
        },
        {
          name: "ETHERS.JS",
          color: "green-text-gradient",
        },
        {
          name: "WEB3.JS",
          color: "pink-text-gradient",
        },
        {
          name: "CIRCOM",
          color: "orange-text-gradient",
        },
        {
          name: "SNARK.JS",
          color: "red-text-gradient",
        },
      ],
      image: zk,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };