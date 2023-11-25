'use client'
import React from 'react'




import { motion } from 'framer-motion';
import HeroThree from '../components/3d/HeroThree';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className=' bg-black w-full  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container sm:items-center text-white'>
      <motion.div initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{
          duration: 1.5,
          ease: [0.42, 0, 0.58, 1], // Custom cubic bezier easing
        }} className='relative xl:w-1/2 flex flex-col justify-center items-start w-full pt-20 max-sm:text-center max-sm:items-center  max-lg:text-center max-lg:items-center max-xl:text-center max-xl:items-center'>
        {/* deleted max-xl:padding-x due to problem in padding       */}
        {/* <p className='text-xl text-coral-red'>Hack@Arch</p> */}
        <h1 className='mt-10  font-palanquin text-8xl max-sm:text-[64px] max-sm:leading-[72px] font-bold '>
          <motion.span initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{
          delay:0.5,
          duration: 1.5,
          ease: [0.42, 0, 0.58, 1], // Custom cubic bezier easing
        }} className=''>MANAGE </motion.span>
          <br />
          <motion.span initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{
          delay:1,
          duration: 1.3,
          ease: [0.42, 0, 0.58, 1], // Custom cubic bezier easing
        }} className='gradient-text'>YOUR <br /></motion.span>
         <motion.span initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{
          delay:1.5,
          duration: 1.3,
          ease: [0.42, 0, 0.58, 1], // Custom cubic bezier easing
        }} className='gradient-text'>EXPENSES</motion.span>
          <br />
          {/* <TypingText text=" Hackathon" speed={100} /> */}
        </h1>
        <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{
          delay:2.2,
          duration: .45,
          ease: [0.42, 0, 0.58, 1], // Custom cubic bezier easing
        }} 
        className='text-slate-gray  text-lg leading-7 mt-3 mb-2 sm:max-w-sm text-[#bbbcbc]'>An all in one tool to manage all your expenses</motion.p>
        {/* here give the link to the devfolio page################################################################################ */}
        <motion.span initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{
          delay:1.5,
          duration: 1.3,
          ease: [0.42, 0, 0.58, 1], // Custom cubic bezier easing
        }} className='gradient-text'>
          <Link href='/userinfo' className='bg-[#4942E4] rounded-xl mt-4 p-3 hover:bg-blue-500 '>
            <button>Lets Explore!!</button>
          </Link>
        </motion.span>
        <motion.div 
         initial={{ y: 100, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         exit={{ y: 100, opacity: 0 }}
         transition={{
           delay:2.8,
           duration: .45,
           ease: [0.42, 0, 0.58, 1], // Custom cubic bezier easing
         }}
        >
      
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }} // Start from the right
        animate={{ x: 0, opacity: 1 }}   // Move to the left
        exit={{ x: -100, opacity: 0 }}   // Exit to the left
        transition={{
          duration: 1.5,
          ease: [0.42, 0, 0.58, 1], // Custom cubic bezier easing
        }}
        className='  flex justify-center relative flex-1 items-center xl:min-h-screen max-sm:max-h-[400px] max-sm:py-2 max-xl:py-8'>
        {/* { <Image src ={Logo} alt ="Hack@Arch Logo" width={310} height={200} className='object-contain relative'/>} */}
        <HeroThree />
      </motion.div>
     


    </section>
  )
}

export default Hero