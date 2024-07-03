"use client";

import React, { useState, useEffect } from "react";
import "./FounderStory.css";
import auth from "../../app/Assets/Moki/moki-icon/lock.png";
import Image from "next/image";

const Slider = ({ datas }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % datas.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + datas.length) % datas.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 90000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [datas]);

  return (
    <div className="story-slider-border w-full  ">
      {datas.map((item, index) => (
        <>
          {/* // --------- only lg size ------- */}
          <div
            key={index}
            className={`story-container md:mt-[60px] left-0 w-full h-full transition-opacity ${
              index === currentIndex ? "flex " : "hidden"
            } md:px-[100px] `}
          >
            {/* --------------- body slider ------ */}
            <div className="story-body flex md:gap-[40px] justify-center items-center px-2">
              <div className="story-img  md:w-[40%]  flex items-start md:items-center  lg:h-[665px] lg:mb-[50px] justify-center  ">
                <Image
                  width={450}
                  height={500}
                  quality={100}
                  placeholder="blur"
                  src={item?.image}
                  alt={`Slide ${index + 1}`}
                  className=" object-cover rounded-md "
                />
                {/* <p className="text-[15px] text-[#969393]  ">
                    {item?.datetitle}
                  </p> */}
              </div>

              <div className="story-contain md:w-[60%]  md:pt-[30px] xl:pt-[5px] lg:mb-[40px] ps-1">
                {index === 0 && (
                  <>
                    <p className=" text-start story-title-32 ">
                      It was{" "}
                      <span className="text-[#c66f29] font-[600]"> 2005</span> ,
                      a milestone year for me as I had just regained the ability
                      to speak. I found myself an innocent soul, oblivious to
                      the complexities of the real world. My universe comprised
                      only of the warmth of family, the sentiment of love, and
                      the satisfaction of a full belly. My days were filled with
                      endless games as I eagerly waited for my father to return
                      home each evening. So unfolds the riveting tale of my
                      life's journey.
                    </p>
                    <br />
                    <p className=" text-start story-title-32 ">
                      {item?.title02}
                    </p>
                  </>
                )}
                {/* -----index 2 ---- */}
                {index === 1 && (
                  <>
                    <p className=" text-start story-title-32 ">
                      {" "}
                      <span className="liner-gradient font-[500]">
                        I vividly remember the day I stepped into school for the
                        first time at the tender age of 4{" "}
                      </span>
                      . It should have been a joyous occasion, but for me it was
                      more like venturing into an unknown world. I admit, the
                      problem was mainly due to my stubborn nature since
                      childhood. That day, Nana faced a herculean task trying to
                      get me to sit still in the classroom.
                    </p>
                    <br />
                    <p className=" text-start story-title-32 s-p-b-10">
                      <span className="text-[#dd2fd1] font-[500]">
                        {" "}
                        In a dramatic twist,{" "}
                      </span>{" "}
                      unable to control my tantrums, Nana finally resorted to
                      giving me a firm slap. Little did we know that this single
                      act would ignite within me, a passion for learning.
                      Instead of resisting reading and writing like most kids
                      for two years, Nana's slap set my educational journey
                      ablaze, and my love for reading and writing took off from
                      there.
                    </p>
                  </>
                )}
                {/* -----index 3 ---- */}
                {index === 2 && (
                  <>
                    <p className=" text-start story-title-32 ">
                      <span className="liner-gradient font-[500]">
                        {" "}
                        As the days went by{" "}
                      </span>
                      , my passion for reading and writing grew, leading me to
                      invest more time and energy into it.
                      <span className="liner-gradient ">
                        {" "}
                        Despite being in Class 2,
                      </span>{" "}
                      I struggled to secure the top spot due to my difficulties
                      with English. My journey towards success was a tough one,
                      to say the least, as I battled a{" "}
                      <span className="text-[#c52972] font-[500]">
                        {" "}
                        breathing issue{" "}
                      </span>
                      that kept me from fully participating in Class 3. But that
                      wasn't the end of my challenges; one fateful day, my
                      condition worsened during class itself. The teacher had no
                      choice but to call my mother and send me home.
                    </p>
                    <br />
                    <p className=" text-start story-title-32  s-p-b-10">
                      <span className="text-[#bb4eff] font-[500]">
                        {" "}
                        From that point on,{" "}
                      </span>{" "}
                      my life took an unexpected turn as{" "}
                      <span className="text-[#c426c9] font-[500]">
                        {" "}
                        I became the target of school bullies who reveled in
                        making fun of my predicament.{" "}
                      </span>{" "}
                      Unable to bear the relentless taunts, my parents decided
                      to switch schools for a fresh start. Sadly, this upheaval
                      took a toll on me - my once-burning interest in reading
                      and writing began to wane.
                    </p>
                  </>
                )}
                {/* ----- index 4 ----- */}
                {index === 3 && (
                  <>
                    <p className=" text-start story-title-32 ">
                      <span className="text-[#c66f29] font-[600]">
                        At the age of 9,{" "}
                      </span>{" "}
                      I began learning about leadership through playing football
                      at school. By the time I turned 10, I started my first
                      business venture - a sticker shop. This business proved to
                      be profitable from the very first day. Initially, I
                      purchased 5 rare sticker pages for 2 BDT each. After
                      cutting out individual stickers, I would end up with 6 to
                      8 stickers per page. I then sold each of these stickers to
                      my classmates for 1 BDT each. The profit margin for each
                      sticker was an impressive 4to 6 taka.
                    </p>
                    <br />
                    <p className=" text-start story-title-32 ">
                      {item?.title02}
                    </p>
                  </>
                )}

                {index === 4 && (
                  <>
                    <p className=" text-start story-title-32 ">
                      <span className="text-[#c66f29] font-[600]">
                        {" "}
                        At the age of 12,{" "}
                      </span>{" "}
                      my elder sibling received their first computer. I was
                      extremely excited, even though I only had access to the
                      computer for an hour, which left me feeling somewhat
                      disappointed. Despite that, I was happy and began learning
                      about computers during that time.
                    </p>
                    <br />
                    <p className=" text-start story-title-32 ">
                      {item?.title02}
                    </p>
                  </>
                )}
                {index === 5 && (
                  <>
                    <p className=" text-start story-title-32 ">
                      <span className="text-[#29c67d] font-[600] ">
                        At the age of 13, I started my second business, focusing
                        on selling Clash of Clans coins to fellow players in
                        Bangladesh through a local payment gateway. I recognized
                        the struggles faced by local players and aimed to
                        simplify the process for everyone.
                      </span>
                    </p>
                    <br />
                    <p className=" text-start story-title-32 ">
                      {item?.title02}
                    </p>
                  </>
                )}
                {index === 6 && (
                  <>
                    <p className=" text-start story-title-32 ">
                      started Pfj Studios, my third business, when I was 15
                      years old. Pfj Studios is an affordable event management
                      and planning company that provides services such as
                      photography, AV equipment, and sound system rentals.
                      Within four months, I had gained a substantial following
                      on Facebook, with over 1600 followers, and had taken on 12{" "}
                      <br />
                      <br />
                      clients. However, I also experienced a few setbacks. My
                      Facebook page was hacked, and I had to start over again.
                      In addition, my sister got married, and I had to say
                      goodbye to her as she moved out. The silver lining was
                      that this period also led to me getting my own PC, which
                      allowed me to embark on a new learning journey in UI and
                      UX design, an area I became passionate about and spent two
                      years exploring.
                    </p>
                    <br />
                    <p className=" text-start story-title-32 ">
                      {item?.title02}
                    </p>
                  </>
                )}
                {index === 7 && (
                  <>
                    <p className=" text-start story-title-32 ">
                      <span className="text-[#29c67d] font-[600] ">
                        {" "}
                        At the age of 16,{" "}
                      </span>{" "}
                      I discovered{" "}
                      <span className="text-[#29c67d] font-[600] ">
                        {" "}
                        Fiverr{" "}
                      </span>{" "}
                      and began working on the platform using my mother's name.
                      Fortunately, I received my first order within a week and
                      continued working on Fiverr for almost 2 years and 10
                      months.
                      <span className="text-[#ae29c6] font-[600] ">
                        {" "}
                        On my 17th birthday,{" "}
                      </span>{" "}
                      I was inspired with an idea, which I consider a gift from
                      God - the concept of "Mocdt: The Dynamic Years of 2020."
                      Following this, I started gathering information from
                      people about the challenges they face in their work lives
                      and documented their experiences.
                    </p>
                    <br />
                    <p className=" text-start story-title-32 ">
                      {item?.title02}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ))}

      <button
        onClick={prevSlide}
        className="btn-prev absolute top-1/2 left-2 transform -translate-y-1/2  text-white px-8 py-2 rounded"
      >
        {/* <Image onClick={prevSlide} src={prev} width={20} height={20} alt="" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="16"
          viewBox="0 0 30 16"
          fill="none"
        >
          <path
            d="M0.292915 7.29289C-0.0976085 7.68341 -0.0976086 8.31658 0.292915 8.7071L6.65688 15.0711C7.0474 15.4616 7.68056 15.4616 8.07109 15.0711C8.46161 14.6805 8.46161 14.0474 8.07109 13.6569L2.41424 8L8.07109 2.34314C8.46162 1.95262 8.46162 1.31945 8.07109 0.92893C7.68057 0.538406 7.0474 0.538406 6.65688 0.92893L0.292915 7.29289ZM29.0356 7L1.00002 7L1.00002 9L29.0356 9L29.0356 7Z"
            fill="#FAFAFA"
          />
        </svg>
      </button>

      <button
        className="btn-next absolute top-1/2 right-2 transform -translate-y-1/2 text-white px-8 py-2 rounded"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="16"
          viewBox="0 0 30 16"
          fill="none"
        >
          <path
            d="M28.7428 8.70711C29.1333 8.31658 29.1333 7.68342 28.7428 7.29289L22.3788 0.928932C21.9883 0.538407 21.3551 0.538407 20.9646 0.928932C20.5741 1.31946 20.5741 1.95262 20.9646 2.34315L26.6214 8L20.9646 13.6569C20.5741 14.0474 20.5741 14.6805 20.9646 15.0711C21.3551 15.4616 21.9883 15.4616 22.3788 15.0711L28.7428 8.70711ZM28.0356 7L1.91528e-05 7L1.89942e-05 9L28.0356 9L28.0356 7Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
