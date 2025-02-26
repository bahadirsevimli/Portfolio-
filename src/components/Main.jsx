
import { Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { useDarkMode } from "../context/DarkModeContext";




export default function Main () {

    const { isDarkMode } = useDarkMode();
    const { data } = useFetchData();

    return(

        <main className="flex sm:flex-row flex-col sm:gap-0 gap-4 justify-between">
            <div className="flex flex-col gap-10 sm:w-[600px] w-[320px] tracking-wide">
                <div className="text-[#3730A3]"><p>{ data && data.mainSection.name}</p></div>
                <div><h1 className={`!font-bold ${isDarkMode ? "text-white" : "text-black"} sm:!text-7xl !text-4xl`}>{data && data.mainSection.banner}</h1></div>
                <div><p>{ data && data.mainSection.intro}</p></div>
                <div className="sm:ml-0  flex !gap-5 sm:text-lg text-sm">
                    <Link to={ data && data.mainSection.buttons.hireMeUrl}>
                        <div className="text-white bg-[#3730A3] sm:!pt-3 sm:!pb-3 sm:pr-6 sm:pl-6 pt-2 pb-2 pr-2 pl-2 rounded-md">{ data && data.mainSection.buttons.hireMe}</div>
                    </Link>
                    <Link to={ data && data.mainSection.buttons.githubUrl}>
                        <div className="text-[#3730A3] border-[#3730A3] border-1 sm:!pt-3 sm:!pb-3 sm:pr-6 sm:pl-6 pt-2 pb-2 pr-2 pl-2 rounded-md">{ data && data.mainSection.buttons.github}</div>
                    </Link>
                    <Link to={ data && data.mainSection.buttons.linkedinUrl}>
                        <div className="text-[#3730A3] border-[#3730A3] border-1 sm:!pt-3 sm:!pb-3 sm:pr-6 sm:pl-6 pt-2 pb-2 pr-2 pl-2 rounded-md">{ data && data.mainSection.buttons.linkedin}</div>
                    </Link>
                </div>
            </div>
            <div>
                <img className="rounded-3xl sm:!w-100 w-60 shadow-xl" src={data && data.mainSection.profilePhotoUrl} alt="profile photo" />
            </div>
        </main>
    )
}