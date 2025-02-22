
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Profile from './components/Profile'
import Projects from './components/Projects'
import SkillsSection from './components/Skills'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full flex justify-center text-lg">
        <div className="w-[80%] mt-5 text-[#6c7180] flex flex-col gap-20 tracking-wide leading-7">
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
