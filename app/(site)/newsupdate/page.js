/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Image1 from "../../Assets/News/unsplash_npTT9rD8wd4.png";
import Image2 from "../../Assets/News/Green.png";
import Image3 from "../../Assets/News/tech.png";
import "./newsupdate.css";
import "../newsroom/Button.css";
import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="page_title_64 title_gradient_color section_padding">
        Stay up to date on all the latest
        <br className="hidden xl:block" /> happenings, and be the first
        <br className="hidden xl:block" />
        one to know.
      </h1>

      <div className="flex justify-center pt-[50px]">
        <button className="banner_button  ">Subscribe to Newsletter</button>
      </div>

      <div className="section_padding flex flex-col  lg:flex-row justify-betweennnp items-center ">
        <div className="w-full text-white  lg:w-[60%]">
          <h1 className="section_title_36">
            Navigating the Metaverse: Mocdt's Insights on Virtual Reality.
          </h1>
          <h6 className=".early_access mt-4">10 min ago</h6>
          <p className="mt-4">
            Virtual reality is no longer science fiction; it's a tangible
            reality that Mocdt is actively shaping. Our VR initiatives are
            designed to immerse users in breathtakingly lifelike environments,
            whether they're exploring distant galaxies......
          </p>
          <div className="relative right-4 bottom-[1px] md:bottom-0 subscribe-button w-[40px] mt-5 ms-4 sm:w-[40px] md:w-[150px] lg:w-[200px] h-full  py-[13px] px-[50px] md:py-[24px] md:px-12 ">
            <Link href="./newspreview">
              <span className="title_gradient_color text-[10px] md:text-[16px] leading-[14px] tracking-[0.14px] ">
                Read More
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex justify-center">
          <Image
            className=" object-cover relative z-50 "
            width={453}
            height={433}
            src={Image1}
            alt=""
            quality={100}
            placeholder="blur"
          />
        </div>
      </div>
      <div className="w-full section_padding   flex flex-col gap-10 md:flex-row md:gap-10 ">
        <div className="border rounded-2xl">
          <Image
            className="w-full"
            height={280}
            width={400}
            src={Image2}
            alt=""
          />{" "}
          ;
          <div className="p-10">
            <h1 className="card_title">
              Green Tech Revolution: Mocdt's Sustainable Initiatives.
            </h1>
            <h6 className="card_sub_title mt-6">10 min ago</h6>
          </div>
          <div className="flex justify-center mb-10">
            <button className="read_btn text-brown-50">Read More </button>
          </div>
        </div>
        <div className="border rounded-2xl">
          <Image
            className="w-full"
            height={280}
            width={400}
            src={Image3}
            alt=""
          />
          <div className="p-10">
            <h1 className="card_title">
              Tech Trends 2023: What's on the Horizon?
            </h1>
            <h6 className="card_sub_title mt-6">10 min ago</h6>
          </div>
          <div className="flex justify-center mb-10">
            <button className="read_btn text-brown-50">Read More </button>
          </div>
        </div>
        <div className="border rounded-2xl">
          <Image
            className="w-full"
            height={280}
            width={400}
            src={Image2}
            alt=""
          />
          <div className="p-10">
            <h1 className="card_title">
              Collaboration Nation: Mocdt's Exciting New Partnerships.
            </h1>
            <h6 className="card_sub_title mt-6">10 min ago</h6>
          </div>
          <div className="flex justify-center mb-10">
            <button className="read_btn text-brown-50">Read More </button>
          </div>
        </div>
      </div>

      <div className="flex mt-5 justify-center section_padding">
        <input
          type="email"
          placeholder="Enter your email address to get latest updates"
          className="bg-icon pl-12 md:pl-16 md:h-16 py-[13px] px-[40px] md:py-[24px] md:px-12  w-[210px] sm:w-[300px] md:w-[400px] lg:w-[600px]  placeholder-[#57656C] text-[10px] md:text-[14px]   text-[#57656C] h-full  bg-black border-none ring-1 ring-[#414548] rounded-lg outline-none"
        />
        <div className="">
          <div className="relative right-4 bottom-[1px] md:bottom-0 subscribe-button w-[50px] sm:w-[100px] md:w-[150px] lg:w-[200px] h-full  py-[13px] px-[40px] md:py-[24px] md:px-12 ">
            <span className="title_gradient_color text-[10px] md:text-[16px] leading-[14px] tracking-[0.14px] ">
              Subscribe
            </span>
          </div>
        </div>
      </div>

      <div className=" hidden md:flex md:w-[60%] w-[100]  mx-auto ">
        <div className="gradient-rounded-div-left left-[0px]  "></div>
        <div className="gradient-rounded-div-right right-[400px] "></div>
      </div>
      <div className="block md:hidden">
        <div className=" gradient-rounded-div-top background_color_animation top-0 "></div>
        <div className="gradient-rounded-div-bottom background_color_animation bottom-[80px] "></div>
      </div>
    </div>
  );
};

export default page;
