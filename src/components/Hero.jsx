import mainImg from '../assets/main-img.svg'
import hoverImg from '../assets/hover-img.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import StackIcon from 'tech-stack-icons'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger);


export const Hero = () => {

    const mainImgRef = useRef(null);
    const hoverImgRef = useRef(null);
    const heroRef = useRef(null);
    const imgWrapRef = useRef(null);
    const glowingRef = useRef(null);
    const topToBottomArrayRef = useRef([]);
    const bottomToTopArrayRef = useRef([]);


    const { contextSafe } = useGSAP({ scope: heroRef });

    const handleMouseMove = contextSafe((e) => {

        const rect = mainImgRef.current.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(hoverImgRef.current, {
            '--x': `${x}px`,
            '--y': `${y}px`,
            '--size': '180px',
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto'
        })

        gsap.to(glowingRef.current, {
            x: e.clientX - 150,
            y: e.clientY - 150,
            opacity: 1,
            duration: 0.2,
            ease: 'power2.out',
            overwrite: 'auto'
        })

    })

    const handleMouseLeave = () => {

        gsap.to(hoverImgRef.current, {
            '--x': '50%',
            '--y': '50%',
            '--size': '0px',
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto'
        })

        gsap.to(glowingRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: 'power2.out',
            overwrite: 'auto'
        })

    }

    useGSAP(() => {
// image loading animation
        gsap.from(imgWrapRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.in'
        })

        // top to bottom text animations
        gsap.from(topToBottomArrayRef.current,{
            
            y : -40,
            opacity: 0,
            duration : 1.2,
            ease: 'power2.out',
            stagger: 0.08
        })

        // buttom to top text animations
        gsap.from(bottomToTopArrayRef.current,{

            y: 40,
            duration : 1.2,
            opacity: 0,
            ease : 'power2.out',
            stagger: 0.08
        })

        // scroll trigger
        gsap.to(heroRef.current,{
            y : -100,
            opacity: 0,
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        })
    });

    const topToBottomRef = ((el) => {
        if (el && !topToBottomArrayRef.current.includes(el)) {
            topToBottomArrayRef.current.push(el)
        }
    });

    const bottomToTopRef = ((el) => {
        if(el && !bottomToTopArrayRef.current.includes(el)){
            bottomToTopArrayRef.current.push(el);
        }
    })

    return (
        <div>
            <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                ref={heroRef}
                className="min-h-screen w-full flex lg:flex-row flex-col justify-center items-end relative overflow-hidden">

                {/* Image container */}
                <div ref={imgWrapRef} className='relative w-full h-[98dvh]'>
                    <img
                        ref={mainImgRef}
                        src={mainImg}
                        alt=""
                        className='absolute h-dvh w-full left-1/2 -translate-x-1/2 bottom-0 pointer-events-none object-cover lg:object-fill' />
                    <img
                        ref={hoverImgRef}
                        src={hoverImg}
                        alt=""
                        className='absolute h-dvh w-full left-1/2 -translate-x-1/2 bottom-0 object-cover lg:object-fill'
                        style={{
                            "--x": '50%',
                            "--y": '50%',
                            "--size": "0px",
                            WebkitMaskImage: "radial-gradient(circle var(--size) at var(--x) var(--y), black 40%, transparent 100%)",
                            maskImage: "radial-gradient(circle var(--size) at var(--x) var(--y), black 40%, transparent 100%)",

                        }} />



                </div>

                {/*Cursor following Glowing div */}
                <div ref={glowingRef} className='absolute w-[300px] h-[300px] top-0 left-0 bg-blue-500 blur-[180px] mix-blend-screen rounded-full pointer-events-none opacity-0 hidden lg:block'></div>

                {/* Bottom Glowing DIV */}
                <div
                    className='absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent'></div>

                {/* hero content */}
                <div className='lg:absolute relative top-0 left-0 w-full h-full p-5 sm:p-10 md:p-20 lg:p-40 pt-32 lg:pt-0 lg:mt-30 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 overflow-y-auto lg:overflow-visible overflow-x-hidden no-scrollbar'>
                    <div className='flex flex-col items-center lg:items-start text-center lg:text-left z-10 lg:mt-20'>
                        <h1 ref={topToBottomRef} className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider'>Hey, I'm</h1>
                        <h1 ref={topToBottomRef} className='text-3xl md:text-4xl lg:text-5xl mt-2 lg:mt-3 bg-gradient-to-r from-black to-[#949494] text-transparent bg-clip-text w-fit'>Shashinda</h1>
                        <span ref={bottomToTopRef} className='text-xs md:text-sm mt-3 lg:mt-5 text-[#5F5F5F] w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]'>Software Engineering Undergraduate building scalable web applications, leading engineering teams, and shipping production-grade software.</span>
                        <button ref={bottomToTopRef} className='bg-black text-white py-3 md:py-4 px-7 mt-6 lg:mt-8 w-full sm:w-auto cursor-pointer hover:bg-gray-800 transition-colors'>View Work</button>
                        <div ref={bottomToTopRef} className='mt-6 lg:mt-8 flex justify-center lg:justify-start gap-5 lg:gap-7'>
                            <a href="#"><StackIcon name="github"  className='text-black cursor-pointer h-8 w-8 md:h-10 md:w-10'/></a>
                            <a href="#"><StackIcon name="github"  className='text-black cursor-pointer h-8 w-8 md:h-10 md:w-10'/></a>
                        </div>
                    </div>
                    <div className='pl-0 lg:pl-65 flex flex-col items-center lg:items-start text-center lg:text-left z-10 lg:mt-35'>
                        <h1 ref={topToBottomRef} className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider'>Full-Stack</h1>
                        <h1 ref={topToBottomRef} className='text-3xl md:text-4xl lg:text-5xl mt-2 lg:mt-3'>Web Developer</h1>
                        <button ref={bottomToTopRef} className='flex gap-3 items-center mt-6 lg:mt-8 bg-black py-2 md:py-3 px-6 md:px-10 cursor-pointer transition-colors'>
                            <div className='h-3 w-3 relative'>
                                <span className='w-full h-full rounded-full animate-ping absolute top-0 left-0 inline-flex bg-[#08FF39] opacity-75'></span>
                                <span className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 inline-flex h-2 w-2 rounded-full bg-[#08FF39]'></span>
                            </div>
                            <span className='text-white text-sm md:text-base'>Available for work</span>
                        </button>
                    </div>
                </div>
            </div> 
        </div>
    )

}