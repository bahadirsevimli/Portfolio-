import { FormGroup, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import { useState } from 'react';
import useFetchData from '../hooks/useFetchData';


export default function Header({scrollToSectionProjects, scrollToSectionSkills}){

    const handleScrollProjects = () => {
        scrollToSectionProjects.current?.scrollIntoView({behavior: "smooth"});
    }

    const handleScrollSkills = () => {
        scrollToSectionSkills.current?.scrollIntoView({behavior: "smooth"});
    }

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => {
            const newMode = !prevDarkMode;
            localStorage.setItem("darkMode", newMode); 
            return newMode;
        });
        location.reload();
    };


    const [language, setLanguage] = useState(() => localStorage.getItem("language"));
    console.log(language)

    const toggleLanguage = () => {
        setLanguage(prevLanguage => {
            const newLanguage = prevLanguage === "türkçe" ? "english" : "türkçe";
            localStorage.setItem("language", newLanguage);
            return newLanguage;
        });
        location.reload();
        
    }
    
    const { data } = useFetchData();
    
 

    return(
    <div className="flex flex-col gap-10">
        <div className="flex justify-start sm:justify-end tracking-widest font-semibold sm:text-sm text-xs">
        
            <FormGroup switch>
                <Input 
                className='cursor-pointer'
                checked={darkMode}
                onChange={toggleDarkMode} 
                type="switch" 
                role="switch" />
            </FormGroup>
      
          
            <div>
                {data && data.headerSection.mode} | 
                <a onClick={toggleLanguage} className="cursor-pointer">
                    {language === "türkçe" ? (
                    <>
                        <span>{data?.headerSection?.changeContext}</span> 
                        <span className="text-[#3730A3]"> {data?.headerSection?.language}</span>
                    </>
                    ) : (
                    <>
                        <span className="text-[#3730A3]">{data?.headerSection?.language}</span> 
                        <span> {data?.headerSection?.changeContext}</span>
                    </>
                    )}
                </a>
            </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-between gap-3">
            <div className="w-15 h-15 bg-[#edebff] text-[#3730A3] text-3xl rounded-full pl-5 !pt-3 transform-[rotate(30deg)] "><span className="opacity-70">B</span></div>
            <nav className="flex  sm:gap-x-5 sm:gap-y-0 font-normal sm:text-lg text-sm">
                     <div onClick={handleScrollSkills} className="!p-3 cursor-pointer">{ data && data.headerSection.navbar.skills}</div>
                     <div onClick={handleScrollProjects} className="!p-3 cursor-pointer">{ data && data.headerSection.navbar.projects}</div>
                <Link to={ data && data.headerSection.navbar.hireMeUrl}>
                     <div className="border-1 border-[#3730A3] text-[#3730A3] sm:!p-3 sm:!pr-10 sm:!pl-10 p-2 rounded-xl ">{ data && data.headerSection.navbar.hireMe}</div>
                </Link>
            </nav>
        </div>
    </div>
    )
}