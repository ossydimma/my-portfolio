'use client'
import { useState } from "react";

interface toggleType {
  theme: "" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"" | "dark">>;
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
 
}

export const ToggleSwitch = ({
  isToggled,
  setIsToggled,
  theme,
  setTheme,
}: toggleType) => {

  const [toggledDiv, setToggledDiv] = useState(false);
  return (
    <div
      className=" relative "
      onMouseEnter={() => setToggledDiv(true)}
      onMouseLeave={() => setToggledDiv(false)}
    >
      <div className={"flex "}>
        <input
          type="checkbox"
          checked={isToggled}
          id="darkmode-toggle"
          onChange={() => {
            if (theme === "") {
              setTheme("dark");
              setIsToggled(true);
              localStorage.setItem("currentTheme", "dark");
            } else {
              setTheme("");
              setIsToggled(false);
              localStorage.setItem("currentTheme", "light");
            }
          }}
        />
        <label htmlFor="darkmode-toggle">
          <svg
            version="1.1"
            className="moon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://		www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 49.739 49.739"
            xmlSpace="preserve"
          >
            <path
              d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268
                  c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0
                  c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822
                  C32.639,48.039,28.825,48.888,25.068,48.889z M12.002,4.936c-9.413,6.428-12.756,18.837-7.54,29.253
                  c5.678,11.34,19.522,15.945,30.864,10.268c5.154-2.582,9.136-7.012,11.181-12.357c-5.632,2.427-11.882,2.702-17.752,0.748
                  c-6.337-2.108-11.473-6.557-14.463-12.528C11.899,15.541,11.11,10.16,12.002,4.936z"
            />
          </svg>

          <svg
            version="1.1"
            className="sun"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.	w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 496 496"
            xmlSpace="preserve"
          >
            <rect
              x="152.994"
              y="58.921"
              transform="matrix(0.3827 0.9239 -0.9239 0.3827 168.6176 -118.5145)"
              width="40.001"
              height="16"
            />
            <rect
              x="46.9"
              y="164.979"
              transform="matrix(0.9239 0.3827 -0.3827 0.9239 71.29 -12.4346)"
              width="40.001"
              height="16"
            />
            <rect
              x="46.947"
              y="315.048"
              transform="matrix(0.9239 -0.3827 0.3827 0.9239 -118.531 50.2116)"
              width="40.001"
              height="16"
            />

            <rect
              x="164.966"
              y="409.112"
              transform="matrix(-0.9238 -0.3828 0.3828 -0.9238 168.4872 891.7491)"
              width="16"
              height="39.999"
            />

            <rect
              x="303.031"
              y="421.036"
              transform="matrix(-0.3827 -0.9239 0.9239 -0.3827 50.2758 891.6655)"
              width="40.001"
              height="16"
            />

            <rect
              x="409.088"
              y="315.018"
              transform="matrix(-0.9239 -0.3827 0.3827 -0.9239 701.898 785.6559)"
              width="40.001"
              height="16"
            />

            <rect
              x="409.054"
              y="165.011"
              transform="matrix(-0.9239 0.3827 -0.3827 -0.9239 891.6585 168.6574)"
              width="40.001"
              height="16"
            />
            <rect
              x="315.001"
              y="46.895"
              transform="matrix(0.9238 0.3828 -0.3828 0.9238 50.212 -118.5529)"
              width="16"
              height="39.999"
            />
            <path
              d="M248,88c-88.224,0-160,71.776-160,160s71.776,160,160,160s160-71.776,160-160S336.224,88,248,88z M248,392
                        c-79.4,0-144-64.6-144-144s64.6-144,144-144s144,64.6,144,144S327.4,392,248,392z"
            />
            <rect x="240" width="16" height="72" />
            <rect
              x="62.097"
              y="90.096"
              transform="matrix(0.7071 0.7071 -0.7071 0.7071 98.0963 -40.6334)"
              width="71.999"
              height="16"
            />
            <rect y="240" width="72" height="16" />

            <rect
              x="90.091"
              y="361.915"
              transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -113.9157 748.643)"
              width="16"
              height="71.999"
            />
            <rect x="240" y="424" width="16" height="72" />

            <rect
              x="361.881"
              y="389.915"
              transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 397.8562 960.6281)"
              width="71.999"
              height="16"
            />
            <rect x="424" y="240" width="72" height="16" />
            <rect
              x="389.911"
              y="62.091"
              transform="matrix(0.7071 0.7071 -0.7071 0.7071 185.9067 -252.6357)"
              width="16"
              height="71.999"
            />
          </svg>
        </label>
      </div>
      {toggledDiv && (
        <div className=" absolute  top-[25px] right-0   w-[150px] rounded-lg bg-slate-900 text-white px-2 py-3 fill-white stroke-white  dark:bg-white dark:text-[#000] dark:fill-black  dark:stroke-black lg:right-[-90%] ">
          <div
            className=" flex text-sm justify-between items-center mb-2 cursor-pointer p-1 hover:bg-[#484848] dark:hover:text-white"
            onClick={() => {
              setTheme("");
              setIsToggled(false);
              localStorage.setItem("currentTheme", "");
            }}
          >
            <p>Light-mode</p>
            <svg
              width="30px"
              height="30px"
              viewBox="-2.88 -2.88 29.76 29.76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.144"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                  strokeWidth="0.792"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div
            className=" flex text-sm justify-between items-center cursor-pointer p-1 hover:bg-[#484848] dark:hover:text-white"
            onClick={() => {
              setTheme("dark");
              setIsToggled(true);
              localStorage.setItem("currentTheme", "dark");
            }}
          >
            <p>dark-mode</p>
            <svg
              version="1.1"
              width={23}
              height={23}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://		www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 49.739 49.739"
              xmlSpace="preserve"
            >
              <path
                d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268
                  c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0
                  c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822
                  C32.639,48.039,28.825,48.888,25.068,48.889z M12.002,4.936c-9.413,6.428-12.756,18.837-7.54,29.253
                  c5.678,11.34,19.522,15.945,30.864,10.268c5.154-2.582,9.136-7.012,11.181-12.357c-5.632,2.427-11.882,2.702-17.752,0.748
                  c-6.337-2.108-11.473-6.557-14.463-12.528C11.899,15.541,11.11,10.16,12.002,4.936z"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
