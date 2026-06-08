export const ContentTitle = ({ title, text }: { title: string, text: string }) => {
    return (
        <div className="flex items-center justify-between gap-5 px-40 mt-25">
            <span className="font-jetbrains text-sm tracking-wider text-[#BEBEBE]">{title}</span>
            <div className="w-[75%] h-px bg-[#BEBEBE]"></div>
            <span className="font-jetbrains text-sm tracking-wider text-[#BEBEBE]">{text}</span>
        </div>
    );
}