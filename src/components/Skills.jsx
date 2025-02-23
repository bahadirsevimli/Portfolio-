import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";

export default function SkillsSection(){

     const [isDarkMode, setIsDarkMode] = useState(() => {
            return JSON.parse(localStorage.getItem("darkMode")) || false;
          })
        
          useEffect(() => {
            localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
          }, [isDarkMode]);
    
          const { data } = useFetchData();

    return(
        <section className="flex flex-col gap-7">
            <h2 className={isDarkMode ? "font-semibold !text-5xl text-white" : "text-black font-semibold !text-5xl"}>{ data && data.skillsSection.skill}</h2>
            <div className="flex justify-between gap-30">
            { data && data.skillsSection.skills.map((skill) => 
                <div className="flex flex-col gap-6">
                    <h3 className="text-3xl !text-[#3730A3]">{skill.header}</h3>
                    <p className="text-xs">{skill.text}</p>
                </div>
            )}
            </div>
            <br />
            <hr />
        </section>  
    )
}