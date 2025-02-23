
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Profile from './components/Profile'
import Projects from './components/Projects'
import SkillsSection from './components/Skills'
import { useEffect, useState } from 'react';


function App() {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  })

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className={isDarkMode ? "flex-grow w-full flex justify-center text-lg bg-black" : "flex-grow w-full flex justify-center text-lg"}>
        <div className={isDarkMode ? "text-white w-[80%] !mt-5 flex flex-col gap-20 tracking-wide leading-7" : "w-[80%] !mt-5 text-[#6c7180] flex flex-col gap-20 tracking-wide leading-7"}>
          <Header />
          <Main />
          <SkillsSection />
          <Profile />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default App
