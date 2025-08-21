import { motion } from "framer-motion"
import { FaUser } from "react-icons/fa";
import { CoursesContext } from "./CoursesContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useTheme } from "./ThemeContext";


function Profile(){
    const {courses}=useContext(CoursesContext)
    const purchasedCourses=courses.filter((c)=> c.isPurchased)
    const {darkMode}=useTheme()
    
    return(
        <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-50}} transition={{duration:0.5}}>
            <div className="flex flex-col items-center justify-center mt-12 md:mt-20 ">
                <div className="flex flex-row pl-3 md:pl-6 text:xl md:text-2xl pt-12 md:pt-24 box-border border-b-black border-b-2 w-4/5 pb-7 md:pb-14">
                    <div className="m-2 text-blue-600"><FaUser></FaUser></div>
                     <p className="text-gray-400 m-1 font-poppins ">User Name.</p>
                </div>
                <div className="md:mt-32 mt-14 flex flex-col justify-center items-center">
                    <p className='text-3xl font-semibold'>My <span className='text-sky-400'>Courses</span></p>
                    <div className='border-t-8 px-32 py-14  mt-4 md:px-40 md:py-12  md:mt-8  border-sky-400 rounded-[100%]'></div>  
                </div>
                
            </div>
            <div className="mb-48 flex flex-col md:flex-row items-center md:justify-center mt-16 gap-10">
                    {purchasedCourses.length===0 ?(<p className="text-2xl font-poppins text-center font-bold">You did not purchased any course yet!</p>): (
                        purchasedCourses.map((course)=>(
                        <div >
                                <div key={course.id} className=" flex justify-center items-center flex-col rounded ">
                        <div className='overflow-hidden'><img src={course.image} alt={course.title} className="md:w-96 w-72 rounded object-cover transition-transform duration-300 ease-in-out hover:scale-110 " /></div>
                        <div className={`shadow-xl flex flex-col rounded justify-center items-center ${darkMode? "bg-gray-800":"bg-white"} gap-4 py-4 hover:shadow-2xl hover:scale-y-105 hover:scale-x-105 transition duration-300`}><h3 className='font-bold text-2xl border-b-2 border-sky-400 p-4'>{course.title}</h3>
                        
                            <p className='w-80 md:w-[420px] text-lg md:text-xl p-4 '>{course.description}</p>
                            <div className='border bg-teal-400 rounded text-white py-2 px-4'>Free</div>
                            <button disabled className='py-3 px-4 rounded-full bg-emerald-400 text-white'>Purchased</button>
                        <div className='border-b-4 border-emerald-300 w-3/4'></div>
                        
                        <Link to={`/course/${course.id}`} className={`border-2 rounded-full  ${darkMode ? "hover:border-white border-gray-800":"shadow-lg border-white"} px-4 py-2 transition ease-in-out duration-300  hover:border-black `}>Watch now</Link>
                        
                        </div>
                    </div>
                </div>  
                        )
                        )
                     )}
                </div>
        </motion.div>
    )
}
export default Profile;