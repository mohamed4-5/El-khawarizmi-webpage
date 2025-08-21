import { useTheme } from "./ThemeContext";
function Teacher(){
    const{darkMode}=useTheme();
    return(
        <div className="flex flex-col justify-center items-center md:gap-6 gap-8 ">
            <div className="flex flex-col justify-center items-center">
              <p className='text-3xl font-semibold'>Our <span className='text-sky-400'>Teachers</span></p>
              <div className='border-t-8  md:px-40 md:py-12 hidden md:flex mt-8 border-sky-400 rounded-[100%]'></div> 
              <div className='border-t-8 px-32 py-14  mt-4  md:mt-8 md:hidden border-sky-400 rounded-[100%]'></div> 
            </div>
            
            <div className={` flex flex-col justify-center items-center gap-2 md:p-7 pt-5 pb-7 md:pb-12 rounded mt-16 ${darkMode? "bg-sky-900":"bg-sky-200  " }`}>
                <img src="/photos/khwarizmi2.jpeg" alt="teacher" className="md:h-96 h-52 rounded"></img>
                <div className="flex flex-col justify-center items-center md:gap-4 md:pt-6 pt-4 gap-2 md:text-xl text-lg font-poppins">
                    <p className="font-bold text-xl">Eng. Ziad Mohamed</p>
                    <p className="w-3/4">A student at FCAI and the <span className={`font-semibold ${darkMode? "text-teal-400":"text-cyan-700"}  `}>NEW</span> Khwarizmy</p>
                </div>
            </div>
            
        </div>
    )
}

export default Teacher;