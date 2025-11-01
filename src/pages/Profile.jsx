import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { CoursesContext } from "../contexts/CoursesContext";
import { useContext } from "react";
import { useTheme } from "../contexts/ThemeContext";
import CourseCard from "../components/CourseCard";


function Profile(){
    const {courses} = useContext(CoursesContext)
    const purchasedCourses = courses.filter((c) => c.isPurchased)
    const {darkMode} = useTheme()
    
    return(
        <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -50}} transition={{duration: 0.5}}>
            <div className="flex flex-col items-center justify-center mt-12 md:mt-20 ">
                <div className={`flex flex-row pl-3 md:pl-6 text:xl md:text-2xl pt-12 md:pt-24 box-border ${darkMode ? "border-b-white" : "border-b-black"} border-b-2 w-4/5 pb-7 md:pb-14`}>
                    <div className="m-2 text-blue-600"><FaUser></FaUser></div>
                     <p className="text-gray-400 m-1 font-poppins ">User Name.</p>
                </div>
                <div className="md:mt-32 mt-14 flex flex-col justify-center items-center">
                    <p className='text-3xl font-semibold'>My <span className='text-sky-400'>Courses</span></p>
                    <div className='border-t-8 px-32 py-14  mt-4 md:px-40 md:py-12  md:mt-8  border-sky-400 rounded-[100%]'></div>  
                </div>
                
            </div>
            <div className="mb-48 flex flex-col md:flex-row items-center md:justify-center mt-16 gap-10">
                {purchasedCourses.length === 0 ? (
                    <p className="text-2xl font-poppins text-center font-bold">You did not purchased any course yet!</p>
                ) : (
                    purchasedCourses.map((course) => (
                        <CourseCard 
                            key={course.id} 
                            course={course} 
                            showPurchaseButton={false} 
                            actionButtonText="Watch now"
                        />
                    ))
                )}
            </div>
        </motion.div>
    )
}
export default Profile;