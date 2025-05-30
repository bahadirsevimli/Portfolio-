
import useFetchData from "../hooks/useFetchData";
import { useDarkMode } from "../context/DarkModeContext";


export default function Profile(){
    const { isDarkMode } = useDarkMode();
    const { data } = useFetchData();          

    return(
        <section className="flex flex-col gap-8 ">
             <h2 className={isDarkMode ? "!font-semibold !text-5xl text-white" : "text-black !font-semibold !text-5xl"}>{ data && data.profileSection.profile}</h2>
             <div className="sm:flex sm:flex-row flex flex-col gap-8 sm:gap-5">
                <div  className="flex flex-col gap-6">
                    <h3 className="text-3xl !text-[#3730A3]">{ data && data.profileSection.headers.profile}</h3>
                   
                    <div className="flex gap-8 sm:w-[400px]">
                        <div className="flex flex-col !gap-2">
                            <p className="flex">
                                <span className={isDarkMode ? "text-white font-semibold w-[50%]" : "text-black font-semibold w-[50%]"}>{ data && data.profileSection.questions.birthday}</span>
                                <span className="w-[50%]">{ data && data.profileSection.answers.birthday}</span>
                            </p>
                            <p className="flex ">
                                <span className={isDarkMode ? "text-white font-semibold w-[50%]" : "text-black font-semibold w-[50%]"}>{ data && data.profileSection.questions.location}</span>
                                <span className="w-[50%]">{ data && data.profileSection.answers.location}</span>
                            </p>
                            <p className="flex ">
                                <span className={isDarkMode ? "text-white font-semibold w-[50%]" : "text-black font-semibold w-[50%]"}>{ data && data.profileSection.questions.education}</span>
                                <span className="w-[50%]">{ data && data.profileSection.answers.education}</span>
                            </p>
                            <p className="flex ">
                                <span className={isDarkMode ? "text-white font-semibold w-[50%]" : "text-black font-semibold w-[50%]"}>{ data && data.profileSection.questions.role}</span>
                                <span className="w-[50%]">{ data && data.profileSection.answers.role}</span>
                            </p>
                        </div>
                    </div>
                   
    
                </div>
                <div className="flex flex-col gap-6 sm:w-[650px]">
                     <h3 className="text-3xl !text-[#3730A3] ">{ data && data.profileSection.headers.aboutMe}</h3>
                     <p className="font-light">{ data && data.profileSection.Introduce}</p>
                </div>
             </div>
             <br />
             <hr />
        </section>
    )
}