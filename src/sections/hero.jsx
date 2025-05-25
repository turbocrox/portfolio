import React from 'react'
import { words } from '../constants/index.js'
import Button from '../components/Button.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import { useEffect } from 'react'
import { gsap } from 'gsap/gsap-core'
import AnimatedCounter from '../components/AnimatedCounter.jsx'


const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      '.hero-text h1',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' }
    );
  }, []);



  return (
    <section id="hero" className="relative  overflow-hidden">
      <div className="absolute   top-0  left-0 z-10">
        <img  
          src="/portfolio/bg.png" 
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hero-layout relative z-20">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5  text-gray-50">
          {/* header content */}
          <div   className="hero-text">
          <h1>Bringing 
            <span  className='slide'>
              <span  className='wrapper'>
                   {words.map(( word)=>(
                      <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
  <img  
    src={word.imgPath} 
    alt={word.text} 
    className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-gray-300 object-contain'
   />
    <span className="text-4xl md:text-6xl font-semibold">{word.text}
       </span>
           </span>
      ))}
              </span>
                 </span>
                     </h1>
        
          <h1>to life through clean and </h1>
            <h1>creative development.</h1>

          </div> 
          <br></br>
           <p  className='text-gray-100 md:text-2xl relative z-10 pointer-events-none'>
         Hi, I'm Aditya Pundir — a web developer based in India.</p>
        <br></br>
        <br></br>
        <Button  className="md:w-80 md:h-16 w-60 h-12"
        
        id="button"
        text="See my work"/>
        </header> 

        
    <figure>
        <div  className='hero-3d-layout '>
          <HeroExperience></HeroExperience>

        </div>
    </figure>


      </div>

      <AnimatedCounter></AnimatedCounter>

    </section>
  )
}

export default Hero