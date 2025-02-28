
import useFetchData from "../hooks/useFetchData";
import { useDarkMode } from "../context/DarkModeContext";

export default function SkillsSection(){
    const { isDarkMode } = useDarkMode();
    const { data } = useFetchData();

    return(
        <section className="flex flex-col gap-7">
            <h2 className={isDarkMode ? "font-semibold !text-5xl text-white" : "text-black font-semibold !text-5xl"}>{ data && data.skillsSection.skill}</h2>
            <div className="flex sm:flex-row flex-row sm:gap-10 gap-3 sm:w-[70%] flex-wrap">
            { data && data.skillsSection.skills.map((skill, index) => 
                <div key={index} className="flex justify-center sm:justify-start">
                    
                    <div className="!text-[#3730A3] border-[#3730A3] border-2 rounded-xl pt-2 pb-2 pl-4 pr-4   flex justify-center gap-2">
                        <img className="w-7" src={skill.svgUrl} />
                        <h5>{skill.header}</h5>
                    </div>
                   
                </div>
            )}
            </div>
            <br />
            <hr />
        </section>  
    )
}