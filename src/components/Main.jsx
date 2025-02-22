import { Link } from "react-router-dom";




export default function Main () {


    return(

        <main className="flex justify-between">
            <div className="flex flex-col gap-10 w-[600px] tracking-wide">
                <div className="text-[#3730A3]"><p>Bahadir Sevimli</p></div>
                <div><h1 className="text-black font-bold text-7xl ">Creative thinker Minimalism lover</h1></div>
                <div><p>Hi, I'm Bahadir. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.</p></div>
                <div className="flex gap-5">
                    <Link to="/">
                        <div className="text-white bg-[#3730A3] pt-3 pb-3 pr-6 pl-6 rounded-md">Hire me</div>
                    </Link>
                    <Link to="https://github.com/bahadirsevimli">
                        <div className="text-[#3730A3] border-[#3730A3] border-1 pt-3 pb-3 pr-6 pl-6 rounded-md">Github</div>
                    </Link>
                    <Link to="https://www.linkedin.com/in/bahadirsevimli/">
                        <div className="text-[#3730A3] border-[#3730A3] border-1 pt-3 pb-3 pr-6 pl-6 rounded-md">Linkedin</div>
                    </Link>
                </div>
            </div>
            <div className="p-7">
                <img className="rounded-3xl w-100 shadow-xl" src="/assets/images/profile.jpeg" alt="profile photo" />
            </div>
        </main>
    )
}