import Image from "next/image";
import React from "react";
import "./LifeMocdt.css";
import Career from "../../app/Assets/work.png";
import arrowDown from "../../app/Assets/arrow-down.png";
import Link from "next/link";

export const LifeMocdt = () => {
  return (
    <>
      <div className="Life-Mocdt mt-[80px] md:mt-[155px] px-8 2xl:px-10 py-8">
        <div className="bg-gradient md:w-[250px] mx-auto pt-[28px]">
          <h1 className="section_title_34 title_gradient_color">
            Life at MOCDT
          </h1>
        </div>

        <div className=" flex xl:flex-row flex-col-reverse lg:gap-3 items-center mt-[40px]">
          <div className="life-contant ">
            <p className="paragraph_22 text-[#FFF] text-center xl:text-justify">
              At our core, we celebrate teamwork - both yours and ours. Our
              dedication to cultivating an environment that embraces diversity
              and inclusivity enables us to develop a product that resonates
              with people while staying true to who we are. As a fully remote
              company from day one, we empower our employees with the freedom to
              choose their working hours, sparking creativity and innovation.
            </p>
            <div className="pt-[30px] flex justify-center xl:flex-none">
              <Link href="/career">
                <button className="border-gradient-button  w-[239px] h-[69px] rounded-[9px] ">
                  <span className="text-center flex items-center justify-center ps-7 font-normal">
                    Go to Career Page{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="58"
                      height="50"
                      viewBox="0 0 58 59"
                      fill="none"
                    >
                      <path
                        d="M35.9146 31.9472V22.3702M35.9146 22.3702H26.3377M35.9146 22.3702L21.5492 36.7356"
                        stroke="#FAFAFA"
                        strokeWidth="2.53947"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          {/* -------------- graident backgroun image div --------------- */}
          <div className="relative mt-5 hidden md:flex justify-end   items-center ">
            <div className="block">
              <div className=" gradient-rounded-div-top background_color_animation top-0  left-[235px]"></div>
              <div className="gradient-rounded-div-bottom background_color_animation bottom-[-40px] left-[235px]"></div>
            </div>
          </div>
          <Image
            className="relative z-50"
            src={Career}
            alt="Picture of the author"
            width={460}
            height={494}
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>
    </>
  );
};
