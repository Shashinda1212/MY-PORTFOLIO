import { HorizontalLine } from "./sub-components/HorizontalLine"
import { ContentTitle } from "./sub-components/ContentTitle"
import aws from '../assets/tech-stack-icons/aws.png';
import css from '../assets/tech-stack-icons/css.png';
import docker from '../assets/tech-stack-icons/docker.png';
import expressjs from '../assets/tech-stack-icons/expressjs.png';
import figma from '../assets/tech-stack-icons/figma.png';
import firebase from '../assets/tech-stack-icons/firebase.png';
import git from '../assets/tech-stack-icons/git.png';
import githubcopilot from '../assets/tech-stack-icons/githubcopilot.png';
import github from '../assets/tech-stack-icons/github.png';
import html5 from '../assets/tech-stack-icons/html5.png';
import linux from '../assets/tech-stack-icons/linux.png';
import mongoDB from '../assets/tech-stack-icons/mongodb.png';
import nginx from '../assets/tech-stack-icons/nginx.png';
import nodejs from '../assets/tech-stack-icons/nodejs.png';
import postman from '../assets/tech-stack-icons/postman.png';
import react from '../assets/tech-stack-icons/react.png';
import restapi from '../assets/tech-stack-icons/restapi.png';
import tailwindcss from '../assets/tech-stack-icons/tailwindcss.png';
import visualstudio from '../assets/tech-stack-icons/visualstudio.png';
import vite from '../assets/tech-stack-icons/vite.png';


export const Stack = () => {

    const frontend = [html5, css, tailwindcss, react, vite];
    const backend = [nodejs, expressjs, mongoDB, restapi, firebase];
    const tools = [aws, docker, figma, git, githubcopilot, github, linux, nginx, postman, visualstudio];

    return (
        <div className="w-full mt-20 md:mt-30">
            {/* Horizontal Line */}
            <HorizontalLine />

            {/* Stack Title */}
            <ContentTitle title="03 / Tech Stack" text="The Arsenal" />

            {/* Stack Container */}
            <div className="w-full h-fit py-10 md:py-25 mt-10 md:mt-25 bg-[#F5F5F7]">
                <div className="px-5 md:px-20 lg:px-40">
                    <h1 className="text-3xl md:text-5xl font-jetbrains">The tools I reach</h1>
                    <h1 className="text-3xl md:text-5xl font-caveat text-[#5F5F5F]">for every single day.</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 md:mt-20">
                        <div className="flex flex-col items-start">
                            <span className="text-sm font-jetbrains pl-2 md:pl-5">--- FRONTEND</span>
                            <div className="w-full h-fit py-5 px-4 rounded-2xl mt-5 bg-linear-to-b from-white to-[#DADADA] flex flex-wrap justify-center items-center gap-5 md:gap-10">
                                {
                                    frontend.map((icon, index) => {
                                        return(
                                            <img key={index} src={icon} alt="" className="w-12 h-12 md:w-15 md:h-15"/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-sm font-jetbrains pl-2 md:pl-5">--- BACKEND</span>
                            <div className="w-full h-fit py-5 px-4 rounded-2xl mt-5 bg-linear-to-b from-white to-[#DADADA] flex flex-wrap justify-center items-center gap-5 md:gap-10">
                                {
                                    backend.map((icon, index) => {
                                        return(
                                            <img key={index} src={icon} alt="" className="w-12 h-12 md:w-15 md:h-15"/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 mt-10">
                        <div className="flex flex-col items-start">
                            <span className="text-sm font-jetbrains pl-2 md:pl-5">--- DEVOPS & TOOLS</span>
                            <div className="w-full h-fit py-5 px-4 rounded-2xl mt-5 bg-linear-to-b from-white to-[#DADADA] flex flex-wrap justify-center items-center gap-4 md:gap-13">
                                {
                                    tools.map((icon, index) => {
                                        return(
                                            <img key={index} src={icon} alt="" className="w-12 h-12 md:w-15 md:h-15"/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-start items-center gap-3 mt-10 md:pl-5">
                        <h1 className="text-sm font-jetbrains">Always learning ---&gt;</h1>
                        <button className="py-1 px-4 md:px-5 bg-white text-sm">three.js</button>
                        <button className="py-1 px-4 md:px-5 bg-white text-sm">gsap</button>
                    </div>
                </div>
            </div>
        </div>
    )

}