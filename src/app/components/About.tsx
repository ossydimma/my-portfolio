"use client"
import Link from "next/link";
import { ReactNode, useState } from "react"
import { Medias } from "./Medias";



interface btnType {
    text : string;
    href : string;
    medias : string | ReactNode;
    styles : string;
}



 export const About = ({text , href, medias, styles}: btnType)=> {
   
    return (
        <> 
            <main className="pt-14  border-b-2 border-[#484848]">

                <section className=" flex flex-col mb-16 mx-4 justify-between gap-1  sm:mx-9  lg:gap-[15%]  lg:flex-row">
                    <h1 className={` rev-heading-txt uppercase font-[400] text-[40px]  leading-[42px]  text-[#0a0a0a]  sm:text-[57px] sm:leading-[58px] md:text-[65px] md:leading-[65px] xl:text-[80px] xl:leading-[90px] dark:text-[#fff] `}>about&nbsp;me</h1>
                    <div className="mt-3">

                        <h3 className={`pb-3 font-semibold  uppercase  text-[#000] text-xl sm:text-2xl  md:text-3xl   xl:text-4xl dark:text-white`}>I am Osita Jerry, a&nbsp;front-&nbsp;end&nbsp;developer. <br/> Has a bussiness Background.</h3>
                        <p className={`  text-[#222] text-lg tracking-wide pb-5  md:text-xl md:tracking-wider dark:text-[#c7c7c7] `}>I am front-end developer that love the challenge of solving complex problems and creating beautiful, functional websites. Committed to continuous learning, I aspire to leverage my competencies in this feild to eventually build my career.</p>
                    </div>
                </section>
                <div className={` mb-20 flex items-end gap-5 justify-end mr-[5%] ${styles}   `}>
                    <Link href={href}             
                        className={` px-8 py-4  uppercase shadow-2xl font-bold bg-gradient-to-l from-[#8F00FF] to-black   rounded-tl-none rounded-br-none  rounded-[200px]  text-white  flex items-center gap-3 border-[2px] border-[#222]  dark:border-[#c7c7c7] text-[16px]   }`}
                    >
                        {text}
                        
                    </Link>
                    {medias}
                </div>
            </main>
        </>
    )
 }