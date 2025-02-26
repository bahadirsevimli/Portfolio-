
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Profile from './components/Profile'
import Projects from './components/Projects'
import SkillsSection from './components/Skills'
import { useRef } from 'react';
import { useDarkMode } from './context/DarkModeContext';



function App() {
  const { isDarkMode } = useDarkMode();
  const componentRef = useRef(null);
  const SkillsRef = useRef(null);

 
  
  return (
    
      <div className="flex flex-col min-h-screen">
        <main className={isDarkMode ? "flex-grow w-full flex justify-center text-lg bg-black" : "flex-grow w-full flex justify-center text-lg"}>
          <div className={isDarkMode ? "text-white w-[80%] !mt-5 flex flex-col sm:gap-20 gap-15 tracking-wide leading-7" : "w-[80%] !mt-5 text-[#6c7180] flex flex-col sm:gap-20 gap-15 tracking-wide leading-7"}>
            <Header scrollToSectionProjects={componentRef} scrollToSectionSkills={SkillsRef} />
            <Main />
            <div ref={SkillsRef}>
              <SkillsSection />
            </div>
            <Profile />
            <div ref={componentRef}>
              <Projects />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    
  );
}
export default App
