import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import coursesData from '../data/courses.json';
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { TEACHER_NAME } from "../utils/constants";


function CourseInfo(){
    const [openCourse, setOpenCourse] = useState(null);
    const toggleCourse = (id) => {
        setOpenCourse(openCourse === id ? null : id);
    }

    const {darkMode} = useTheme()

    const {id} = useParams();
    const course = coursesData.find(c => String(c.id) === String(id));

    if (!course){
        return <h2 className="mt-28 font-bold">Course not found</h2>;
    }
    
    return(
        <motion.div className={`${darkMode ? "bg-gray-900":"bg-slate-50"} flex flex-col justify-center `} initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-50}} transition={{duration:0.5}}>
            <div className="mt-28 md:pb-24 pb-12 rounded mx-4 bg-no-repeat bg-cover bg-gradient-to-br from-blue-500 to-blue-700">
                
                <div className="md:my-32 my-14 px-4 flex flex-col gap-5">
                    <p className="font-poppins text-white text-xl md:mx-5 self-start md:text-3xl border-b-4 border-red-500 pb-2 px-4 font-semibold">{TEACHER_NAME}</p>
                    <p className="font-poppins self-start md:mx-5 text-xl md:text-3xl font-semibold text-white">{course.title}</p>
                    <p className="bg-red-500 font-poppins rounded-full w-fit text-white md:mx-5 px-5">Free</p>
                    
                </div>
            </div>
            <div className="flex justify-center md:justify-end md:mr-12 mt-[-70px]"><img className="w-[80%] h-[200px] md:w-[60%] md:h-[40%] md:self-end rounded-lg shadow-gray-500 shadow-lg" src={course.image} alt="course"></img></div>
            <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-700" : "bg-white"} flex flex-col shadow-2xl w-11/12 m-16 self-center py-10`}>
                <h2 className="md:text-4xl text-3xl self-start font-bold mb-8 font-poppins">Course <span className="text-red-500">content</span></h2>
                <div className="space-y-4">
                    
                    <button 
                        onClick={() => {toggleCourse(course.id)}} 
                        className={`w-full font-poppins md:text-2xl text-xl rounded flex justify-between items-center p-4 ${darkMode ? "bg-teal-700" : "bg-red-100"} font-semibold`}
                        aria-expanded={openCourse === course.id}
                        aria-label={`${openCourse === course.id ? 'Collapse' : 'Expand'} course content`}
                    >
                        {course.title}
                        <span>{openCourse === course.id ? "▲" : "▼"}</span>
                    </button>
                    <AnimatePresence>
                    {openCourse === course.id && (
                        <motion.div className={`${darkMode ? "bg-yellow-400" : "bg-yellow-50"} p-4 rounded space-y-2 max-h-60 overflow-y-auto`} initial={{height: 0, opacity: 0}} animate={{height: "auto", opacity: 1}} exit={{height: 0, opacity: 0}} transition={{duration: 0.1, ease: "easeInOut"}}>
                            {course.lectures.map((video, index) => (
                                    <div key={index} className={`flex font-poppins md:text-xl text-lg justify-between p-3 ${darkMode ? "bg-gray-800 hover:bg-gray-900" : "bg-white hover:bg-gray-100"} rounded-md shadow cursor-pointer`}>
                                        {video.title}
                                     <a href={video.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1 h-fit bg-green-500 rounded-md hover:bg-green-600">Watch</a>
                                    </div>
                                 ))}
                            
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    )
}
export default CourseInfo;