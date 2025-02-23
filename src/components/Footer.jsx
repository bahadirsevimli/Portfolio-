import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Footer (){

    const [isDarkMode, setIsDarkMode] = useState(() => {
            return JSON.parse(localStorage.getItem("darkMode")) || false;
          })
        
          useEffect(() => {
            localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
          }, [isDarkMode]);

    return(
        <footer className={isDarkMode? "flex justify-center bg-black" : "bg-[#f9f9f9] flex justify-center"}>
            <div className="w-[80%] flex flex-col gap-13 mt-13 mb-13">
                    <h2 className={ isDarkMode ? "font-semibold !text-5xl w-[45%] text-white" : "text-black font-semibold !text-5xl w-[45%]"}>Let's work together on your nexr product</h2>
                    <div className="flex justify-between">
                        <p className="text-red-700 underline tracking-wider cursor-pointer">bahadirsevimli@gmail.com</p>
                        <div className="flex gap-6 tracking-wider">
                            <Link to="/">
                                <p className="text-[#af0c48]">Personal Blog</p>
                            </Link>
                            <Link to="/">
                                <p className="text-[#01ab6b]">Github</p>
                            </Link>
                            <Link to="/">
                                <p className="text-[#0077b5]">Linkedin</p>
                            </Link>
                        </div>
                    </div>
            </div>
            <br />
        </footer>
    )
}