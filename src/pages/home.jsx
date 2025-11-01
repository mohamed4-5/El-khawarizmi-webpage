import Teacher from "../components/Teacher";
import Courses from "../components/Courses";

function Home() {
  return (
    <>
      {/* موبايل */}
      <div className="grid grid-rows-2 overflow-hidden gap-20 mt-[15%] md:hidden">
        <div className="pt-20 flex flex-col justify-center items-center">
          <img src="/photos/footerlogo.png" className="w-52" alt="logo" />
          <p className="pt-4 w-4/5 text-center font-poppins text-lg">
            Here we explain everything related to math, from near or far
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img
            src="/photos/icon.png"
            alt="icon"
            className="w-32 sm:w-40 md:w-56 lg:w-[400px]"
          />
          <img
            src="/photos/icon2.png"
            alt="icon"
            className="w-32 sm:w-40 md:w-56 lg:w-[400px]"
          />
        </div>
      </div>

      {/* Teacher Section - موبايل */}
      <div className="mt-64 md:hidden">
        <Teacher />
      </div>

      <div className="flex justify-center flex-col items-center mt-28 md:hidden">
        <p className="text-3xl font-semibold">
          Our <span className="text-sky-400">Courses</span>
        </p>
        <div className="border-t-8 h-7 px-32 py-14 mt-4 border-sky-400 rounded-[100%]"></div>
      </div>

      {/* ديسكتوب / تابلت */}
     
      <div className="md:grid grid-cols-2 gap-1 mt-[14%] hidden">
        <div className="flex justify-start items-center flex-wrap gap-4">
          <img
            src="/photos/icon.png"
            alt="icon"
            className="w-32 sm:w-40 md:w-56 lg:w-[350px]"
          />
          <img
            src="/photos/icon2.png"
            alt="icon"
            className="w-32 sm:w-40 md:w-56 lg:w-[250px]"
          />
        </div>
        <div className="pt-20 flex w-full flex-col items-center justify-center">
          <img src="/photos/footerlogo.png" className="w-96" alt="logo" />
          <p className="pt-4 w-4/5 self-center font-poppins text-2xl">
            Here we explain everything related to math, from near or far
          </p>
        </div>
      </div>


      {/* Teacher Section - ديسكتوب */}
      <div className="md:mt-80 mt-32 hidden md:flex justify-center items-center">
        <Teacher className="self-center" />
      </div>

      <div className="md:flex justify-center flex-col items-center mt-60 hidden">
        <p className="text-3xl font-semibold">
          Our <span className="text-sky-400">Courses</span>
        </p>
        <div className="border-t-8 h-7 md:px-40 md:py-12 mt-8 border-sky-400 rounded-[100%]"></div>
      </div>

      <Courses />
    </>
  );
}

export default Home;