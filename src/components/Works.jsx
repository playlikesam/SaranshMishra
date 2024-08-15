import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import * as Scale from "maath";

const ProjectCard = (index, name, description, tags, image, source_code_link) =>{
  return(
    <motion.div
      variants={fadeIn("up","spring", index*0.5, 0.75)}>
      <Tilt
        options={{
           max: 45,
           scale: 1,
           speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
            
          />
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={`{styles.sectionSubText}`}
        >My Work</p>
        <h2 className={`{styles.sectionHeadText} text-[3.5rem] font-bold text-white mb-5`}
        >Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("","", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here are some of the projects I have worked on.
          You can find more on my GitHub profile. Kindly visit through the link 
          or you can directly go with my username too - "playlikesam"
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) =>(
          <ProjectCard 
            key = {`project-${index}`} 
            index = {index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"");