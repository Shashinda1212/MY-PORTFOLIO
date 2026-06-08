import { ContentTitle } from "./sub-components/ContentTitle"

export const About = () => {
    return (
        <div className="h-dvh w-full mt-7">
            {/* Horizontal Line */}
            <div className="flex items-center justify-center">
                <div className="w-[80%] h-px bg-gray-900"></div>
            </div>

            {/* About Title */}
            <ContentTitle title="01 / About" text="The Story"/>
            
            <div className="flex items-start justify-start gap-5 px-40 mt-20">
                <div className="w-[40%]">
                    <h1 className="font-jetbrains text-5xl tracking-widest font-bold">Building things that</h1>
                    <span className="text-5xl text-[#004CFF] font-jetbrains tracking-widest font-bold italic">matter.</span>
                    <div className="flex justify-start  gap-5">
                        <div className="w-[2px] h-15 mt-7 bg-[#BEBEBE]"></div>
                        <div className="flex flex-col mt-7">
                            <h5 className="text-sm font-jetbrains text-[#BEBEBE]">SOFTWARE ENGINEERING UNDERGRADUATE</h5>
                            <h5 className="text-sm font-jetbrains text-[#BEBEBE]">FULL-STACK DEVELOPER</h5>
                            <h5 className="text-sm font-jetbrains text-[#BEBEBE]">CEO & CO-FOUNDER @ ROYAL CODEX SOFTWARE SOLUTIONS</h5>
                        </div>
                    </div>
                </div>
                <div className="w-[60%] pl-10">
                    <p className="font-jetbrains text-sm">I'm an undergraduate Software Engineering student with a deep passion for building full-stack web applications
                        that solve real problems. My journey started with curiosity about how the web works — and quickly evolved into a relentless pursuit
                        of engineering excellence.</p>
                    <p className="font-jetbrains text-[#5F5F5F] text-sm mt-5">From architecting React frontends with Vite to deploying containerised backends with Docker and Firebase, I
                        approach every project with the same principle: clean code, thoughtful architecture, and a relentless focus on
                        the user experience.</p>
                    <p className="font-jetbrains text-[#5F5F5F] text-sm mt-5">Beyond writing code, as the CEO of Royal Codex Software Solutions, I lead dynamic engineering teams, coordinating
                        sprints, reviewing pull requests, and driving product vision. I believe great software is built by great teams,
                        and great teams are built on trust, clarity, and craft.</p>

                </div>
            </div>
        </div>
    )
}