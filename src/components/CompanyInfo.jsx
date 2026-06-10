import { ArrowUpRight } from "lucide-react"

export const CompanyInfo = () => {

    return(
        <div className="w-full mt-16 md:mt-50 bg-black py-10 px-5 md:py-30 md:px-20 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
            <div className="text-center md:text-left">
                <span className="font-jetbrains text-sm italic text-white">CO-FOUNDER & CEO</span>
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-jetbrains tracking-wider mt-2 md:mt-0">ROYAL CODEX SOFTWARE SOLUTIONS</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
                <div className="hidden md:block w-1 h-30 bg-[#bebebe]"></div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-sm font-jetbrains text-[#d3d3d3]">Delivering scalable enterprise software and digital experiences</span>
                    <button className="font-black bg-white rounded py-3 px-8 md:px-10 mt-5 font-jetbrains flex items-center gap-2 md:gap-5 cursor-pointer active:translate-x-1 active:translate-y-1">Visit Website <ArrowUpRight /></button>
                </div>
            </div>
        </div>
    );

}