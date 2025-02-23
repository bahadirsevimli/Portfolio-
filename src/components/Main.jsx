import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";




export default function Main () {

     const [isDarkMode, setIsDarkMode] = useState(() => {
        return JSON.parse(localStorage.getItem("darkMode")) || false;
      })
    
      useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
      }, [isDarkMode]);

      const { data } = useFetchData();

    return(

        <main className="flex justify-between">
            <div className="flex flex-col gap-10 w-[600px] tracking-wide">
                <div className="text-[#3730A3]"><p>{ data && data.mainSection.name}</p></div>
                <div><h1 className={isDarkMode ? "text-white !font-bold !text-7xl " : "text-black !font-bold !text-7xl "}>{ data && data.mainSection.banner}</h1></div>
                <div><p>{ data && data.mainSection.intro}</p></div>
                <div className="flex !gap-5">
                    <Link to={ data && data.mainSection.buttons.hireMeUrl}>
                        <div className="text-white bg-[#3730A3] !pt-3 !pb-3 pr-6 pl-6 rounded-md">{ data && data.mainSection.buttons.hireMe}</div>
                    </Link>
                    <Link to={ data && data.mainSection.buttons.githubUrl}>
                        <div className="text-[#3730A3] border-[#3730A3] border-1 !pt-3 !pb-3 pr-6 pl-6 rounded-md">{ data && data.mainSection.buttons.github}</div>
                    </Link>
                    <Link to={ data && data.mainSection.buttons.linkedinUrl}>
                        <div className="text-[#3730A3] border-[#3730A3] border-1 !pt-3 !pb-3 pr-6 pl-6 rounded-md">{ data && data.mainSection.buttons.linkedin}</div>
                    </Link>
                </div>
            </div>
            <div className="p-7">
                <img className="rounded-3xl !w-100 shadow-xl" src="/assets/images/profile.jpeg" alt="profile photo" />
            </div>
        </main>
    )
}