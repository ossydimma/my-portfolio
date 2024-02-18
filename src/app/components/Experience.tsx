import { ReactNode } from "react";

interface experienceType {
  title: string;
  date: string;
  descript: string | ReactNode;
  company  : string
}
export const Experience = ({ title, date, descript, company }: experienceType) => {
  return (
    <article className="text-[#000]  dark:text-[#fff]" >
      <div className=" flex justify-between items-center">
        <h3 className=" text-lg sm:text-2xl font-[500]">{title}</h3>
        <span className="text-xs sm:text-[15px]">{date}</span>
      </div>
      <p className="pb-2 pl-1">{company}</p>
      <div className=" mb-4 tracking-normal text-sm pl-5 pt-2 text-[#222] dark:text-[#c7c7c7] sm:text-lg sm:tracking-wide">
        {descript}
      </div>
    </article>
  );
};
