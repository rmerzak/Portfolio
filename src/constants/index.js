import {
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    software,
    tailwind,
    nodejs,
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
    cplus,
    c,
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

    {
      name: "SpringBatch",
      icon: batch,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };