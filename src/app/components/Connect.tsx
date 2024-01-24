"use client"
import { useState , useRef, ReactNode} from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { Medias } from "./Medias";
import { Button } from "./Button";

interface mailType {
  email : string;
  name : string;
  message : string
  btn : string | ReactNode
}

export const Connect = () => {

  const form = useRef<null |  HTMLFormElement >(null); 

  const [mail, setMail] = useState<mailType>({
    email : "",
    name : "",
    message : '',
    btn : "SUBMIT"
  })

  //  sending Mail
  const sendEmail : React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setMail((prev)=> ({...prev, btn : (
      <div className="flex justify-center items-center h-full ml-5">
        <span className="loader"></span>
      </div>
    )}))
    if (mail.email !== '' || mail.name !== '' || mail.message !== '') { 
      form.current 
      ? emailjs.sendForm('service_8fuxdlk', 'template_ggn6359', form.current, '-tB1ZCDPXqFnUFmyd')
        .then((result) => {
            console.log(result.text);
            setTimeout(()=> {
              Swal.fire({
                icon: 'success',
                title: 'Email Sent!',
                text: "I'll get back to you!",
              });
              setMail({email : "", name : "", message : "", btn : 'Submit'})
            }, 2000)
        }, (error) => {
            console.log(error.text);
        }) : undefined
    } 
     
  };

  return (
    <main className=" border-t-2 border-[#484848]  pt-10 ">
      <div className="px-[4%] lg:px-[40px] ">
        <h1
          className={` heading-txt pb-16 uppercase font-[400] text-[45px] text-center  leading-[42px]  text-[#0a0a0a]  sm:text-[50px] sm:leading-[58px] lg:text-[60px] md:leading-[65px] xl:text-[80px] xl:leading-[90px] dark:text-[#fff] `}
        >
          let&apos;s connect
        </h1>

        {/* <----------------------------| MORE INFO |---------------------------> */}
        <div className=" w-[100%] flex flex-col-reverse gap-[50px]  lg:flex-row-reverse  lg-gap-0">
          <div className=" w-[100%]  text-white flex flex-col-reverse gap-10 sm:gap-0  sm:flex-col  lg:w-[43%] ">
            <div className="  ">
              <p
                className={`   font-semibold  uppercase text-lg text-[#000] sm:text-xl   md:text-lg    dark:text-white `}
              >
                For more info:
              </p>
              <section className=" w-[100%] lg:w-[85%]  flex flex-col  gap-4 items-start sm:items-end rounded-[70px] rounded-tr-[250px] rounded-tl-none rounded-b-none sm:bg-slate-600 bg-transparent ">
              
                <Button 
                  href="mailto:chrisjerry070@gmail.com" 
                  text="chrisjerry070@gmail.com" 
                  
                  styles= "bg-gradient-to-l from-[#00FDEE] to-black mr-7 rounded-tl-none rounded-br-none rounded-[120px]" 
                />
                
                <Button 
                  href="/Resume.pdf" 
                  text="view Resume" 
                  
                  styles= "uppercase bg-gradient-to-l from-[#8F00FF]  to-black rounded-tl-none rounded-br-none rounded-[120px] ml-6 sm:ml-0" 
                />
              
                <div className="  mr-0 ml-14 sm:ml-0 sm:mr-[10px]">
                  <Medias />
                </div>
              </section>
            </div>
            
            <p
              className={`  w-[100%] lg:w-[85%] py-4 px-0 sm:px-4 lg:px-[10%] bg-transparent sm:bg-gradient-to-l from-[#8F00FF] to-black ] text-lg tracking-wide   md:leading-6  md:text-xl text-[#000] md:text-[#c7c7c7] dark:text-[#c7c7c7]  `}
            >
              I am open to remote and onsite full-&nbsp;time, part-time, and
              contract frontend web development jobs.
            </p>
            
          </div>


          {/* <----------------------------| FORM |---------------------------> */}
          <form 
            ref={form}
            onSubmit={sendEmail}
            className=" w-[100%]  flex flex-col  gap-6 lg:w-[50%] ">
            <input
              type="text"
              name="user_name"
              value={mail.name}
              required
              placeholder="NAME"
              onChange={(e) => {setMail((prev)=>({...prev, name : e.target.value}))}}
              className=" w-[100%] p-6 lg:w-[80%] ] lg:p-5 border-[#222] border-[3px] dark:border-[#c7c7c7] bg-transparent outline-none dark:text-gray-200"
            />
            <input
              type="email"
              name="user_email"
              value={mail.email}
              required
              placeholder="EMAIL"
              onChange={(e) => {setMail((prev)=>({...prev, email : e.target.value}))}}
              className="  w-[100%] p-6 lg:w-[80%] ] lg:p-5 border-[#222] dark:border-[#c7c7c7] border-[3px] bg-transparent outline-none dark:text-gray-200"

            />
            <textarea
              required
              placeholder="MESSAGE"
              name="message"
              value={mail.message}
              onChange={(e) => {setMail((prev)=>({...prev, message : e.target.value}))}}
              className=" w-[100%] p-6 lg:w-[80%] ] lg:p-5 h-40 border-[#222] border-[3px] dark:border-[#c7c7c7] bg-transparent outline-none dark:text-gray-200"

            ></textarea>
            <button
              type="submit"
              className={`hover:scale-90 transition-all duration-300 uppercase shadow-2xl border-[3px] border-[#222] dark:border-[#c7c7c7]  font-bold bg-gradient-to-l from-[#00FDEE] to-black p-3.5  pl-10 rounded-tl-none  rounded-bl-none  rounded-[200px]  text-white  flex items-center gap-3 text-[16px]  w-[150px] }`}
            >
              {mail.btn}
            </button>
          </form>
        </div>

      {/* <----------------------------| FOOTER |---------------------------> */}
        <p
          className={`text-center mt-10 mb-5 text-sm text-[#000] dark:text-[#c7c7c7] `}
        >
          Copyright ©2024 All rights reserved | This template is Designed & built by
          <span className=" text-[#00FDEE] text-lg"> Osita</span> with{" "}
          <span className=" heading-txt text-lg">Love</span> &{" "}
          <span className=" heading-txt text-lg">Coffee</span>.
        </p>
      </div>
    </main>
  );
};
