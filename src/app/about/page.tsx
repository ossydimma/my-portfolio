import { About } from "../components/About";
import { Connect } from "../components/Connect";
import { Experience } from "../components/Experience";
import { Medias } from "../components/Medias";
import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

const page = () => {
  return (
    <div className=" mt-[12vh]  flex flex-col gap-20">
      {/* <----------------------------|  WHY WORK WITH ME  |----------------------------> */}
      <section className=" flex justify-between items-center gap-14 flex-col  mx-[5%] pb-2 pt-10 lg:pt-24 lg:flex-row  lg:gap-0 lg:items-start">
        <h1
          className={`rev-heading-txt text-center  uppercase font-[700] text-[#0a0a0a]  text-3xl lg:text-[40px]  lg:text-left  dark:text-[#fff] `}
        >
          why work with me?
        </h1>
        <article className=" w-[95%] lg:w-[50%]  tracking-normal text-lg text-[#222] dark:text-[#c7c7c7] sm:text-xl sm:tracking-wide">
          As a frontend developer, I bring a unique combination of technical
          expertise, creative flair, and excellent communication skills to the
          table. I understand the importance of user experience and design, and
          I strive to create visually stunning and intuitive interfaces that
          engage users and drive business results. Additionally, I am a reliable
          and collaborative team player, always willing to go the extra mile to
          ensure that projects are completed on time and to the highest
          standards. By working with me, clients or employers can expect a
          seamless and enjoyable project experience, and ultimately, a product
          that exceeds their expectations.
        </article>
      </section>
      {/* <----------------------------|  EXPERIENCE  |----------------------------> */}
      <div className="border-y-2 border-[#484848]  py-10 lg:pt-24">
        <section className=" flex justify-between items-center gap-32 flex-col  mx-[5%]  lg:flex-row  lg:gap-0 lg:items-start">
          <h1
            className={`rev-heading-txt text-center  uppercase font-[700] text-[#0a0a0a]  text-3xl lg:text-5xl  lg:text-left  dark:text-[#fff] `}
          >
            My Experience
          </h1>
          <div className=" w-[95%] lg:w-[50%] flex flex-col gap-16  ">
            <Experience
              title="Front End Developer Collaboration"
              date="Aug 2022 - Present"
              descript="I have been contributing to an open-source project called ShareAm
              for over a year. The project aims to develop a web application
              that provides users with high-quality video and audio during
              screensharing sessions. As a contributor, I have been responsible
              for developing new features, fixing bugs, and improving the user
              interface."
              company="NajaCodePadi"
            />
            <Experience
              title="Front End Developer Intern"
              date={`Dec 2023 - Jan 2024`}
              company="Skyscanner"
              descript={
                <ul className=" pl-4">
                  <li className=" list-disc">
                    Developed responsive website layouts using HTML, CSS,and
                    JavaScript.
                  </li>
                  <li className=" list-disc">
                    Communicated with others, demonstrating strong verbal and
                    written communication skill
                  </li>
                  <li className=" list-disc">
                    Performed assignments as determined by the supervisor.
                  </li>
                  <li className=" list-disc">
                    Communicated with others, demonstrating strong verbal and
                    written communication skill
                  </li>
                </ul>
              }
            />
            <Experience
              title="Front End Developer Intern"
              date={`Feb 2023 - Present`}
              company="Oasis Infobyte"
              descript={
                <ul className=" pl-4">
                  <li className=" list-disc">
                    Developed reusable components for future use in other
                    projects.
                  </li>
                  <li className=" list-disc">
                    Utilized version control tools such asGit and GitHub to
                    manage codebase.
                  </li>
                  <li className=" list-disc">
                    Debugged front-end code to identify and correct errors in
                    functionality.
                  </li>
                  <li className=" list-disc">
                    Resolvedbrowser compatibility issuesto ensure optimal
                    performance.
                  </li>
                  <li className=" list-disc">
                    Built user interfaces with React.js, Typescriptand Tailwind
                    css.
                  </li>
                </ul>
              }
            />
            <span className="text-lg md:text-2xl text-[#000] text-center dark:text-[#fff] lg:text-left">
              I am always open to new a Experience.
            </span>
          </div>
        </section>
      </div>

      <div className=" ">
        {/* <----------------------------|  CAPABILITIES  |----------------------------> */}
        <section className=" flex justify-between items-center gap-14 flex-col  mx-[5%]  lg:flex-row  lg:gap-0 lg:items-start">
          <h1
            className={`rev-heading-txt text-center  uppercase font-[700] text-[#0a0a0a]  text-3xl lg:text-5xl  lg:text-left  dark:text-[#fff] `}
          >
            My Capabilities
          </h1>
          <div className=" w-[95%] lg:w-[50%] flex flex-col-reverse gap-12  ">
            <p
              className={`text-lg md:text-2xl text-[#000] text-center dark:text-[#fff] lg:text-left `}
            >
              I am always looking to add more skills.
            </p>
            <div className=" flex items-center justify-center flex-wrap gap-3 text-[#0a0a0a] text-sm md:text-lg dark:text-[#fff]  xl:justify-start ">
              {/* <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">
                HTML
              </p>
              <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">
                CSS
              </p> */}
              <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">
                JAVASCRIPT
              </p>
              <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">
                REACT
              </p>
              <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">
                TAILWIND CSS
              </p>
              <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">
                SASS
              </p>
              <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">
                TYPESCRIPT
              </p>
              <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">
                NEXT JS
              </p>
              <p className=" px-6 py-3 lg:px-9 md:py-4 rounded-[100px] border border-[#222] dark:border-[#c7c7c7]">
                GIT
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* <----------------------------|  CONTACT  |----------------------------> */}

      <Connect />
    </div>
  );
};

export default page;
