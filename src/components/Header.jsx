
import { Link } from "react-router-dom";
export default function Header(){


    return(
    <div className="flex flex-col gap-10">
        <div className="flex justify-end tracking-widest font-semibold text-sm">
            <div>DARK MODE | <span className="text-[#3730A3]">TÜRKÇE</span>'YE GEÇ</div>
        </div>
        <div className="flex justify-between">
            <div className="w-15 h-15 bg-[#edebff] text-[#3730A3] text-3xl rounded-full pl-5 pt-3 transform-[rotate(30deg)] "><span className="opacity-70">B</span></div>
            <nav className="flex gap-25 font-normal">
                <Link to="/">
                     <div className="p-3">Skills</div>
                </Link>
                <Link to="/">
                     <div className="p-3">Projects</div>
                </Link>
                <Link to="/">
                     <div className="border-1 border-[#3730A3] text-[#3730A3] p-3 pr-10 pl-10 rounded-xl ">Hire me</div>
                </Link>
                
                
                
               
            </nav>
        </div>
    </div>
    )
}