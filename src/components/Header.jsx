import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const Header = () => {

    const navList = ['About', 'Stack', 'Projects', 'Contact'];

    const navRef = useRef(null);

    useGSAP(() =>{

        gsap.from(navRef.current,{
            y: -30,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        })

    });

    return (
        <div className="flex justify-center items-center fixed top-4 md:top-8 z-30 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto max-w-md sm:max-w-none">
            <div ref={navRef} className="flex justify-evenly sm:justify-center items-center rounded-full bg-gray-100/95 backdrop-blur-sm w-full sm:w-auto shadow-md sm:shadow-none p-1 sm:p-0">
                {
                    navList.map((item, index) => {

                        return (
                            <button
                                key={index}
                                className="text-gray-600 font-medium text-xs sm:text-sm cursor-pointer py-2 md:py-[8px] px-3 sm:px-8 md:px-12 lg:px-15 rounded-full
                                hover:text-gray-900 hover:bg-gray-300/50 transition-all duration-300 flex-1 sm:flex-none whitespace-nowrap">{item}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}