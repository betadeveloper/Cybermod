'use client'

import { motion } from 'framer-motion'
import { socials } from '../constants'

import styles from '../styles'
import { footerVariants } from '../utils/motion'

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className='footer-gradient' />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className='flex items-center justify-between flex-wrap gap-5'>
        <h4 className='font-bold md:text-[48px] text-[36px] text-white'>
          Enter the Cybermod universe
        </h4>
        <a href='https://www.linkedin.com/in/raigardas-tautkus/'>
          <button
            type='button'
            className='flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] hover:bg-[#2E7AA4] transition ease duration-300ms'
          >
            <img
              src='/headset.svg'
              alt='headset'
              className='w-[24px] h-[24px] object-contain'
            />
            <span className='font-normal text-[16px] text-white'>
              Enter Cybermod
            </span>
          </button>
        </a>
      </div>

      <div className='flex flex-col'>
        <div className='mb-[50px] h-[2px] bg-white opacity-10' />

        <div className='flex items-center justify-between flex-wrap gap-4'>
          <h4 className='font-extrabold text-[24px] text-white'>CYBERMOD</h4>
          <p className='font-normal text-[14px] text-white opacity-50'>
            Copyright © 2023 Raigardas Tautkus. All rights reserved.
          </p>

          <div className='flex gap-4'>
            {socials.map((social) => (
              <a href={social.href} key={social.name}>
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className='w-[24px] h-[24px] object-contain cursor-pointer'
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
)

export default Footer
