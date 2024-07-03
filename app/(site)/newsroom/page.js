/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import "./newsroom.css";
import "./Button.css";
import Image from "next/image";
import Image1 from "../../Assets/News/news.png";
import SubscribeButton from "@/Components/SubscribeButton/SubscribeButton";

const page = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const loadMailchimpScript = () => {
    if (!scriptLoaded) {
      const script = document.createElement("script");
      script.id = "mcjs";
      script.async = true;
      script.src =
        "https://chimpstatic.com/mcjs-connected/js/users/6557ea9d22add5e83ac63fb28/ba5171a0b27641ecbc08389c6.js";
      document.head.appendChild(script);
      setScriptLoaded(true);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="page_title_64 title_gradient_color section_padding">
        Stay up to date on all the latest
        <br className="hidden xl:block" /> happenings, and be the first
        <br className="hidden xl:block" />
        one to know.
      </h1>

      <div className="flex justify-center pt-[50px]">
        <button onClick={loadMailchimpScript} className="banner_button  ">
          Subscribe to Newsletter
        </button>
      </div>

      <div className="flex items-center justify-center section_padding bg-background">
        <Image
          src={Image1}
          height={450}
          width={412}
          className="relative z-50"
          alt="newsRomm"
        />
      </div>
      <p className="relative z-50 text-center section-title">
        Oopsie-doodle! No news here right now, but hold onto your digital hats
        because we're brewing up <br /> some seriously exciting tech tea for
        you!{" "}
      </p>

      <p className="page_title_38 section_padding">Stay Tuned</p>
      <div className="flex mt-5 justify-center">
        
      </div>
      {/* ---gredient div---- */}
      <div className="flex md:w-[60%] w-[100]  mx-auto ">
        <div className="gradient-rounded-div-left left-[0px]  "></div>
        <div className="gradient-rounded-div-right right-[400px] "></div>
      </div>
    </div>
  );
};

export default page;
