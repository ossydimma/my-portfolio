
import { SpaceGrotesk, manrope, bebasNeue} from "../page";


 export const About = ()=> {
    return (
        <>
        <div className=" flex flex-col border-b-2 border-[#484848] justify-between gap-10 pt-16 pb-44 px-[5%] lg:gap-[15%] lg:pt-24 lg:flex-row">
            <h1 className={` rev-heading-txt uppercase font-[400] text-[40px]  leading-[42px]  text-[#0a0a0a]  sm:text-[57px] sm:leading-[58px] md:text-[65px] md:leading-[65px] xl:text-[80px] xl:leading-[90px] dark:text-[#fff] ${SpaceGrotesk.className}`}>about&nbsp;me</h1>
            <div className="mt-3">

                <h3 className={`pb-2 font-semibold  text-[#000] text-2xl sm:text-3xl  md:text-4xl lg:text-5xl dark:text-white ${bebasNeue.className}`}>i am Osita Jerry, a&nbsp;front-&nbsp;end&nbsp;developer. <br/> Has a bussiness Background.</h3>
                <p className={`  text-[#222] text-lg  tracking-wide pb-8  md:text-2xl md:tracking-wider dark:text-[#c7c7c7]  ${manrope.className}`}>I am front-end developer that love the challenge of solving complex problems and creating beautiful, functional websites. Committed to continuous learning, I aspire to leverage my competencies in this feild to eventually build my career.</p>
                <a href="/" className={`uppercase text-[#00FDEE]  pb-3 underline transition-all duration-500 text-sm md:text-lg lg:text-xl  hover:opacity-50 hover:scale-110 dark:text-[#bb88e2] ${manrope.className}`} >more about me</a>
            </div>
        </div>
        </>
    )
 }