import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";


export default function Footer (){

    const [isDarkMode, setIsDarkMode] = useState(() => {
            return JSON.parse(localStorage.getItem("darkMode")) || false;
          })
        
          useEffect(() => {
            localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
          }, [isDarkMode]);

          const { data } = useFetchData(); 

    return(
        <footer className={isDarkMode? "flex justify-center bg-black" : "bg-[#f9f9f9] flex justify-center"}>
            <div className="w-[80%] flex flex-col gap-13 mt-13 mb-13">
                    <h2 className={ isDarkMode ? "font-semibold !text-5xl w-[45%] text-white" : "text-black font-semibold !text-5xl w-[45%]"}>{ data && data.footerSection.banner}</h2>
                    <div className="flex justify-between">
                        <Link to={ data && data.footerSection.emailClickUrl}>
                             <p className="text-red-700 underline tracking-wider cursor-pointer">{ data && data.footerSection.email}</p>
                        </Link>
                        <div className="flex gap-6 tracking-wider">
                            <Link to="/">
                                <p className="text-[#af0c48]">{ data && data.footerSection.buttons.personalBlog}</p>
                            </Link>
                            <Link to={ data && data.footerSection.buttons.githubUrl}>
                                <p className="text-[#01ab6b]">{ data && data.footerSection.buttons.github}</p>
                            </Link>
                            <Link to={ data && data.footerSection.buttons.linkedinUrl}>
                                <p className="text-[#0077b5]">{ data && data.footerSection.buttons.linkedin}</p>
                            </Link>
                        </div>
                    </div>
            </div>
            <br />
        </footer>
    )
}