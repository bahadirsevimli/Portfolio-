export default function SkillsSection(){



    return(
        <section className="flex flex-col gap-7">
            <h2 className="text-black font-semibold text-5xl">Skills</h2>
            <div className="flex justify-between gap-30">
                <div className="flex flex-col gap-6">
                    <h3 className="text-3xl text-[#3730A3]">Java Script</h3>
                    <p className="text-xs">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="text-3xl text-[#3730A3]">React.Js</h3>
                    <p className="text-xs">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="text-3xl text-[#3730A3]">Node.js</h3>
                    <p className="text-xs">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
              
            </div>
            <br />
            <hr />
        </section>  
    )
}