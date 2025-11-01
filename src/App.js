import './App.css';
import Header from './components/header';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Home from './pages/home';
import CourseInfo from './pages/CourseInfo';
import { CoursesProvider } from './contexts/CoursesContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Footer from './components/Footer';

  function AppContent(){
    const {darkMode} = useTheme();
    const location = useLocation();
    const hideHeader = ['/login','/signup'];
    
    const shouldHideHeader = hideHeader.includes(location.pathname);
    return(
      <div className={`min-h-screen flex flex-col transition-all duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <div>{!shouldHideHeader && <Header/>}</div>
        <Routes location={location} key={location.pathname}>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/course/:id' element={<CourseInfo></CourseInfo>}></Route>
          </Routes>
          <div>{!shouldHideHeader && <Footer></Footer>}</div>
      </div>
    )
  }

  function App(){
  return (
    <CoursesProvider>
      <ThemeProvider>
        <AppContent></AppContent>
      </ThemeProvider>
    </CoursesProvider>
  );
}


export default App;
