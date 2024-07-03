/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export const Privacy = () => {
  return (
    <>
      <div className="row-1 flex w-[100%] mt-[80px] md:mt-[125px] px-3">
        <div className=" w-[100%]  md:flex lg:flex-row flex-col-reverse md:flex-col  lg:gap-3 justify-end  ">
          {/* ------------ button ------------ */}
          <div className="learn_more_button-container flex justify-start   ">
            <div className="">
              <p className="paragraph_title_48 md:pe-5">
                <span className="bg-gradient text-start ">
                  {" "}
                  Elevating Security
                </span>{" "}
                to Unrivaled Heights.{" "}
              </p>

              {/* ----- button ------- */}
              <div className="button-center">
                <Link href="https://account.mocdt.com/">
                  <button className="learn_more_button  mt-[13px] w-[139px] h-[52px] rounded-[7px] inline-flex items-center justify-center">
                    Learn More
                    <GoArrowUpRight className="ms-2 text-lg md:text-xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* ----------------text ----- */}
          <div className="flex justify-start md:w-[100%]">
            <p className="paragraph_16 text-[#FAFAFA]  text-justify ">
              We understand the importance of protecting your personal and
              corporate data. That's why our products come with advanced
              security features, like AI-driven login encryption and Face ID.
              But the best part is that these features are enabled by default –
              no need to mess around with complicated settings! Plus, with our
              suite of extra data protection tools, you can be sure that your
              personal and business information is secure.
            </p>
          </div>
        </div>
      </div>

      {/* =========---------- row-2 ---------==============- */}
      <div className="row-2 flex w-[100%] mt-[60px] md:mt-[116px] px-3">
        <div className="ceo-container flex lg:flex-row flex-col-reverse md:flex-col lg:gap-3 justify-end ">
          {/* ---------------- paragrap ----------- */}
          <div className=" flex justify-start md:w-[100%]">
            <p className="paragraph_16 text-[#FAFAFA]  text-justify ">
              At Mocdt, we prioritize your privacy above all else. Each product
              is meticulously crafted to shield your personal information from
              prying eyes. Rest assured, your data will never fall into the
              hands of third parties for marketing or advertising pursuits.
              Furthermore, our apps only disclose information you've expressly
              given permission to share.
            </p>
          </div>
          {/* ------------  button ------------ */}
          <div className="learn_more_button-container  flex justify-start md:ps-7  ">
            <div className="">
              <p className="paragraph_title_48 ">
                <span className="bg-gradient text-start ">
                  {" "}
                  Safeguard Privacy
                </span>{" "}
                with Mocdt Products.{" "}
              </p>

              {/* ----- button ------- */}
              <div className="button-center">
              <Link href="https://account.mocdt.com/">
                  <button className="learn_more_button  mt-[13px] w-[139px] h-[52px] rounded-[7px] inline-flex items-center justify-center">
                    Learn More
                    <GoArrowUpRight className="ms-2 text-lg md:text-xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
