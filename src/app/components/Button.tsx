import { ReactNode } from "react";

interface buttonType {
    href : string;
    text : string;
    div : ReactNode | string
    styles : string
}
export const Button = ({href, text, div, styles} : buttonType) => {
  return (
    <div>
        <a
            href={href}
            download
            className= {`flex  gap-3 items-center shadow-2xl   py-4 px-5 sm:px-6  ${styles}`} 
            >
            {div}
            <span className={` text-shadow text-white font-bold text-[10px] sm:text-[16px]`}>{text} </span>
        </a>

    </div>
  )
}
