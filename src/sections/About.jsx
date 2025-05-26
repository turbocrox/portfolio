import React from 'react'
import { useRef } from "react";
import Card from '../components/Card'
import { rotate } from 'three/tsl'
import { Globe } from '../components/globe';
import CopyEmailButton from '../components/CopyEmailButton';
import { Frameworks } from '../components/Frameworks';
const About = () => {
 const grid2Container = useRef();
  return (
 
    <section className='c-space section-spacing'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-heading'>About Me</h2>
        <div className='max-w-7xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>

          {/*Grid Item 1*/}
          <div className='flex items-end grid-default-color grid-1'>
            <img src="/portfolio/images/coding-pov.png" alt="img" 
            className='absolute scale-[1.75] -right-[5rem] -top-[1rem]
            md:scale[3] md:left-50 md:inset-y-10 lg:scale-[2.5]' />
             <div className="z-10">
              <p className="headtext">Hi</p>
              <p className="subtext">
                Over the last 1 years, I developed my frontend and backend dev
                skills to deliver dynamic and software and web applications.
              </p>
            </div>
             <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
          </div>




          {/*Grid Item 2*/}
          <div className='grid-default-color grid-2'>
           <div className='flex items-center justify-center w-full h-full' ref={grid2Container}>
            <p className="flex items-end text-5xl text-gray-500">
                  CODE IS CRAFT
            </p>
          <Card    style={{rotate :"75deg" ,top:"30%",left:"20%"}}text="GRASP"
          containerRef={grid2Container}
                 />
           <Card style={{rotate :"-10deg" ,top:"60%",left:"45%"}}  text="SOLID"
           containerRef={grid2Container}
                   />
            <Card style={{rotate :"20deg" ,top:"50%",left:"70%"}} text="Design Patterns"
            containerRef={grid2Container}
                    />
             <Card style={{rotate :"-75deg" ,top:"10%",left:"20%"}} text="Design Principles"
             containerRef={grid2Container}
                     />
              <Card style={{rotate :"40deg" ,top:"40%",left:"59%"}} text="SRP" 
              containerRef={grid2Container}
                      />
               <Card
                  style={{ rotate: "30deg", top: "70%", left: "70%" }}
                  image="/portfolio/images/csharp-pink.png"
                  containerRef={grid2Container}
                />
                <Card
                  style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                  image="/portfolio/images/dotnet-pink.png"
                  containerRef={grid2Container}
                />
                <Card
                  style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                  image="/portfolio/images/blazor-pink.png"
                  containerRef={grid2Container}
                />
           </div>






          </div>
          {/*Grid Item 3*/}
          <div className='grid-black-color grid-3'>
            <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Moon, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe/>
          </figure>
        </div>
          </div>
          {/*Grid Item 4*/}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton/>
          </div>
        </div>
         <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I use a wide range of web technologies and tools to create scalable, visually appealing, and user-centric websites.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;