"use client";

import Slider from "./Slider";
import "./FounderStory.css";

import image01 from "../../app/Assets/founder-story/01.png";
import image02 from "../../app/Assets/founder-story/02.png";
import image03 from "../../app/Assets/founder-story/03.png";
import image04 from "../../app/Assets/founder-story/4.png";
import image05 from "../../app/Assets/founder-story/5.png";
import image06 from "../../app/Assets/founder-story/6.png";
import image07 from "../../app/Assets/founder-story/7.png";
import image08 from "../../app/Assets/founder-story/8.png";

export const FounderSlider = () => {
  const datas = [
    {
      image: image01,
      datetitle: "2.5 year fardin sheikh image",
      title01:
        "It was 2005, a milestone year for me as I had just regained the ability to speak. I found myself an innocent soul, oblivious to the complexities of the real world. My universe comprised only of the warmth of family, the sentiment of love, and the satisfaction of a full belly. My days were filled with endless games as I eagerly waited for my father to return home each evening. So unfolds the riveting tale of my life's journey.",
      title02: "",
    },
    {
      image: image02,
      datetitle: "Adarsha academy school",
      title01:
        "I vividly remember the day I stepped into school for the first time at the tender age of 4. It should have been a joyous occasion, but for me it was more like venturing into an unknown world. I admit, the problem was mainly due to my stubborn nature since childhood. That day, Nana faced a herculean task trying to get me to sit still in the classroom. ",
      title02:
        "In a dramatic twist, unable to control my tantrums, Nana finally resorted to giving me a firm slap. Little did we know that this single act would ignite within me, a passion for learning. Instead of resisting reading and writing like most kids for two years, Nana's slap set my educational journey ablaze, and my love for reading and writing took off from there.",
    },
    {
      image: image03,
      datetitle: " Child Is Being Bullied",
      title01:
        "As the days went by, my passion for reading and writing grew, leading me to invest more time and energy into it. Despite being in Class 2, I struggled to secure the top spot due to my difficulties with English. My journey towards success was a tough one, to say the least, as I battled a breathing issue that kept me from fully participating in Class 3. But that wasn't the end of my challenges; one fateful day, my condition worsened during class itself. The teacher had no choice but to call my mother and send me home.",
      title02:
        "From that point on, my life took an unexpected turn as I became the target of school bullies who reveled in making fun of my predicament. Unable to bear the relentless taunts, my parents decided to switch schools for a fresh start. Sadly, this upheaval took a toll on me - my once-burning interest in reading and writing began to wane.",
    },

    {
      image: image04,
      datetitle: " Child Is Being Bullied",
      title01: "",
      title02: "",
    },
    {
      image: image05,
      datetitle: " Child Is Being Bullied",
      title01: "",
      title02: "",
    },
    {
      image: image06,
      datetitle: " Child Is Being Bullied",
      title01: "",
      title02: "",
    },
    {
      image: image07,
      datetitle: " Child Is Being Bullied",
      title01: "",
      title02: "",
    },
    {
      image: image08,
      datetitle: " Child Is Being Bullied",
      title01: "",
      title02: "",
    },
  ];
  return (
    <div className="  flex justify-center items-center py-[20px]">
      {/* <Slider
        slides={datas}
        datas={datas}
        size="medium"
        slideInterval={6}
        inContainer
        className=""
      /> */}
      <Slider slides={datas} datas={datas} size="large" slideInterval={6} />

      {/* ------------ gradient div------- */}
      <div className="flex justify-between">
        <div className="story-gradient-rounded-left top-[350px] left-[0px] "></div>
        <div className="story-gradient-rounded-right top-[350px]  right-[0px] "></div>
      </div>
    </div>
  );
};
