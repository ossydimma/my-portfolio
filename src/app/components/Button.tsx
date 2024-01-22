import { ReactNode } from "react";

interface buttonType {
    href : string;
    text : string;
    styles : string
}
export const Button = ({href, text, styles} : buttonType) => {
  return (
    <div>
        <a
            href={href}
            download
            className= {`flex gap-1.5  items-center shadow-2xl   py-4 px-5 sm:px-6 sm:gap-3 ${styles}`} 
            >
            <div className="w-3 h-3 bg-black border-2 border-white rounded-full  sm:w-4 sm:h-4 "></div>
            <span className={` text-shadow text-white font-bold text-xs sm:text-[16px]`}>{text} </span>
        </a>

    </div>
  )
}
