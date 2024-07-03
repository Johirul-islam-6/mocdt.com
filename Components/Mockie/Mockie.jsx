import React from "react";
import Image from "next/image";
import mockie from "../../app/Assets/Mockie/moki_47327.png";
import Image2 from "../../app/Assets/Mockie/Button 22.png";

import "./Mockie.css";
import dynamic from "next/dynamic";
import Link from "next/link";
const AudioWave = dynamic(() => import("./AudioWave"));

const Mockie = () => {
  return (
    <div className="flex items-center justify-center lg:flex-row flex-col gap-4 2xl:gap-0 mt-28 mokie-bg px-8 2xl:px-10 py-8">
      <div className="lg:w-[55%]">
        <h1 className="paragraph_title_28 title_gradient_color mb-5 lg:mb-10">
          Say Hello to Moki!
        </h1>
        <p className="paragraph_16 text-[#9b9b9b] mb-10 lg:mb-20  ">
          Your cutting-edge AI personal assistant ready to make your daily life{" "}
          easier and more efficient. Just by using your voice, Moki can take
          care of your day-to-day tasks with ease, freeing up your time to focus
          on the things that matter most.
        </p>

        <div className="flex sm:flex-row flex-col   gap-5 ">
          <AudioWave />
          <Link href="/moki">
            <button className="mocki-button">Learn more</button>
          </Link>
        </div>
      </div>

      <div className="lg:w-[45%] flex justify-end mokie-gradient relative">
        <div className="relative mt-5 hidden md:flex justify-end   items-center ">
          <div className="block">
            <div className=" gradient-rounded-div-top top-0  left-[80px]"></div>
            <div className="gradient-rounded-div-bottom bottom-[120px] left-[110px]"></div>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="mokie-gradient-rounded-left right-[0px] bottom-[-70px] "></div>
          <div className="mokie-gradient-rounded-right left-[0px] bg-[#003b8033] bottom-[-170px]"></div>
        </div>
        <Image
          className="w-full h-full sm:w-[388px] 2xl:w-[488px] 2xl:h-[460px] sm:h-[390px] z-[1000]"
          src={mockie}
          width={390}
          height={388}
          alt="mokie"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Mockie;
