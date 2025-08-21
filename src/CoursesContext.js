import { createContext,useEffect,useState } from "react";
import coursesData from "./courses.json";

export const CoursesContext = createContext()

export const CoursesProvider = ({children})=>{
    const initialcourses = coursesData.map((c)=>({...c,isPurchased:false}));
    const[courses,setCourses]=useState(initialcourses)
    const purchaseCourse= (id)=>{
        setCourses((prev)=>
        prev.map((course)=>
        course.id===id ? {...course,isPurchased:true}:course
        )
        )
    }
    
    return(
        <CoursesContext.Provider value={{courses,purchaseCourse}}>
            {children}
        </CoursesContext.Provider>
    )
}