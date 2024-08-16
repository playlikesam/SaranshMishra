import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    java,
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
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Project Manager",
      icon: backend,
    },
    {
      title: "Graphics Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "Bachelor of Technology",
      company_name: "Global Engineering College",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Nov 2021 - May 2025",
      points: [
        "Pursuing a degree in Computer Science and Engineering having a CGPA of 7.70.",
        "Currently working on a project that involves building a web application using JSP and JDBC.",
      ],
    },
    {
      title: "Higher Secondary",
      company_name: "Maharishi Vidya Mandir",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Mar 2020 - Mar 2021",
      points: [
        "Completed Higher Secondary Education with a score of 75%.",
        "Studied Physics, Chemistry, Mathematics & Computer Science as major subjects.",
      ],
    },
    {
      title: "Secondary",
      company_name: "Maharishi Vidya Mandir",
      icon: shopify,
      iconBg: "#383E56",
      date: "Mar 2018 - Mar 2019",
      points: [
        "Completed Secondary Education with a score of 74.4%.",
        "Studied Mathematics, Science, Social Science, and English as major subjects.",
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
      name: "Ochi WebApp",
      description:
        "A detailed oriented animated website made from react Vite i.e., a modern Js build tool, as it is best compilation build tool so I started building on it. Although it's non-responsive but this can be turned into a responsive one. I learned different concepts of animation, use of different types of fonts and also sleek styling.",
      tags: [
        {
          name: "react(vite)",
          color: "blue-text-gradient",
        },
        {
          name: "animations",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/playlikesam/ochi-app",
    },
    {
      name: "Chat App",
      description:
        "Embark on a journey of seamless communication with my captivating Java-powered chatting application! Crafted with finesse using the dynamic Swing framework and ingenious socket programming. I make the Whatsapp interface in the application.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Socket",
          color: "green-text-gradient",
        },
        {
          name: "Swing",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/playlikesam/ChatApp",
    },
    {
      name: "Ray-Ban",
      description:
        "Successfully designed and implemented a dynamic webpage for RayBan integrating HTML5, CSS, and JavaScript, enhanced with SheryJS for advanced animations. The webpage showcases proficiency in creating engaging user interfaces and implementing interactive features.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/playlikesam/rayban",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };