import Teacher from "./Teacher";
import { useState,useEffect } from "react";
import Courses from "./Courses";
function Home(){
  

    return(
        <>
            <div className='grid grid-rows-2 overflow-hidden gap-20 mt-[15%] md:hidden'>
            <div className='pt-20 flex flex-col justify-center items-center'>
              <img src="/photos/footerlogo.png" className="w-52" alt="logo"></img>
              <p className='pt-4 w-4/5 text-center font-poppins text-lg'>Here we explain everything related to math, from near or far</p>
            </div>
            <div className='flex justify-center items-center'>
              <img src='/photos/icon.png' alt='icon' className='size-52'></img>
              <img src="/photos/icon2.png" alt='icon' className='size-52' ></img>
            </div>
            </div>
            <div className="mt-64 md:hidden">
              <Teacher/>
            </div>
            <div className='flex justify-center flex-col items-center mt-28 md:hidden'>
              <p className='text-3xl font-semibold'>Our <span className='text-sky-400'>Courses</span></p>
              <div className='border-t-8 h-7 px-32 py-14  mt-4  border-sky-400 rounded-[100%]'></div>  
            </div>
            <div className='md:grid grid-cols-2 gap-1 mt-[14%] hidden'>
              <div className='flex justify-start items-center '>
              <img src='/photos/icon.png' alt='icon' className='w-[400px]'></img>
              <img src="/photos/icon2.png" alt='icon' className='w-[400px]' ></img>
            </div>
            <div className='pt-20 flex w-[100] flex-col items-center justify-center'>
              
              <img src="/photos/footerlogo.png" className="w-96" alt="logo"></img>
              <p className='pt-4 w-4/5 self-center font-poppins text-2xl'>Here we explain everything related to math, from near or far</p>
            </div>
            
            </div>
            <div className="md:mt-80 mt-32 hidden md:flex justify-center items-center">
              <Teacher className="self-center"/>
            </div>
            <div className='md:flex justify-center flex-col items-center mt-60 hidden'>
              <p className='text-3xl font-semibold'>Our <span className='text-sky-400'>Courses</span></p>
              <div className='border-t-8 h-7 md:px-40 md:py-12  mt-8  border-sky-400 rounded-[100%]'></div>  
            </div>
            <Courses/>
        </>
    )
}

export default Home;