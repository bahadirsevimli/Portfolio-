import { FormGroup, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import useFetchData from '../hooks/useFetchData';




export default function Header(){

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
        <div className="flex justify-end tracking-widest font-semibold text-sm">
        
      <FormGroup switch>
        <Input 
        className='cursor-pointer'
        checked={darkMode}
        onChange={toggleDarkMode} 
        type="switch" 
        role="switch" />
      </FormGroup>
      
            <div>{ data && data.headerSection.mode} | <a onClick={toggleLanguage} className="!text-[#3730A3] cursor-pointer">{ data && data.headerSection.language}</a></div>
        </div>
        <div className="flex justify-between">
            <div className="w-15 h-15 bg-[#edebff] text-[#3730A3] text-3xl rounded-full pl-5 !pt-3 transform-[rotate(30deg)] "><span className="opacity-70">B</span></div>
            <nav className="flex gap-25 font-normal">
                <Link to="/">
                     <div className="!p-3">{ data && data.headerSection.navbar.skills}</div>
                </Link>
                <Link to="/">
                     <div className="!p-3">{ data && data.headerSection.navbar.projects}</div>
                </Link>
                <Link to="/">
                     <div className="border-1 border-[#3730A3] text-[#3730A3] !p-3 !pr-10 !pl-10 rounded-xl ">{ data && data.headerSection.navbar.hireMe}</div>
                </Link>
                
                
                
               
            </nav>
        </div>
    </div>
    )
}