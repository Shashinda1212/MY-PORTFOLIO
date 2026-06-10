export const ContentTitle = ({ title, text }: { title: string, text: string }) => {
    return (
        <div className="flex items-center justify-between gap-2 md:gap-5 px-5 md:px-20 lg:px-40 mt-10 md:mt-25">
            <span className="font-jetbrains text-xs md:text-sm tracking-wider text-[#BEBEBE] whitespace-nowrap">{title}</span>
            <div className="flex-1 h-px bg-[#BEBEBE] mx-2 md:mx-0"></div>
            <span className="font-jetbrains text-xs md:text-sm tracking-wider text-[#BEBEBE] whitespace-nowrap">{text}</span>
        </div>
    );
}