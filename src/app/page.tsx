"use client";
import Image from 'next/image'
import Mypic from '@/app/assets/ositapp.jpg'
import   { Manrope, Bebas_Neue }  from "next/font/google";
import { useContext } from 'react';
import { ThemeColor } from './layout'
import clsx from "clsx";;
// import { bebasNeue } from './layout';

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const manrope = Manrope({subsets : ["latin"], weight : '700'})
export default function Home() {
  const {theme} = useContext(ThemeColor)


  return (
    <main className=" mx-[10px]  mt-[3vh] h-auto flex flex-col justify-between gap-16 items-center py-20 md:mx-[50px]  lg:py-0 lg:flex-row lg:h-[88vh] lg:gap-3 xl:mx-[108px]">
      <section className=' w-[90%] lg:w-[340px] xl:w-[544px] '>
        <h1 className={ clsx (` uppercase font-[400] text-[40px] leading-[40px] text-[#0a0a0a] sm:text-[70px] sm:leading-[70px] md:text-[90px] md:leading-[80px] xl:text-[101px] xl:leading-[90.9px]  ${bebasNeue.className}`, {
          'text-[#fff]' : theme === "dark-bg",
        })}>hi, i am osita&nbsp;jerry</h1>
        <p className={clsx(`font-[400] text-[15px]  text-[var(--dark-primary-color)] pb-[40px] xl:text-lg ${manrope.className}`, {
          'text-[#000000]' : theme === "light-bg"
        })}>A front-end developer, who is passionate about building accessible and user friendly websites.</p>
        <div className=' flex gap-2 sm:gap-4   bg-slate-600'>
          <button className={ `btn text-[10px] px-4 pr-1 pl-4 flex items-center gap-3 sm:text-[16px]  md:px-5 md:pr-1.5 md:pl-6 ${manrope.className}`}>contact me <div className=' w-2 h-2 mr-1.5  rounded-full bg-[#222] md:w-4 md:h-4 md:mr-3'></div></button>
          <div className=' icon bg-[#222] h-[54px] w-[54px] cursor-pointer rounded-full flex justify-center items-center ' >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M5.39825 7.79682C6.70735 7.79682 7.76858 6.73558 7.76858 5.42649C7.76858 4.11739 6.70735 3.05615 5.39825 3.05615C4.08915 3.05615 3.02792 4.11739 3.02792 5.42649C3.02792 6.73558 4.08915 7.79682 5.39825 7.79682Z" fill="#ffa500"/>
              <path d="M10.0068 9.59282V22.7434H14.0898V16.2402C14.0898 14.5242 14.4127 12.8623 16.5403 12.8623C18.6388 12.8623 18.6648 14.8242 18.6648 16.3485V22.7445H22.75V15.5327C22.75 11.9902 21.9873 9.26782 17.8468 9.26782C15.8589 9.26782 14.5264 10.3587 13.9815 11.3912H13.9263V9.59282H10.0068ZM3.35292 9.59282H7.4425V22.7434H3.35292V9.59282Z" fill="#ffa500"/>
            </svg>
          </div>
          <div className=' icon bg-[#222] h-[54px] w-[54px] cursor-pointer  rounded-full flex justify-center items-center ' >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
              < path fill-rule="evenodd" clip-rule="evenodd" d="M13.0282 2.16675C7.06008 2.16675 2.223 7.00383 2.223 12.9719C2.223 17.7451 5.31808 21.7957 9.61242 23.2257C10.153 23.3232 10.348 22.9906 10.348 22.7046C10.348 22.4478 10.3393 21.7675 10.3361 20.8673C7.32983 21.5194 6.695 19.4178 6.695 19.4178C6.20533 18.1698 5.49575 17.8372 5.49575 17.8372C4.51533 17.1666 5.5705 17.1818 5.5705 17.1818C6.656 17.2576 7.22475 18.2954 7.22475 18.2954C8.18892 19.9464 9.75542 19.4698 10.3686 19.1935C10.4672 18.4948 10.7488 18.0181 11.0565 17.7483C8.658 17.4764 6.136 16.5491 6.136 12.4075C6.136 11.2299 6.55742 10.2636 7.24533 9.50958C7.13592 9.2355 6.76217 8.13592 7.35258 6.64958C7.35258 6.64958 8.25933 6.35817 10.3231 7.75567C11.2045 7.51589 12.1137 7.3935 13.0271 7.39167C13.9405 7.39315 14.8498 7.51554 15.7311 7.75567C17.7959 6.35708 18.7016 6.64958 18.7016 6.64958C19.292 8.13592 18.9215 9.2355 18.8088 9.50958C19.5022 10.2636 19.9182 11.2288 19.9182 12.4075C19.9182 16.5599 17.394 17.4721 14.9868 17.7397C15.3714 18.0733 15.7181 18.732 15.7181 19.7395C15.7181 21.1847 15.7051 22.3503 15.7051 22.7046C15.7051 22.9938 15.8979 23.3297 16.4493 23.2235C20.7415 21.7913 23.8333 17.744 23.8333 12.9719C23.8333 7.00383 18.9963 2.16675 13.0282 2.16675Z" fill="#ffa500"/>
            </svg>
          </div>
        </div>
      </section>
      {/*fixme: make image look better */}
      <div className='relative h-[420px] w-[70%] sm:h-[520px] sm:w-[380px]  '>
        <Image src={Mypic} alt=' my picture' layout='fill'   objectFit='fill' className=' w-[100%] h-[100%] rounded-2xl'></Image>
      </div>
    </main>
  )
}
