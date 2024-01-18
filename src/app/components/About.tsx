import { Manrope, Bebas_Neue, Space_Grotesk } from "next/font/google";



const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"], weight: "700" });
const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });


 export const About = ()=> {
    return (
        <>
        <div className=" flex flex-col border-b-2 border-[#484848] px-[8%] justify-between gap-1 pt-14 pb-44 Lg:px-[5%]  lg:gap-[15%] lg:pt-24 lg:flex-row">
            <h1 className={` rev-heading-txt uppercase font-[400] text-[40px]  leading-[42px]  text-[#0a0a0a]  sm:text-[57px] sm:leading-[58px] md:text-[65px] md:leading-[65px] xl:text-[80px] xl:leading-[90px] dark:text-[#fff] ${SpaceGrotesk.className}`}>about&nbsp;me</h1>
            <div className="mt-3">

                <h3 className={`pb-3 font-semibold  uppercase  text-[#000] text-xl sm:text-2xl  md:text-3xl   xl:text-4xl dark:text-white ${SpaceGrotesk.className}`}>I am Osita Jerry, a&nbsp;front-&nbsp;end&nbsp;developer. <br/> Has a bussiness Background.</h3>
                <p className={`  text-[#222] text-lg tracking-wide pb-5  md:text-xl md:tracking-wider dark:text-[#c7c7c7]  ${SpaceGrotesk.className}`}>I am front-end developer that love the challenge of solving complex problems and creating beautiful, functional websites. Committed to continuous learning, I aspire to leverage my competencies in this feild to eventually build my career.</p>
                <a href="/" className={`uppercase text-[#00FDEE]   underline transition-all duration-500 text-xs md:text-lg lg:text-sm  hover:opacity-50 hover:scale-110 dark:text-[#bb88e2] ${manrope.className}`} >more about me</a>
            </div>
        </div>
        </>
    )
 }