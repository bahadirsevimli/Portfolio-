import { useEffect, useState } from "react";

export default function Profile(){

      const [isDarkMode, setIsDarkMode] = useState(() => {
                return JSON.parse(localStorage.getItem("darkMode")) || false;
              })
            
              useEffect(() => {
                localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
              }, [isDarkMode]);
        
    


    return(
        <section className="flex flex-col gap-8 ">
             <h2 className={isDarkMode ? "!font-semibold !text-5xl text-white" : "text-black !font-semibold !text-5xl"}>Profile</h2>
             <div className="flex gap-5">
                <div  className="flex flex-col gap-6">
                    <h3 className="text-3xl !text-[#3730A3]">Profile</h3>
                    <div className="flex gap-8 w-[400px]">
                        <div className={isDarkMode ? "flex flex-col !gap-2 font-semibold text-white" : "text-black flex flex-col !gap-2 font-semibold"}>
                            <p>Birthday</p>
                            <p>Location</p>
                            <p>Education</p>
                            <p className="!mt-7">Role</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>12.01.2001</p>
                            <p>Kocaeli</p>
                            <p>Gaziosmanpasa University Physiotherapy 2023</p>
                            <p>Frontend</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-[650px]">
                     <h3 className="text-3xl !text-[#3730A3] ">About Me</h3>
                     <p className="font-light">After graduating from university, I worked as a physiotherapist for about a
year. Then I decided to get software training. I am currently receiving 6 months
of bootcamp in front end and back end at Workintech.</p>
                </div>
             </div>
             <br />
             <hr />
        </section>
    )
}