
import { Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { useDarkMode } from "../context/DarkModeContext";



export default function Projects() {
    const { isDarkMode } = useDarkMode();
    const { data } = useFetchData();    

    return(
        <section className="flex flex-col gap-10">
            <h2 className={isDarkMode ? "font-semibold !text-5xl text-white" : "text-black font-semibold !text-5xl"}>{ data && data.projectsSection.project}</h2>
            <div className="flex sm:flex-row flex-col  gap-20 sm:gap-20">
        
                    { data && data.projectsSection.projects.map((project, index) => (
                        <div key={index} className="flex w-xs">
                        <div className="flex flex-col gap-3">
                            <img src={project.url} alt="Witflix" />
                            <h3 className="text-3xl text-[#3730A3]">{project.projectName}</h3>
                            <p className="text-xs h-[50px]">{project.content}</p>
                            <div className="flex gap-2 text-[#3730A3] text-sm">
                                {project.libraries.map((library, index) => 
                                    <div key={index} className="border-1 border-[#3730A3] pb-1 pt-1 pl-3 pr-3 rounded-md">{library}</div>
                                )}
                            </div>
                            <div className="flex justify-between text-[#3730A3] underline text-sm">
                                <Link to={project.githubUrl}>
                                    <div className="text-[#3730A3]">{project.github}</div>
                                </Link>
                                <Link to={project.siteUrl}>
                                    <div className="text-[#3730A3]">{project.viewSite}</div>
                                </Link>
                            </div>
                        </div>
                        </div>

                    ))}
            </div>
            <br />
            
        </section>
    )
}