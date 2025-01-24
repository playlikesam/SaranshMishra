import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';

const Works = () => {
  return (
    <div className="relative z-10"> {/* Added z-index to ensure visibility */}
      {/* Heading Section */}
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-left text-5xl font-bold mb-6`}>
          My Projects
        </h2>
        <p className={`${styles.sectionSubText} text-left text-lg text-secondary mb-10`}>
          A collection of my recent work showcasing creativity and technical skills.
        </p>
      </motion.div>

      {/* Grid Section */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-10 px-4 sm:px-10"
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {projects.map((project, index) => (
            <div
              key={`project-${index}`}
              className="bg-tertiary rounded-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 sm:h-60 object-cover"
              />
              {/* Project Info */}
              <div className="p-4">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {project.name}
                </h3>
                <p className="text-secondary text-sm mb-3">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-xs font-medium px-2 py-1 rounded bg-opacity-20 ${tag.color}`}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, "");
