'use client';
import pythonLogo from '@/assets/python-logo.png';
import raspberryLogo from '@/assets/raspberry-logo.png';
import opencvLogo from '@/assets/opencv-logo.png';
import deepfaceLogo from '@/assets/deepface-logo.png';
import mongodbLogo from '@/assets/mongodb-logo.png';
import githubLogo from '@/assets/github-logo.png';
import {motion} from 'framer-motion';

export const LogoTicker = () => {
  return (
  <section className='py-20 md:py-24'>
    <div className="container">
      <div className='flex items-center gap-5'>
        <div className='flex-1 md:flex-none'>
          <h2>Built on</h2>
        </div>
      <div className='flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
      <motion.div 
      initial={{translateX: "-50%"}}
      animate={{translateX: "0"}}
      transition={{
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      }}
      className='flex flex-none gap-24 pr-14 -translate-x-1/2'>
        {[pythonLogo, raspberryLogo, opencvLogo, deepfaceLogo, mongodbLogo, githubLogo, pythonLogo, raspberryLogo, opencvLogo, deepfaceLogo, mongodbLogo, githubLogo].map((logo) => (<img src={logo.src} key={logo.src} className="h-[4.4rem] w-full"/>))}
      </motion.div>
      </div>
      </div>
    </div>

    </section>
  );
};
