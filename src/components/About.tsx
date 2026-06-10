import { ContentTitle } from "./sub-components/ContentTitle"
import { HorizontalLine } from "./sub-components/HorizontalLine"

export const About = () => {
    return (
        <div className="w-full mt-7 h-fit pb-20">
            {/* Horizontal Line */}
            <HorizontalLine />

            {/* About Title */}
            <ContentTitle title="01 / About" text="The Story"/>
            
            <div className="flex flex-col lg:flex-row items-start justify-start gap-10 lg:gap-5 px-5 md:px-20 lg:px-40 mt-10 lg:mt-20">
                <div className="w-full lg:w-[40%]">
                    <h1 className="font-jetbrains text-4xl lg:text-5xl tracking-widest font-bold">Building things that</h1>
                    <span className="text-4xl lg:text-5xl text-[#004CFF] font-jetbrains tracking-widest font-bold italic">matter.</span>
                    <div className="flex justify-start gap-5">
                        <div className="w-[2px] h-15 mt-7 bg-[#BEBEBE] hidden sm:block"></div>
                        <div className="flex flex-col mt-7">
                            <h5 className="text-sm font-jetbrains text-[#BEBEBE]">SOFTWARE ENGINEERING UNDERGRADUATE</h5>
                            <h5 className="text-sm font-jetbrains text-[#BEBEBE]">FULL-STACK DEVELOPER</h5>
                            <h5 className="text-sm font-jetbrains text-[#BEBEBE]">CEO & CO-FOUNDER @ ROYAL CODEX SOFTWARE SOLUTIONS</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[60%] lg:pl-10">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-20 lg:mt-30 px-5 md:px-20 lg:px-40 gap-4 lg:gap-0">
                <div className="w-full flex flex-col justify-center border border-[#bebebe] py-10 lg:py-15 px-7 bg-linear-to-b from-white to-[#e6e6e6]">
                    <span className="text-5xl lg:text-6xl font-bold">5 <span className="text-3xl lg:text-4xl font-bold text-[#004CFF]">+</span></span>
                    <span className="text-sm font-jetbrains text-[#bebebe]">PROJECTS SHIPPED</span>
                </div>
                <div className="w-full flex flex-col justify-center border border-[#bebebe] py-10 lg:py-15 px-7">
                    <span className="text-5xl lg:text-6xl font-bold">2 <span className="text-3xl lg:text-4xl font-bold text-[#004CFF]">+</span></span>
                    <span className="text-sm font-jetbrains text-[#bebebe]">YEARS OF ENGINEERING EXPERIENCE</span>
                </div>
                <div className="w-full flex flex-col justify-center border border-[#bebebe] py-10 lg:py-15 px-7 bg-linear-to-b from-white to-[#e6e6e6]">
                    <span className="text-5xl lg:text-6xl font-bold">5 <span className="text-3xl lg:text-4xl font-bold text-[#004CFF]">+</span></span>
                    <span className="text-sm font-jetbrains text-[#bebebe]">TEAM MEMBERS LED</span>
                </div>
                <div className="w-full flex flex-col justify-center border border-[#bebebe] py-10 lg:py-15 px-7">
                    <span className="text-5xl lg:text-6xl font-bold">8 <span className="text-3xl lg:text-4xl font-bold text-[#004CFF]">+</span></span>
                    <span className="text-sm font-jetbrains text-[#bebebe]">TECHNOLOGIES USED</span>
                </div>
            </div>
        </div>
    )
}