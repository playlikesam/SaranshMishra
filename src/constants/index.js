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
    port2,
    port3,
    port4,
    port6,
    port7,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Project Manager",
      icon: backend,
    },
    {
      title: "Backend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
    },
    {
      name: "CSS 3",
      icon: css,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
    },
    {
      name: "JavaScript",
      icon: javascript,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    },
    {
      name: "React JS",
      icon: reactjs,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/3459/3459528.png",
    },
    {
      name: "React Native",
      icon: tailwind,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
    },
    {
      name: "Java",
      icon: threejs,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/226/226777.png",
    },
    {
      name: "git",
      icon: git,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/4494/4494748.png",
    },
    {
      name: "docker",
      icon: java,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/15466/15466088.png",
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
        "I have worked with multiple clients and also contributed on open source projects. I have a good experience in developing web applications and also in developing mobile applications.",
      name: "UpWork, Fiverr & Linkedin",
      designation: "Freelance Developer",
      company: "-Present",
      
    },
    {
      testimonial:
        "Worked with Watson Assistant. In this period, I learned about workings in IBM Cloud.",
      name: "IBM SkillsBuild",
      designation: "Student Intern",
      company: "-2024",
      
    },
    {
      testimonial:
        "In this Intern, got selected via AICTE. I got to learn about Process Mining and about KPI Analysis.",
      name: "Celonis",
      designation: "Student Intern",
      company: "-2022",
      
    },
  ];
  
  const projects = [
    {
      name: "Ochi WebApp",
      description:
        "A detailed-oriented animated website built using React Vite, a modern JavaScript build tool. While the website is currently non-responsive, it can be adapted for responsiveness. Through this project, I learned about animations, font usage, and sleek styling.",
      tags: [
        { name: "react(vite)", color: "blue-text-gradient" },
        { name: "animations", color: "green-text-gradient" },
        { name: "tailwind", color: "pink-text-gradient" },
      ],
      image: carrent,
      source_code_link: "https://github.com/playlikesam/ochi-app",
    },
    {
      name: "Chat App",
      description:
        "A Java-powered chatting application built with Swing and socket programming. Inspired by the WhatsApp interface, this application offers a seamless communication experience.",
      tags: [
        { name: "Java", color: "blue-text-gradient" },
        { name: "Socket", color: "green-text-gradient" },
        { name: "Swing", color: "pink-text-gradient" },
      ],
      image: jobit,
      source_code_link: "https://github.com/playlikesam/ChatApp",
    },
    {
      name: "Ray-Ban",
      description:
        "A dynamic webpage for Ray-Ban created using HTML5, CSS, and JavaScript, enhanced with SheryJS for advanced animations. This project demonstrates expertise in crafting engaging user interfaces and interactive features.",
      tags: [
        { name: "html", color: "blue-text-gradient" },
        { name: "css", color: "green-text-gradient" },
        { name: "javascript", color: "pink-text-gradient" },
      ],
      image: tripguide,
      source_code_link: "https://github.com/playlikesam/rayban",
    },
    {
      name: "Education Dashboard",
      description:
        "An interactive learning dashboard designed and implemented using HTML5, CSS, and JavaScript, with SheryJS enhancing animations. It provides an intuitive user experience.",
      tags: [
        { name: "html", color: "blue-text-gradient" },
        { name: "css", color: "green-text-gradient" },
        { name: "javascript", color: "pink-text-gradient" },
      ],
      image: port2,
      source_code_link: "https://github.com/playlikesam",
    },
    {
      name: "Mangalam Hospital",
      description:
        "A responsive and user-friendly website for Mangalam Hospital, developed using HTML5, CSS, and JavaScript. It is optimized for mobile devices, showcasing proficiency in building intuitive interfaces.",
      tags: [
        { name: "html", color: "blue-text-gradient" },
        { name: "css", color: "green-text-gradient" },
        { name: "javascript", color: "pink-text-gradient" },
      ],
      image: port3,
      source_code_link: "https://github.com/playlikesam",
    },
    {
      name: "Learning Point",
      description:
        "A responsive learning platform for students, built using HTML5, CSS, and JavaScript. It offers a user-friendly interface, optimized for mobile devices.",
      tags: [
        { name: "html", color: "blue-text-gradient" },
        { name: "css", color: "green-text-gradient" },
        { name: "javascript", color: "pink-text-gradient" },
      ],
      image: port4,
      source_code_link: "https://github.com/playlikesam",
    },
    {
      name: "SmartEd",
      description:
        "A major project showcasing proper video lectures and notes for students. Built as a responsive learning platform, this website demonstrates proficiency in crafting interactive user experiences.",
      tags: [
        { name: "html", color: "blue-text-gradient" },
        { name: "css", color: "green-text-gradient" },
        { name: "javascript", color: "pink-text-gradient" },
      ],
      image: port6,
      source_code_link: "https://github.com/playlikesam",
    },
    {
      name: "Bubble.io",
      description:
        "A demo website created using the virtual programming platform Bubble.io. It highlights the simplicity and accessibility of the platform, showcasing my ability to adapt to new tools.",
      tags: [
        { name: "html", color: "blue-text-gradient" },
        { name: "css", color: "green-text-gradient" },
        { name: "javascript", color: "pink-text-gradient" },
      ],
      image: port7,
      source_code_link: "https://github.com/playlikesam",
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };