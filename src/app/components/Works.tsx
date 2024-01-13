import clsx from "clsx"
import { useContext } from "react";
import { ThemeColor } from "../layout";
import { Manrope, Bebas_Neue } from "next/font/google";
import Image from "next/image";
import SneakerImg from '@/app/assets/sneaker_img.jpg'


const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"], weight: "700" });



export const Works = () => {
  const { theme } = useContext(ThemeColor);

    return (
      <main className="border-y-2 border-[#484848] h-auto ">
        {/* <div className="container    my-20 w-[100%]">

            <header className=" w-[600px] ml-[108px]  mb-20">
                <h1 className={clsx(" uppercase text-[76px] font-[400] text-[#0a0a0a]", bebasNeue.className, {
                    "text-[#fff]": theme === "dark-bg",
                })}>Featured Projects</h1>
                <p className={` para-full-screen -mt-5 ${manrope}`}>Here are some of the selected projects that showcase my passion for front-end development.</p>
            </header>
            <section className={`w-[900px] min-w-[1000px] ml-[15%]  pb-[120px]  flex justify-center items-center gap-[10%]  `}>
                <div className={` w-[40%] min-w-[50%]  h-[400px] rounded-xl bg-[#1A1A1A] flex justify-center items-center`}>
                    <Image 
                        src={SneakerImg}
                        alt=" sneakers"
                        width={400}
                        height={347}
                        className=" border-black border-2 rounded-xl"
                    />
                </div>
                <div className={`  w-[30%] min-w-[520px] bg-slate-500`}>
                    <h3>E-commerce product page</h3>
                    <p>Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.</p>
                    <h4>Project Info</h4>
                </div>
            </section>
        </div> */}
  
      </main>
    )
  }