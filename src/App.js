import logo from './logo.svg';
import './App.css';
import Header from './header';
import { BrowserRouter as Router,Routes,Route,useLocation } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import Home from './home';
import CourseInfo from './CourseInfo';
import { CoursesProvider } from './CoursesContext';
import { useState } from 'react';
import { ThemeProvider,useTheme } from './ThemeContext';
import { AppProviders } from './AppProviders';
import Footer from './Footer';

  function AppContent(){
    const{darkMode}=useTheme();
    console.log("dark Mode:",darkMode)
    const location=useLocation();
    const hideHeader = ['/login','/signup'];
    
    const shouldHideHeader= hideHeader.includes(location.pathname);
    return(
      <div className={`min-h-screen flex flex-col transition-all duration-500 ${darkMode?"bg-gray-900 text-white":"bg-white text-black"}`}>
        <div>{!shouldHideHeader&&<Header/>}</div>
        <Routes location={location} key={location.pathname}>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/course/:id' element={<CourseInfo></CourseInfo>}></Route>
          </Routes>
          <div>{!shouldHideHeader&&<Footer></Footer>}</div>
      </div>
    )
  }

  function App(){
    
    console.log("App is rendring")

  return (
    <CoursesProvider>
      <ThemeProvider>
        <AppContent></AppContent>
      </ThemeProvider>
    </CoursesProvider>
  );
}


export default App;
