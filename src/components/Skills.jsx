
import useFetchData from "../hooks/useFetchData";
import { useDarkMode } from "../context/DarkModeContext";

export default function SkillsSection(){
    const { isDarkMode } = useDarkMode();
    const { data } = useFetchData();

    return(
        <section className="flex flex-col gap-7">
            <h2 className={isDarkMode ? "font-semibold !text-5xl text-white" : "text-black font-semibold !text-5xl"}>{ data && data.skillsSection.skill}</h2>
            <div className="flex sm:flex-row flex-col justify-between sm:gap-30 gap-5">
            { data && data.skillsSection.skills.map((skill, index) => 
                <div key={index} className="flex flex-col gap-6">
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