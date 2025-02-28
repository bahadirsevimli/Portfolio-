
import { Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { useDarkMode } from "../context/DarkModeContext";


export default function Footer (){
    const { isDarkMode } = useDarkMode();
    const { data } = useFetchData(); 

    return(
        <footer className={isDarkMode? "flex justify-center bg-black" : "bg-[#f9f9f9] flex justify-center"}>
            <div className="w-[80%] flex flex-col gap-13 mt-13 mb-13">
                    <h2 className={` font-semibold sm:w-[45%] w-full ${isDarkMode ? "text-white" : "text-black"} sm:!text-5xl !text-3xl`}>{ data && data.footerSection.banner}</h2>
                  
                    <div className="flex sm:flex-row flex-col justify-between">
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