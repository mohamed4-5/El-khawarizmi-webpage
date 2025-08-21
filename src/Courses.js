        
import coursesData from './courses.json';
import { useState,useEffect,useContext } from 'react';   
import { Link } from 'react-router-dom';    
import { CoursesContext } from './CoursesContext';
import { useTheme } from './ThemeContext';

        
function Courses(){
    const{darkMode}=useTheme()
    const{courses,purchaseCourse}=useContext(CoursesContext);
  
    if(!courses||courses.length===0){
      return<p className='font-poppins text-2xl font-bold'>There are no courses yet</p>
    }
  

    return(
        <div className="flex gap-10 justify-center items-center mb-20 font-poppins mt-16 p-10 flex-wrap ">
                {courses.map((course)=>{
                return(
                <div key={course.id} className=" flex justify-center items-center flex-col  rounded ">
                    <div className='overflow-hidden'><img src={course.image} alt={course.title} className="md:w-96 w-72 rounded object-cover transition-transform duration-300 ease-in-out hover:scale-110 " /></div>
                    <div className={`shadow-xl rounded ${darkMode ? "bg-gray-800":"bg-white"} flex flex-col justify-center items-center gap-4 py-4 hover:shadow-2xl hover:scale-y-105 hover:scale-x-105 transition duration-300`}><h3 className='font-bold text-2xl border-b-2 border-sky-400 p-4'>{course.title}</h3>
                    
                    <p className='w-80 md:w-[420px] text-lg md:text-xl p-4 '>{course.description}</p>
                    <Link to={`/course/${course.id}`} className='border-2 rounded-full shadow-lg border-white px-4 py-2 transition ease-in-out duration-300 hover:border-black'>Know More</Link>
                    <div className='border-b-4 border-emerald-300 w-3/4'></div>
                    <div className='border bg-teal-400 rounded text-white py-2 px-4'>Free</div>
                    {!course.isPurchased ? (<button onClick={() => purchaseCourse(course.id)} className={`py-3 px-4 rounded-full  ${darkMode ? "bg-gray-800 hover:bg-sky-800 border-sky-800":"bg-white border-sky-400 hover:bg-sky-400 hover:text-white"} border-2 transition ease-in-out duration-300`}>Purchase Now</button>): (<button disabled className='py-3 px-4 rounded-full bg-emerald-400 text-white'>Purchased</button>)}
                    
                    </div>
                </div>  
                )
                })}
        </div>
    )
}

export default Courses;