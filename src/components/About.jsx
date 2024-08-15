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
      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        I am a software developer with a passion for creating and designing web applications. I have a strong foundation in computer science and software engineering principles. I am proficient in front-end and back-end technologies, including React, JSP, Swing, Servlet, AWT, Socket Programming, and JDBC. I am a quick learner and enjoy working on challenging projects. I am looking for opportunities to work on interesting projects and collaborate with other developers.
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