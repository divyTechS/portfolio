import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { div, p } from 'framer-motion/client';
import { SectionWrapper } from './hoc';
import { staggerContainer } from '../utils/motion';
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>

    <motion.div variant= {textVariant()}>
      <p className={styles.sectionSubText}>
Introduction
      </p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p
    variants={fadeIn("","",0.1,1)}
    
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>

Welcome to DivyTech!
Hi, I'm Divyesh S Swarge, but I go by DivyTech in the tech world. I'm a passionate Web Developer, Java Developer, and Web3 Developer, with a knack for creating impactful digital experiences. Specializing in business portfolio websites, I’ve had the privilege of building solutions for industries like education, news, and real estate, including projects like a driving school website, a news platform, and a property dealing website.

With expertise in the MERN stack, Java, Solidity, and R, I bring a versatile skill set to the table. My journey in development is driven by a relentless spirit inspired by Dr. B.R. Ambedkar and a personal philosophy of never giving up.

This portfolio is a reflection of my passion for crafting innovative solutions, and I aim to use it to showcase my skills and connect with global opportunities. I'm especially interested in exploring roles beyond India, with a particular focus on working in Japan.

Let's create something extraordinary together—whether it's a cutting-edge business website or a revolutionary Web3 application!
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
export {styles}
export {staggerContainer}
export {SectionWrapper}