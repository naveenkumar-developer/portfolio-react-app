import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import ProjectPage from './pages/Project'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react'
function App() {
const [sideBarShow, setSideBarShow]=useState(false)

// SIDEBAR FUNCTIONALITY 

const handleSidebar= () =>{
  setSideBarShow(!sideBarShow)
}
  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (sideBarShow) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
    
    // Cleanup function to reset scrolling when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideBarShow]);
  return (
    <>
      <Sidebar recieveData={sideBarShow}/>
    <div className="container_fluid overallContainer">
    <Header sideBarFunc={handleSidebar} sidebarStatus={sideBarShow}/>
    <main className='main_content'>
    <Routes>
      <Route path="/portfolio-react-app/" element={<Home />} />
      <Route path="/portfolio-react-app/about" element={<About />} />
      <Route path='/portfolio-react-app/projects' element={<ProjectPage />} />
      <Route path="/portfolio-react-app/contact" element={<Contact />} />
    </Routes>
    </main>
    <Footer />
    </div>
    </>
  )
}

export default App
