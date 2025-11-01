import { useContext } from 'react';
import { CoursesContext } from '../contexts/CoursesContext';
import CourseCard from './CourseCard';

function Courses(){
    const {courses} = useContext(CoursesContext);
  
    if(!courses || courses.length === 0){
      return <p className='font-poppins text-2xl font-bold'>There are no courses yet</p>
    }

    return(
        <div className="flex gap-10 justify-center items-center mb-20 font-poppins mt-16 p-10 flex-wrap">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} showPurchaseButton={true} />
            ))}
        </div>
    )
}

export default Courses;