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

        <div  className="flex justify-center items-center fixed top-8 z-30 left-1/2 -translate-x-1/2">
            <div ref={navRef} className="flex justify-center items-cente rounded-full bg-gray-100">
                {
                    navList.map((item, index) => {

                        return (
                            <button
                                key={index}
                                className="text-gray-500 text-sm cursor-pointer py-[8px] px-15 rounded-full
                                hover:text-gray-700 hover:bg-gray-500/20 backdrop-blur-md transition-all duration-400">{item}</button>
                        )
                    })
                }
            </div>
        </div>

    )
}