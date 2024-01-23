import { About } from "../components/About"
import { Medias } from "../components/Medias"
import { Bebas_Neue} from "next/font/google";
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

const page = () => {
    
  return (
    <div className=" mt-[12vh] pb-20 flex flex-col gap-20">
      <About
        text="view resume"
        href="/Resume.pdf"
        medias={ <Medias />}
        styles="justify-center"
      />
      <div className="border-y-2 border-[#484848] py-[70px] lg:py-24">

        <section className=" flex justify-between items-center gap-14 flex-col  mx-[5%]  lg:flex-row  lg:gap-0 lg:items-start">
          <h1  className={`heading-txt text-center  uppercase font-[700] text-[#0a0a0a]  text-3xl lg:text-5xl  lg:text-left  dark:text-[#fff] `}>My Capabilities</h1>
          <div className=" w-[95%] lg:w-[50%] flex flex-col-reverse gap-12  ">
            <p className={`text-lg md:text-2xl text-[#000] text-center dark:text-[#fff] lg:text-left `}>I am always looking to add more skills.</p>
            <div className=" flex items-center justify-center flex-wrap gap-3 text-[#0a0a0a] text-sm md:text-lg dark:text-[#fff]  xl:justify-start ">
              <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">HTML</p>
              <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">CSS</p>
              <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">JAVASCRIPT</p>
              <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">REACT</p>
              <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">TAILWIND CSS</p>
              <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">SASS</p>
              <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">TYPESCRIPT</p>
              <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">NEXT JS</p>
              <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">GIT</p>

            </div>
          </div>
        </section>
      </div> 
    </div>
  )
}

export default page
  