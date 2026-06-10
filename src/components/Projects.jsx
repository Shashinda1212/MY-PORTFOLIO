import { HorizontalLine } from "./sub-components/HorizontalLine"
import { ContentTitle } from "./sub-components/ContentTitle"
import car from '../assets/car.jpg';
import { ArrowUpRight } from 'lucide-react';

export const Projects = () => {

    return(
        <div className="mt-30">
            {/* Horizontal Line */}
            <HorizontalLine />

            {/* Project Title */}
            <ContentTitle title="04 / Projects" text="The Work" />

            <div className="px-5 md:px-20 lg:px-40 mt-10">
                <h1 className="text-3xl md:text-5xl font-jetbrains">Selected</h1>
                <h1 className="text-3xl md:text-5xl font-caveat text-[#5f5f5f]">Projects</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
                    <div className="w-full h-fit pr-10">
                        <img src={car} alt="" className="w-full"/>
                    </div>
                    <div className="w-full h-fit pl-10">
                        <h1 className="text-4xl lg:text-5xl font-jetbrains tracking-wider">Rc point of sale system</h1>
                        <h2 className="text-lg lg:text-xl font-jetbrains text-[#5f5f5f] mt-5">A full-featured Point-of-Sale system with real-time inventory management, sales analytics, multi-user roles, and receipt generation. Built for retail environments.</h2>
                        <div className="flex items-center justify-start mt-5 gap-3">
                            <button className=" flex items-center justify-center gap-5 text-white bg-black py-3 px-15 rounded font-jetbrains cursor-pointer active:translate-x-1 active:translate-y-1">View Project <ArrowUpRight/></button>
                            <button className="border border-black py-3 px-15 rounded font-jetbrains cursor-pointer">Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}