import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import * as Maath from "maath";
import { SectionWrapper } from '../hoc';



const ServiceCard = ({ index, title, icon}) => { 
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <p className={`{styles.sectionSubText} mb-5`}
        >Introduction</p>
        <h2 className={`{styles.sectionHeadText} text-[3.5rem] font-bold text-white mb-5`}
        >Overview</h2>
      </motion.div>
      <motion.p style={{textAlign:'justify'}} variants={fadeIn("", "", 0.1, 1)}>
        I am Saransh Mishra, a B.Tech Computer Science student specializing in mobile application development using React Native (Expo) and web application development with React, Bootstrap, and other modern frameworks. My expertise lies in creating intuitive, user-friendly applications and managing projects efficiently using tools like Jira.

I have developed impactful projects, including real-time chat systems, learning platforms, and dynamic web interfaces. My experience with team leadership, combined with a strong technical foundation, enables me to deliver high-quality solutions that align with user needs and business goals. Fluent in English and Hindi, I am committed to innovation and open to contributing to opportunities across PAN India.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) =>(
          <ServiceCard 
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about");