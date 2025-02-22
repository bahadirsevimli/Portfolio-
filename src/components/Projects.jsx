import { Link } from "react-router-dom";



export default function Projects() {


    return(
        <section className="flex flex-col gap-7">
            <h2 className="text-black font-semibold text-5xl">Projects</h2>
            <div className="flex justify-between">
                
                <div className="flex w-xs">
                    <div className="flex flex-col gap-3">
                        <img src="/assets/images/WitFlixProject.png" alt="Witflix" />
                        <h3 className="text-3xl text-[#3730A3]">WitFlix</h3>
                        <p className="text-xs">A simple, minimal and responsive design Netflix user interface. This was created with vite, CSS, React.</p>
                        <div className="flex gap-2 text-[#3730A3] text-sm">
                            <div className="border-1 border-[#3730A3] pb-1 pt-1 pl-3 pr-3 rounded-md">react</div>
                            <div className="border-1 border-[#3730A3] pb-1 pt-1 pl-3 pr-3 rounded-md">redux</div>
                            <div className="border-1 border-[#3730A3] pb-1 pt-1 pl-3 pr-3 rounded-md">axios</div>
                        </div>
                        <div className="flex justify-between text-[#3730A3] underline text-sm">
                            <Link to="https://github.com/bahadirsevimli/WitFlix-react">
                                <div>Github</div>
                            </Link>
                            <Link to="https://witflixx.netlify.app/">
                                <div>View Site</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex w-xs">
                    <div className="flex flex-col gap-3">
                        <img src="/assets/images/WitFlixProject.png" alt="Witflix" />
                        <h3 className="text-3xl text-[#3730A3]">WitFlix</h3>
                        <p className="text-xs">A simple, minimal and responsive design Netflix user interface. This was created with vite, CSS, React.</p>
                        <div className="flex gap-2 text-[#3730A3] text-sm">
                            <div className="border-1 border-[#3730A3] pb-1 pt-1 pl-3 pr-3 rounded-md">react</div>
                            <div className="border-1 border-[#3730A3] pb-1 pt-1 pl-3 pr-3 rounded-md">redux</div>
                            <div className="border-1 border-[#3730A3] pb-1 pt-1 pl-3 pr-3 rounded-md">axios</div>
                        </div>
                        <div className="flex justify-between text-[#3730A3] underline text-sm">
                            <Link to="https://github.com/bahadirsevimli/WitFlix-react">
                                <div>Github</div>
                            </Link>
                            <Link to="https://witflixx.netlify.app/">
                                <div>View Site</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex w-xs">
                    <div className="flex flex-col gap-3">
                        <img src="/assets/images/WitFlixProject.png" alt="Witflix" />
                        <h3 className="text-3xl text-[#3730A3]">WitFlix</h3>
                        <p className="text-xs">A simple, minimal and responsive design Netflix user interface. This was created with vite, CSS, React.</p>
                        <div className="flex gap-2 text-[#3730A3] text-sm">
                            <div className="border-1 border-[#3730A3] pb-1 pt-1 pl-3 pr-3 rounded-md">react</div>
                            <div className="border-1 border-[#3730A3] pb-1 pt-1 pl-3 pr-3 rounded-md">redux</div>
                            <div className="border-1 border-[#3730A3] pb-1 pt-1 pl-3 pr-3 rounded-md">axios</div>
                        </div>
                        <div className="flex justify-between text-[#3730A3] underline text-sm">
                            <Link to="https://github.com/bahadirsevimli/WitFlix-react">
                                <div>Github</div>
                            </Link>
                            <Link to="https://witflixx.netlify.app/">
                                <div>View Site</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            
        </section>
    )
}